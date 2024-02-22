import {FormControl, InputLabel, OutlinedInput, FormHelperText} from "@mui/material";
import {Mask} from "@/components/Input/_components/Mask"
import {Password} from "@/components/Input/_components";
import {useState} from "react";

/**
 * @param props
 * @param props.id
 * @param props.name
 * @param props.label
 * @param props.type
 * @param props.value
 * @param props.onChange
 * @param props.required
 * @param props.fullWidth
 *
 * @param props.error
 *      @description Define a borda do input vermelha
 *
 * @param props.helperText
 *      @description Texto auxiliar abaixo do input
 *
 * @param props.custom
 *      @options {Password, CPF, ...}
 *
 * @param props.mask
 *      @example 'CPF, Phone'
 *
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