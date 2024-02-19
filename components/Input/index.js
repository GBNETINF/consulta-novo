import {FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText} from "@mui/material";
import {Icon} from "@/components";
import {forwardRef, useState} from "react";
import {IMaskInput} from "react-imask";

/**
 * @param id
 * @param name
 * @param label
 * @param type
 * @param value
 * @param required
 * @param disabled
 * @param autoFocus
 * @param fullWidth
 * @param error
 * @param variant
 * @param helperText
 * @param margin
 * @param endAdornment
 * @param autoComplete
 * @param maxLength
 * @param onChange
 * @param inputCustom
 *       @options {Password, ...}
 * @param inputMask
 *      @options {CPF, Phone, ...}
 * @returns {JSX.Element}
 * @constructor
 */
const Index = ({
    id = '',
    name = '',
    label = '',
    type = 'text',
    value,
    required = false,
    disabled = false,
    autoFocus = false,
    fullWidth = false,
    error = false,
    variant = 'outlined',
    margin = 'normal',
    autoComplete = '',
    helperText = '',
    maxLength,
    endAdornment,
    onChange,
    inputCustom = '',
    inputMask = '',
}) => {
    let inputComponent

    const [typeInput, setTypeInput] = useState(type)

    const [valueInput, setValueInput] = useState(value)

    /** Altera o "Type" para text */
    function setTypeText() {
        setTypeInput('text')
    }

    /** Altera o "Type" para password */
    function setTypePassword() {
        setTypeInput('password')
    }

    /** Altera o value do input */
    function setValeu(event) { setValueInput(event.target.value) }

    /** Define padrões de input */
    switch (inputCustom) {
        case 'Password':
            endAdornment = (
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={setTypeText}
                        onMouseDown={setTypePassword}
                        edge="end"
                    >
                        {typeInput === 'text' ? <Icon name={'VisibilityOff'}/> : <Icon name={'Visibility'}/>}
                    </IconButton>
                </InputAdornment>
            )
            autoComplete = "current-password"
            break;
    }

    /** Define mascaras padrões */
    if (inputMask !== '')
    {
        onChange = setValeu

        inputComponent = forwardRef(function TextMaskCustom(props, ref) {
            const { onChange, ...other } = props;

            return (
                <IMaskInput
                    {...other}
                    mask={inputMask}
                    definitions={{
                        '#': /[1-9]/,
                        '0': /[0-9]/,
                    }}
                    inputRef={ref}
                    onAccept={(value) => onChange({ target: { name: props.name, value } })}
                    overwrite
                    blocks={{
                        CPF: { mask: '000.000.000-00' },
                        Phone: { mask: '(00) 00000-0000' },
                    }}
                />
            );
        });
    }

    return (
        <FormControl error={error} variant={variant} margin={margin} fullWidth={fullWidth}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                id={id}
                name={name}
                label={label}
                value={valueInput}
                type={typeInput}
                required={required}
                disabled={disabled}
                endAdornment={endAdornment}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                inputComponent={inputComponent}
                onChange={onChange}
                maxLength={maxLength}
            />
            { helperText ? <FormHelperText id={id}>{helperText}</FormHelperText> : ''}
        </FormControl>
    )
}

export default Index