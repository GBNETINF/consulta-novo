import '../../app/globals.css';

import { useRouter } from 'next/router'
import {setSession} from '@/utils/session'

import * as React from "react";
import Image from "next/image";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Copyright from "@/components/Copyright";
import LoadingButton from '@mui/lab/LoadingButton';
import {useState} from "react";

const defaultTheme = createTheme();

export default function Login() {
    const router = useRouter()

    const [loading, setLoading] = useState(false)

    async function handleSubmit(event) {
        setLoading(true)

        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('http://localhost:8083/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            setLoading(false)
            const sessionData = await response.json()

            setSession('token', sessionData)

            await router.push('/home')
        } else {
            console.error('Login failed')
            setLoading(false)
        }
    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container className={'h-dvh flex items-center'} component="main" maxWidth="md">
                <Box className={'w-full px-4 md:px-24 grid justify-items-center'}>
                    <Box className={'flex justify-between gap-8 flex-col md:flex-row mb-4 md:mb-10 items-center'}>
                        <Image
                            src="/Logo_S_SCS.svg"
                            alt="Logo_S_SCS"
                            width={50}
                            height={24}
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
                        <LoadingButton loading={loading} className={'mt-6 mb-4 bg-blue-500'} type="submit" fullWidth variant="contained">
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
            </Container>
        </ThemeProvider>
    )
}