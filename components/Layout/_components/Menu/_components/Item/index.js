import * as React from "react";
import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Icon} from "@/components";

/**
 * Item simplificado do menu
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Item = ({item, openMenu, onClick, sx, children}) => {

    return (
        <ListItemButton href={item.href} onClick={onClick} sx={sx}>
            <ListItemIcon title={item.name}>
                <Icon name={item.icon} />
            </ListItemIcon>
            <ListItemText primary={openMenu ? item.name : ''}/>
            {children}
        </ListItemButton>
    )
}

export default Item