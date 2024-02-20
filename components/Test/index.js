import {forwardRef} from "react";
import {OutlinedInput} from "@mui/material";
import {IMaskInput} from "react-imask";

export default function Test(props) {
    const {onAccept, mask, ...remaneProps} = props

    const Mask = forwardRef((props, ref) => {
        props = {mask: mask, onAccept: onAccept, ...props}

        return (
            <IMaskInput {...props} inputRef={ref}/>
        )
    })

    return (
        <OutlinedInput {...remaneProps} inputComponent={Mask}/>
    )
}