import {useState, useEffect} from "react";
import {Header, Menu, Content} from "./_components";
import {Box, CssBaseline} from "@mui/material";
import {getSession, setSession} from "@/utils/session";

/** Tamanho do menu */
const menuwidth = 240;

/**
 * @param children
 * @param name
 * @param list
 * @returns {JSX.Element}
 * @constructor
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