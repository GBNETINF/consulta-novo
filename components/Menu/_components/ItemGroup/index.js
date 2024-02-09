import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import PeopleIcon from "@mui/icons-material/People";
import ListItemText from "@mui/material/ListItemText";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import {Collapse} from "@mui/material";
import List from "@mui/material/List";
import * as React from "react";
import Item from "@/components/Menu/_components/Item";

/**
 * Item simplificado do menu
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ItemGroup = ({group, openMenu}) => {

    const [openItemGroup, setOpenItemGroup] = React.useState(false);

    const handleClickItem = () => {
        setOpenItemGroup(!openItemGroup);
    };

    return (
        <>
            <Item item={group.item} openMenu={openMenu} onClick={handleClickItem} />

            <Collapse in={openItemGroup} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {group.itens.map(item => {
                        <Item key={item.name} item={item} openMenu={openMenu} />
                    })}
                </List>
            </Collapse>

        </>
    )
}

export default ItemGroup