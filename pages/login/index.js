import {useEffect, useState} from "react";
import {useRouter} from 'next/router'
import {Copyright, Alert, Image, Input, Word} from "@/components";
import {Container, Box, Typography, Grid, Link, TextField} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import {fetchWithoutCredentials} from "@/utils/fetch";
import {setSession, destroySession} from '@/utils/session'
import {validateCpf} from "@/utils/validations";

const Login = () => {
    destroySession('token')

    const router = useRouter()

    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({open: false, message: ''})

    /** Controladores do forms */
    const [form, setForm] = useState({
        cpf: {value: '', error: ''},
        password: {value: '', error: ''}
    })

    const formSetError = (field, message) => {
        setForm({...form, [field]: {value: form[field].value, error: message} })
    }

    const formSetValue = (field, value) => {
        setForm({...form, [field]: {value: value, error: '' }})
    }

    /**
     * Trata o submit do formulário.
     *
     * @param event
     *      Evento do submit
     * @returns {Promise<void>}
     */
    async function handleSubmit(event) {
        event.preventDefault()

        if (!validateCpf(form.cpf.value)) {
            formSetError('cpf', 'CPF inválido')

            return
        }

        setLoading(true)

        const response = await fetchWithoutCredentials('auth/login', {
            method: 'POST',
            body: JSON.stringify({
                cpf: form.cpf.value,
                password: form.password.value
            }),
        })

        if (response.ok) {
            const sessionData = await response.json()

            setSession('token', sessionData)

            await router.push('/home')

            setLoading(false)

            return
        }

        setAlert({open: true, message: 'CPF ou senha inválida.'})

        setLoading(false)
    }

    return (<Container className={'h-dvh flex items-center'} component="main" maxWidth="md">
        <Image
            className={'absolute top-5 left-8'}
            src={'/Logo_SCS_dark.svg'}
            alt={'Logo_SCS_dark'}
            type="image/svg"
            width={130}
            height={34}
            loading={"lazy"}
        />

        <Alert open={alert.open} message={alert.message} handlleClose={() => {
            setAlert({open: false, message: ''})
        }}/>

        <Box className={'w-full px-4 md:px-24 grid justify-items-center'}>
            <Box className={'flex justify-between gap-6 flex-col md:flex-row mb-4 md:mb-10 items-center'}>
                <Image
                    src={'/Logo_SP.png'}
                    alt={'Logo_SP'}
                    type="image/png"
                    width={80}
                    height={54}
                    loading={"lazy"}
                />
                <Box className={'grid justify-items-center'}>
                    <Typography component="body2" align="center">
                        <Word width={200} path="governo.governo"/>
                    </Typography>
                    <Typography className={'uppercase font-bold'} component="h1" variant="h5" align="center">
                        <Word width={300} height={32} path="governo.secretaria"/>
                    </Typography>
                </Box>
            </Box>
            <Box className={'mt-2'} component="form" onSubmit={handleSubmit} noValidate>
                <Input
                    id='cpf'
                    name="cpf"
                    label={<Word width={30} path="sistema.inputs.cpf" />}
                    type='text'
                    mask={'000.000.000-00'}
                    value={form.cpf.value}
                    onChange={(e) => formSetValue(e.target.name, e.target.value)}
                    error={form.cpf.error !== ''}
                    helperText={form.cpf.error}
                    required={true}
                    fullWidth={true}
                />
                <Input
                    id='password'
                    name="password"
                    label={<Word width={30} path="sistema.inputs.senha" />}
                    type='password'
                    custom={'Password'}
                    value={form.password.value}
                    onChange={(e) => formSetValue(e.target.name, e.target.value)}
                    error={form.password.error !== ''}
                    helperText={form.password.error}
                    required={true}
                    fullWidth={true}
                />
                <LoadingButton loading={loading} className={'mt-6 mb-4 bg-blue-500'} type="submit" fullWidth variant="contained">
                    <Word width={64} path="sistema.botoes.entrar"/>
                </LoadingButton>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            <Word width={150} path="sistema.links.esqueceu_senha"/>
                        </Link>
                    </Grid>
                </Grid>
            </Box>
            <div className={'mt-6'}>
                <Copyright/>
            </div>
        </Box>
    </Container>)
}

export default Login