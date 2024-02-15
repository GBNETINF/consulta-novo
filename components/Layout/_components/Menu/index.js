import * as React from "react";
import {Copyright, Icon} from "@/components";
import {Drawer, Item, ItemGroup} from "./_components";
import {Toolbar, IconButton, Divider, List, Box, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";

const Menu = ({openMenu, toggleMenu, drawerWidth}) => {
    const [openItem, setOpenItem] = React.useState(false);

    const handleClickItem = () => {
        setOpenItem(!openItem);
    };

    const itens = [
        {
            id: '1',
            href: '',
            name: 'Inicio 1',
            icon: 'Dashboard'
        },
        {
            id: '2',
            href: '',
            name: 'Inicio 2',
            icon: 'Dashboard'
        },
        {
            id: '3',
            href: '',
            name: 'Inicio 3',
            icon: 'AirportShuttl'
        },
        {
            id: '4',
            href: '',
            name: 'Inicio 4',
            icon: 'AirportShuttle'
        },
        {
            id: '9',
            group: {
                id: '5',
                href: '',
                name: 'Inicio 5',
                icon: 'Topic'
            },
            itens: [
                {
                    id: '6',
                    href: '',
                    name: 'Inicio 1',
                    icon: 'AirportShuttle'
                },
                {
                    id: '90',
                    group: {
                        id: '9',
                        href: '',
                        name: 'Inicio 9',
                        icon: 'Topic'
                    },
                    itens: [
                        {
                            id: '10',
                            href: '',
                            name: 'Inicio 10',
                            icon: 'AirportShuttle'
                        },
                        {
                            id: '11',
                            href: '',
                            name: 'Inicio 11',
                            icon: 'AirportShuttle'
                        },
                        {
                            id: '12',
                            href: '',
                            name: 'Inicio 12',
                            icon: 'AirportShuttle'
                        },
                    ]
                },
                {
                    id: '8',
                    href: '',
                    name: 'Inicio 3',
                    icon: ''
                },
            ]
        },
        {
            id: '20',
            href: '',
            name: 'Inicio 20',
            icon: 'AirportShuttle'
        },
        {
            id: '21',
            href: '',
            name: 'Inicio 21',
            icon: 'AirportShuttle'
        },
        {
            id: '22',
            href: '',
            name: 'Inicio 22',
            icon: 'AirportShuttle'
        },
        {
            id: '23',
            href: '',
            name: 'Inicio 203',
            icon: 'AirportShuttle'
        },
        {
            id: '24',
            href: '',
            name: 'Inicio 24',
            icon: 'AirportShuttle'
        },
        {
            id: '25',
            href: '',
            name: 'Inicio 25',
            icon: 'AirportShuttle'
        },
    ]

    return (
        <Drawer variant="permanent" open={openMenu} drawerWidth={drawerWidth} sx={{height: '100vh', overflow: 'hidden'}}>

            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1]}}>
                <IconButton onClick={toggleMenu}>
                    <Icon name={'ChevronLeft'}/>
                </IconButton>
            </Toolbar>

            <Divider/>

            <List className={'h-full overflow-hidden flex flex-col justify-between'} component="nav">
                <Box className={(openMenu ? 'h-[88%]' : 'h-[92%]') + ' overflow-y-auto overflow-x-hidden sys-scrollbar text-wrap'}>

                    {itens.map((item) => {

                        if (item.group !== undefined) {
                            return (
                                <ItemGroup key={item.id} item={item} openMenu={openMenu} />
                            )
                        } else {
                            return (
                                <Item key={item.id} item={item} openMenu={openMenu} />
                            )
                        }

                    } )}

                </Box>

                <Box className={(openMenu ? 'h-[12%]' : 'h-[8%]') + ' overflow-hidden'}>
                    <Divider sx={{my: 1}}/>
                    <ListItemButton>
                        <ListItemIcon>
                            <Icon className={'rotate-180'} name={'Logout'}/>
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