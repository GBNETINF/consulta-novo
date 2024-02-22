import {useState, useEffect} from "react";
import {Header, Menu, Content} from "./_components";
import {Box, CssBaseline} from "@mui/material";
import {getSession, setSession} from "@/utils/session";

/**
 * Tamanho do menu.
 *
 * @type {number}
 */
const menuwidth = 240;

/**
 * Layout padrão intorno do sistema.
 *
 * @param children
 *      Componente filho que será inserido dentro do layout.
 * @param {String} name
 *      Nome da página atual do layout.
 * @param list
 *      Lista do breadcrumb do layout.
 * @returns {JSX.Element}
 */
const Layout = ({children, name, list}) => {
    const [openMenu, setOpenMenu] = useState(true);

    const toggleMenu = () => {
        setSession('menuOpen', !openMenu)
        setOpenMenu(!openMenu);
    };

    useEffect(() => {
        setOpenMenu(getSession('menuOpen'))
    }, []);

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <Header openMenu={openMenu} toggleMenu={toggleMenu} menuwidth={menuwidth}/>
            <Menu openMenu={openMenu} toggleMenu={toggleMenu} menuwidth={menuwidth}/>
            <Content name={name} list={list}>
                {children}
            </Content>
        </Box>
    )
}

export default Layout