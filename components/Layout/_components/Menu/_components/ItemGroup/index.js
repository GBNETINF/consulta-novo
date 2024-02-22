import {useState} from "react";
import {Collapse, Divider, List} from "@mui/material";
import {Item} from "@/components/Layout/_components/Menu/_components/";
import {Icon} from "@/components";

/**
 * Grupo de itens do menu.
 *
 * @param {object} item
 *      Objeto do grupo do menu
 * @param {string} item.id
 *      Identificador do grupo
 * @param {string} item.icone
 *      Icone do grupo
 * @param {string} item.nome
 *      Nome do grupo
 * @param {object} item.itens
 *      Objeto dos itens de detro do grupo
 * @param {Boolean} openMenu
 *      Status em que o menu lateral se encontra (aberto|fechado)
 * @param {object} sx
 *      Style do MaterialUi
 * @returns {JSX.Element}
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