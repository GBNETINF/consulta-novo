import '../app/globals.css';
import * as React from "react";
import {createTheme, ThemeProvider} from "@mui/material/styles";

const MyApp = ({ Component, pageProps }) => {

    const defaultTheme = createTheme({
        palette: {
            secondary: {
                main: '#6c757d'
            }
        }
    });

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp