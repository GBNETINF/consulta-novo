import {useState} from "react";
import {useRouter} from 'next/router'
import {Copyright, Alert, Image, Input, Word} from "@/components";
import {Container, Box, Typography, Grid, Link, TextField} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import {fetchWithoutCredentials} from "@/utils/fetch";
import {setSession, destroySession} from '@/utils/session'
import {validateCpf} from "@/utils/validations";

const Login = () => {
    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({open: false, message: ''})
    const [cpf, setCpf] = useState('')
    const [cpfError, setCpfError] = useState('')
    const [password, setPassword] = useState('')

    destroySession('token')

    /**
     * Trata o submit do formulário.
     *
     * @param event
     *      Evento do submit
     * @returns {Promise<void>}
     */
    async function handleSubmit(event) {
        event.preventDefault()

        if (!validateCpf(cpf)) {
            setCpfError('CPF inválido')

            return
        }

        setCpfError('')
        setLoading(true)

        const response = await fetchWithoutCredentials('auth/login', {
            method: 'POST', body: JSON.stringify({cpf, password}),
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
                <TextField label='CPF' value={cpf} onChange={(e) => setCpf(e.target.value)} />
                <TextField label='Senha' value={password} onChange={(e) => setPassword(e.target.value)} />
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