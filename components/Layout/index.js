import * as React from "react";
import Header from "@/components/Header";
import Box from "@mui/material/Box";
import Menu from "@/components/Menu";
import fetchWithCredentials from "@/utils/fetchWithCredentials";
import {CssBaseline} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";

const drawerWidth = 240;

console.log(
    fetchWithCredentials(
        'auth/me',
        {
            method: 'POST',
        }
    )
)

const Layout = ({ Component }) => {
    const [openMenu, setOpenMenu] = React.useState(true);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <Box sx={{display: 'flex'}}>
            <Header openMenu={openMenu} toggleMenu={toggleMenu} drawerWidth={drawerWidth}/>
            <Menu openMenu={openMenu} toggleMenu={toggleMenu} drawerWidth={drawerWidth}/>
            <Box component="main"
                 sx={{
                     backgroundColor: (theme) => theme.palette.grey[100],
                     flexGrow: 1,
                     height: '100vh',
                     overflow: 'auto'
                 }}
            >
            </Box>
        </Box>
    )
}

export default Layout