import * as React from "react";
import {Collapse} from "@mui/material";
import List from "@mui/material/List";
import Item from "@/components/Menu/_components/Item";
import {ExpandLess, ExpandMore} from "@mui/icons-material";

/**
 * Item simplificado do menu
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ItemGroup = ({item, openMenu, sx}) => {

    console.log(item)

    const [openItemGroup, setOpenItemGroup] = React.useState(false);

    const handleClickItem = () => {
        setOpenItemGroup(!openItemGroup);
    };

    return (
        <>
            <Item key={item.group.id} item={item.group} openMenu={openMenu} onClick={handleClickItem} sx={sx} >
                {openItemGroup ? <ExpandLess /> : <ExpandMore />}
            </Item>

            <Collapse in={openItemGroup} timeout="auto" unmountOnExit sx={sx}>
                <List component="div" disablePadding className={'pr-4'}>

                    {item.itens.map((itemg) => {

                        if (itemg.group !== undefined) {
                            return (
                                <ItemGroup key={itemg.group.id} item={itemg} openMenu={openMenu} sx={openMenu ?  { pl: 4 } : {}} />
                            )
                        } else {
                            return (
                                <Item key={itemg.id} item={itemg} openMenu={openMenu} sx={openMenu ? { pl: 4 } : {}}/>
                            )
                        }

                    } )}
                </List>
            </Collapse>

        </>
    )
}

export default ItemGroup