import {ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {Icon} from "@/components";

/**
 * Item simplificado do menu
 *
 * @param {object} item
 *      Objeto do item do menu
 * @param {string} item.href
 *      Link
 * @param {string} item.icone
 *      Icone
 * @param {string} item.nome
 *      Nome
 * @param {boolean} openMenu
 *      Status em que o menu lateral se encontra (aberto|fechado)
 * @param {function} onClick
 *      Função de click
 * @param {object} sx
 *      Style do MaterialUi
 * @param children
 *      Componente filho que será inserido dentro do layout.
 * @returns {JSX.Element}
 * @constructor
 */
const Item = ({item, openMenu, onClick, sx, children}) => {

    return (
        <ListItemButton href={item.href} onClick={onClick} sx={sx}>
            <ListItemIcon title={item.nome} className={!openMenu ? 'ml-1' : ''}>
                <Icon name={item.icone} />
            </ListItemIcon>
            <ListItemText primary={openMenu ? item.nome : ''}/>
            {children}
        </ListItemButton>
    )
}

export default Item