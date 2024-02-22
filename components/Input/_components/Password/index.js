import {IconButton, InputAdornment} from "@mui/material";
import {Icon} from "@/components";
import {useEffect, useState} from "react";

/**
 * Atribui botão para troca de type (text -> password)
 * @description atribua esse componenet na props "endAdornment" para possição end ou na props "startAdornment" para possição start
 *
 * @param handleClick
 *      @description Função de onClick
 * @param type
 *      @description Type do input
 * @param position
 *      @description A possição do Adornmernt
 *      @example {start, end}
 *      @default end
 * @returns {JSX.Element}
 * @constructor
 */
const Password = ({handleClick, type, position = 'end'}) => {

    const [icon, setIcon] = useState('VisibilityOff')

    useEffect(() => {
        setIcon(type === 'password' ? 'Visibility' : 'VisibilityOff')
    }, [type]);

    return (
        <InputAdornment position={position}>
            <IconButton
                aria-label="toggle password visibility"
                onClick={handleClick}
                edge={position}
            >
                <Icon name={icon}/>
            </IconButton>
        </InputAdornment>
    )
}

export default Password