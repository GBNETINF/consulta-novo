import * as React from "react";
import {useState} from "react";
import {useRouter} from 'next/router'
import {setSession, destroySession} from '@/utils/session'
import {Container, Box, Typography, TextField, Grid, Link} from "@mui/material";
import {LoadingButton} from '@mui/lab';
import {Copyright, Alert, Image} from "@/components";
import {fetchWithoutCredentials} from "@/utils/fetch";

const Login = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const [alert, setAlert] = React.useState({
        open: false, message: ''
    });

    destroySession('token')
    
    async function handleSubmit(event) {
        event.preventDefault()

        setLoading(true)

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetchWithoutCredentials('auth/login', {
                method: 'POST', body: JSON.stringify({email, password}),
        })

        if (response.ok) {
            const sessionData = await response.json()

            setSession('token', sessionData)

            await router.push('/home')

            setLoading(false)
        } else {
            setAlert({open: true, message: 'Email ou senha inválido.'})
            setLoading(false)
        }
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
                            Governo do Estado de São Paulo
                        </Typography>
                        <Typography className={'uppercase font-bold'} component="h1" variant="h5" align="center">
                            Secretaria de Estado da Saúde
                        </Typography>
                    </Box>
                </Box>
                <Box className={'mt-2'} component="form" onSubmit={handleSubmit} noValidate>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoFocus
                        disabled={loading}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        disabled={loading}
                    />
                    <LoadingButton loading={loading} className={'mt-6 mb-4 bg-blue-500'} type="submit" fullWidth
                                   variant="contained">
                        Entrar
                    </LoadingButton>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Esqueceu sua senha?
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