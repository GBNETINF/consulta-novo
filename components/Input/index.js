import {FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText} from "@mui/material";
import {Icon} from "@/components";
import {useState, forwardRef} from "react";
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
    mask = '',
    maxLength,
    endAdornment,
    onChange,
    inputCustom = '',
}) => {
    let MaskInput

    const [typeInput, setTypeInput] = useState(type)

    /** Altera o "Type" para text */
    function setTypeText() {
        setTypeInput('text')
    }

    /** Altera o "Type" para password */
    function setTypePassword() {
        setTypeInput('password')
    }

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

    if (mask !== '')
    {
        MaskInput = forwardRef(function MaskInput(props, ref) {
            const { onChange, ...other } = props;
            return (
                <IMaskInput
                    {...other}
                    mask={mask}
                    definitions={{
                        '0': /[0-9]/,
                        '#': /[1-9]/,
                    }}
                    inputRef={ref}
                    onAccept={(value) => onChange({ target: { name: props.name, value } })}
                    overwrite
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
                value={value}
                type={typeInput}
                required={required}
                disabled={disabled}
                endAdornment={endAdornment}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
                onChange={onChange}
                maxLength={maxLength}
                inputComponent={MaskInput}
            />
            { helperText ? <FormHelperText id={id}>{helperText}</FormHelperText> : ''}
        </FormControl>
    )
}

export default Index