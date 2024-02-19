import {useState} from "react";
import {Header, Menu, Content} from "./_components";
import {Box, CssBaseline} from "@mui/material";

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
        setOpenMenu(!openMenu);
    };

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