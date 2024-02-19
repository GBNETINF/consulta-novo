import {FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton} from "@mui/material";
import {Icon} from "@/components";
import {useState} from "react";

/**
 * @param id
 * @param name
 * @param label
 * @param type
 * @param required
 * @param disabled
 * @param autoFocus
 * @param fullWidth
 * @param variant
 * @param margin
 * @param endAdornment
 * @param autoComplete
 * @param inputCustom
 *       @options {Password, ...}
 * @returns {JSX.Element}
 * @constructor
 */
const Index = ({
    id = '',
    name = '',
    label = '',
    type = 'text',
    required = false,
    disabled = false,
    autoFocus = false,
    fullWidth = false,
    variant = 'outlined',
    margin = 'normal',
    endAdornment,
    autoComplete = '',
    inputCustom = '',
}) => {

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

    return (
        <FormControl variant={variant} margin={margin} fullWidth={fullWidth}>
            <InputLabel htmlFor={id}>{label}</InputLabel>
            <OutlinedInput
                id={id}
                name={name}
                label={label}
                type={typeInput}
                required={required}
                disabled={disabled}
                endAdornment={endAdornment}
                autoComplete={autoComplete}
                autoFocus={autoFocus}
            />
        </FormControl>
    )
}

export default Index