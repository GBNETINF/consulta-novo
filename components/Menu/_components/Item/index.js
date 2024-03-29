import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";

/**
 * Item simplificado do menu
 *
 * @returns {JSX.Element}
 * @constructor
 */
const Item = ({item, openMenu, onClick}) => {
    return (
        <ListItemButton href={item.href} onClick={onClick}>
            <ListItemIcon title={item.name}>
                <DashboardIcon/>
            </ListItemIcon>
            <ListItemText primary={openMenu ? item.name : ''}/>
        </ListItemButton>
    )
}

export default Item