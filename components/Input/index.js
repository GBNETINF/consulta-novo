import {FormControl, InputLabel, OutlinedInput, FormHelperText} from "@mui/material";
import {Mask} from "@/components/Input/_components/Mask"
import {Password} from "@/components/Input/_components";
import {useState} from "react";

/**
 * Componente de Input
 *
 * @param {object} props
 * @param {string} props.id
 * @param {string} props.name
 * @param {string} props.label
 * @param {string} props.type
 * @param {string} props.value
 * @param {function} props.onChange
 * @param {boolean} props.required
 * @param {boolean} props.fullWidth
 * @param {boolean} props.error
 *      Define a borda do input vermelha
 * @param {string} props.helperText
 *      Texto auxiliar abaixo do input
 * @param {string} props.custom
 *      Inputs customizados. @Option: {Password, ...}
 * @param {string} props.mask
 *      Mascara do input
 * @returns {JSX.Element}
 * @constructor
 */
const Input = (props) => {
    const {custom, error, helperText, fullWidth, type, ...inputProps} = props

    const formProps = {error, variant: 'outlined', margin: 'normal', fullWidth}

    const [inputType, setInputType] = useState(type)

    /** Define padrões de input */
    switch (custom) {
        case "Password":
            inputProps.endAdornment = (<Password type={inputType} handleClick={() => {
                setInputType(inputType === 'password' ? 'text' : 'password')
            }}/>)
            inputProps.autoComplete = "current-password"
            break;
    }

    /** Define a mascara */
    if (inputProps.mask !== undefined && inputProps.mask !== '') {
        inputProps.inputProps = {mask: inputProps.mask}
        inputProps.inputComponent = Mask
    }

    return (
        <FormControl {...formProps}>
            {props.label ? <InputLabel htmlFor={props.id} required={props.required} children={props.label}/> : <></>}
            <OutlinedInput  type={inputType} {...inputProps} />
            {helperText ? <FormHelperText id={props.id} children={helperText}/> : <></>}
        </FormControl>
    )
}

export default Input