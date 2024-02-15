import {Snackbar} from "@mui/material";
import AlertLab from "@mui/lab/Alert";

import * as React from "react";

function getThePositionByLetter(latter= '') {

    const lattetPosition = {
        t: 'top',
        c: 'center',
        b: 'bottom',
        l: 'left',
        r: 'right',
    }

    return lattetPosition[latter] ?? ''
}

function treatPosition(position = ''){
    return {
        vertical: getThePositionByLetter(`${position[0]}`),
        horizontal: getThePositionByLetter(`${position[1]}`)
    }
}

/**
 * Alert com SnackBar
 *
 * @param open
 * @param message
 * @param severity
 * @param position
 * @param hideDuration
 * @param variant
 * @param handlleClose
 * @returns {Element}
 * @constructor
 */
const Alert = ({
     open= false,
     message = '',
     severity= 'error',
     position = 'tc',
     hideDuration = 6000,
     variant= 'filled',
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