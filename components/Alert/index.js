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
 *
 * @param {boolean} open
 *      Status se vai exibir (true|false)
 * @param {string} message
 *      Mensagem
 * @param {string} severity
 *      Define o cor. @Option: {success, info, warning, error}
 * @param {string} variant
 *      Define o estilo. @Option: {outlined, filled}
 * @param {string} position
 *      Define a posição em vertical e horizontal. @Option: {tc, bl, ...}
 * @param {int} hideDuration
 *      Tempo de duração
 * @param {function} handlleClose
 *      Função para fechar o alert
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