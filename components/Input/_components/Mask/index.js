import {forwardRef} from "react";
import {IMaskInput} from "react-imask";

export const Mask = forwardRef((props, ref) => {
    const {onChange, ...other} = props;

    return (
        <IMaskInput
            {...other}
            mask={props.mask}
            inputRef={ref}
            onAccept={(value) => onChange({target: {name: props.name, value}})}
        />
    )
})
