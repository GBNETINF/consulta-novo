import * as React from "react";
import {Collapse, Divider, List} from "@mui/material";
import {Item} from "@/components/Layout/_components/Menu/_components/";
import {Icon} from "@/components";

/**
 * Item simplificado do menu
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ItemGroup = ({item, openMenu, sx}) => {

    const [openItemGroup, setOpenItemGroup] = React.useState(false);

    const handleClickItem = () => {
        setOpenItemGroup(!openItemGroup);
    };

    return (
        <>
            <Item key={item.group.id} item={item.group} openMenu={openMenu} onClick={handleClickItem} sx={sx} >
                {openItemGroup ? <Icon name={'ExpandLess'} /> : <Icon name={'ExpandMore'} /> }
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

                    {openMenu ? '' : <Divider/>}
                </List>
            </Collapse>

        </>
    )
}

export default ItemGroup