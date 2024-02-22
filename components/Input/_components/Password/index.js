import {IconButton, InputAdornment} from "@mui/material";
import {Icon} from "@/components";
import {useEffect, useState} from "react";

const Password = ({handleClick, type, position='end'}) => {

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