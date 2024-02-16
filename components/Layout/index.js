import * as React from "react";
import {Header, Menu, Content} from "./_components";
import {Box, CssBaseline} from "@mui/material";
import fetchWithCredentials from "@/utils/fetch";

const menuwidth = 240;

const Layout = ({children, name, list}) => {
    const [openMenu, setOpenMenu] = React.useState(true);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <Header openMenu={openMenu} toggleMenu={toggleMenu} menuwidth={menuwidth}/>
            <Menu openMenu={openMenu} toggleMenu={toggleMenu} menuwidth={menuwidth}/>
            <Content name={name} list={list}>
                {children}
            </Content>
        </Box>
    )
}

export default Layout