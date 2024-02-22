import {forwardRef} from "react";
import {IMaskInput} from "react-imask";

/**
 * Atribui ao input uma mascara
 * @description Use no elemeneto príncipal a props "inputProps={{mask: '...'}} e atribua esse objeto na props "inputComponent" "
 *
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{}> & React.RefAttributes<unknown>>}
 */
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
