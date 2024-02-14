import * as React from "react";
import {Header, Menu, Content} from "./_components";
import {Box, CssBaseline} from "@mui/material";
import fetchWithCredentials from "@/utils/fetchWithCredentials";

const drawerWidth = 240;

console.log(
    fetchWithCredentials(
        'auth/me',
        {
            method: 'POST',
        }
    )
)

const Layout = ({children, name, list}) => {
    const [openMenu, setOpenMenu] = React.useState(true);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline />
            <Header openMenu={openMenu} toggleMenu={toggleMenu} drawerWidth={drawerWidth}/>
            <Menu openMenu={openMenu} toggleMenu={toggleMenu} drawerWidth={drawerWidth}/>
            <Content name={name} list={list}>
                {children}
            </Content>
        </Box>
    )
}

export default Layout