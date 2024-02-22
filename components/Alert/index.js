import {Snackbar} from "@mui/material";
import AlertLab from "@mui/lab/Alert";

/**
 * Retorna a string da posição
 * @param latter
 * @returns {*|string}
 */
function getThePositionByLetter(latter = '') {

    const lattetPosition = {
        t: 'top',
        c: 'center',
        b: 'bottom',
        l: 'left',
        r: 'right',
    }

    return lattetPosition[latter] ?? ''
}

/**
 * Monta um objeto informando a posição vertical e horizantal
 * @param position
 * @returns {{horizontal: (*|string), vertical: (*|string)}}
 */
function treatPosition(position = '') {
    return {
        vertical: getThePositionByLetter(`${position[0]}`),
        horizontal: getThePositionByLetter(`${position[1]}`)
    }
}

/**
 * Alert com SnackBar
 * @param open
 * @param message
 * @param severity
 *      @description Define o cor
 *      @example {success, info, warning, error}
 *      @default error
 * @param variant
 *      @description Define o estilo
 *      @example {outlined, filled}
 *      @default filled
 * @param position
 *      @description Define a posição em vertical e horizontal
 *      @example {tc => Top & Center, bl => Bottom & Left}
 *      @default tc
 * @param hideDuration
 *      @default 6000
 * @param handlleClose
 * @returns {Element}
 * @constructor
 */
const Alert = ({
        open = false,
        message = '',
        severity = 'error',
        variant = 'filled',
        position = 'tc',
        hideDuration = 6000,
        handlleClose = () => {}
    }) => {
    return (
        <Snackbar
            open={open}
            onClose={handlleClose}
            anchorOrigin={treatPosition(position)}
            autoHideDuration={hideDuration}
        >
            <AlertLab
                onClose={handlleClose}
                severity={severity}
                variant={variant}
                sx={{width: '100%'}}
            >
                {message}
            </AlertLab>
        </Snackbar>
    )
}

export default Alert