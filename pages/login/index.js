import * as React from "react";
import {useState} from "react";
import {useRouter} from 'next/router'
import {setSession} from '@/utils/session'
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import LoadingButton from '@mui/lab/LoadingButton';
import {Snackbar} from "@mui/material";
import Copyright from "@/components/Copyright";
import {Alert} from "@mui/lab";

const Login = () => {
    const router = useRouter()

    const [loading, setLoading] = useState(false)

    const [snackbar, setSnackbar] = React.useState({
        open: false,
        message: ''
    });

    const handleCloseSnackbar = () => {
        setSnackbar({open: false, message: ''})
    };

    async function handleSubmit(event) {
        event.preventDefault()

        setLoading(true)

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('http://localhost:8083/api/auth/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password}),
        })

        if (response.ok) {
            const sessionData = await response.json()

            setLoading(false)

            setSession('token', sessionData)

            await router.push('/home')
        } else {
            setSnackbar({open: true, message: 'Email ou senha inválido.'})
            setLoading(false)
        }
    }

    return (
        <Container className={'h-dvh flex items-center'} component="main" maxWidth="md">
            <Image className={'absolute top-5 left-8'}
                   src="/Logo_SCS_dark.svg"
                   alt="Logo_SCS_dark"
                   width={130}
                   height={34}
                   loading={"lazy"}
            />
            <Snackbar
                open={snackbar.open}
                onClose={handleCloseSnackbar}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                autoHideDuration={6000}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="error"
                    variant="filled"
                    sx={{width: '100%'}}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>

            <Box className={'w-full px-4 md:px-24 grid justify-items-center'}>
                <Box className={'flex justify-between gap-6 flex-col md:flex-row mb-4 md:mb-10 items-center'}>
                    <Image
                        src="/Logo_SP.png"
                        alt="Logo_SP"
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
        </Container>
    )
}

export default Login