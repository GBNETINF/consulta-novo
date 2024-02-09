import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import {ExpandLess, ExpandMore, StarBorder} from "@mui/icons-material";
import {Collapse} from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import LogoutIcon from "@mui/icons-material/Logout";
import Copyright from "@/components/Copyright";
import Drawer from "@/components/Menu/_components/Drawer";
import Item from "@/components/Menu/_components/Item";

const Menu = ({openMenu, toggleMenu, drawerWidth}) => {
    const [openItem, setOpenItem] = React.useState(false);

    const handleClickItem = () => {
        setOpenItem(!openItem);
    };

    const itens = [
        {
            id: '1',
            href: '',
            name: 'Inicio 1'
        },
        {
            id: '2',
            href: '',
            name: 'Inicio 2'
        },
        {
            id: '3',
            href: '',
            name: 'Inicio 3'
        },
        {
            id: '4',
            href: '',
            name: 'Inicio 4'
        },
    ]

    return (
        <Drawer variant="permanent" open={openMenu} drawerWidth={drawerWidth} sx={{height: '100vh', overflow: 'hidden'}}>

            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1]}}>
                <IconButton onClick={toggleMenu}>
                    <ChevronLeftIcon/>
                </IconButton>
            </Toolbar>

            <Divider/>

            <List className={'h-full overflow-hidden flex flex-col justify-between'} component="nav">
                <Box className={(openMenu ? 'h-[88%]' : 'h-[92%]') + ' overflow-y-auto overflow-x-hidden sys-scrollbar text-wrap'}>

                    {itens.map((item) => {

                        console.log(typeof(item))

                       return (
                           <Item key={item.id} item={item} openMenu={openMenu} />
                       )
                    } )}

                </Box>

                <Box className={(openMenu ? 'h-[12%]' : 'h-[8%]') + ' overflow-hidden'}>
                    <Divider sx={{my: 1}}/>
                    <ListItemButton>
                        <ListItemIcon>
                            <LogoutIcon className={'rotate-180'}/>
                        </ListItemIcon>
                        <ListItemText primary="Sair"/>
                    </ListItemButton>
                    <Box hidden={!openMenu} className={'text-center my-2'} sx={{'fontSize': 12}}>
                        <Copyright/>
                    </Box>
                </Box>

            </List>
        </Drawer>
    )
}

export default Menu