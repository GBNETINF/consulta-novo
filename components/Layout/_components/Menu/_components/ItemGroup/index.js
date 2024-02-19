import {useState} from "react";
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

    const [openItemGroup, setOpenItemGroup] = useState(false);

    const handleClickItem = () => {
        setOpenItemGroup(!openItemGroup);
    };

    return (
        <>
            <Item key={item.id} item={item} openMenu={openMenu} onClick={handleClickItem} sx={sx} >
                {openItemGroup ? <Icon name={'ExpandLess'} /> : <Icon name={'ExpandMore'} /> }
            </Item>

            <Collapse in={openItemGroup} timeout="auto" unmountOnExit sx={sx}>
                <List component="div" disablePadding>

                    {item.itens.map((itemg) => {

                        if (itemg.itens.length > 0) {
                            return (
                                <ItemGroup key={itemg.id} item={itemg} openMenu={openMenu} sx={openMenu ?  { pl: 4 } : {}} />
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