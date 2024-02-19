import {useState} from "react";
import {Copyright, Icon} from "@/components";
import {Drawer, Item, ItemGroup} from "@/components/Layout/_components/Menu/_components";
import {Toolbar, IconButton, Divider, List, Box} from "@mui/material";
import {fetchWithCredentials} from "@/utils/fetch";
import {LoadingButton} from "@mui/lab";
import {useRouter} from "next/router";

/**
 * @param openMenu
 * @param toggleMenu
 * @param menuwidth
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = ({openMenu, toggleMenu, menuwidth}) => {

    const router = useRouter()

    const [loading, setLoading] = useState(false);

    /**
     * Desloga o usuario
     * @returns {Promise<void>}
     */
    async function logout() {
        setLoading(true)

        await fetchWithCredentials('auth/logout', {method: 'POST'})

        await router.push(`/login`);
    }

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
        <Drawer variant="permanent" open={openMenu} menuwidth={menuwidth} sx={{height: '100vh', overflow: 'hidden'}}>

            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1]}}>
                <IconButton onClick={toggleMenu}>
                    <Icon name={'ChevronLeft'}/>
                </IconButton>
            </Toolbar>

            <Divider/>

            <List className={'h-full overflow-hidden flex flex-col justify-between'} component="nav">
                <Box
                    className={(openMenu ? 'h-[89%]' : 'h-[93%]') + ' overflow-y-auto overflow-x-hidden sys-scrollbar text-wrap'}>

                    {itens.map((item) => {

                        if (item.group !== undefined) {
                            return (
                                <ItemGroup key={item.id} item={item} openMenu={openMenu}/>
                            )
                        } else {
                            return (
                                <Item key={item.id} item={item} openMenu={openMenu}/>
                            )
                        }

                    })}

                </Box>

                <Box className={(openMenu ? 'h-[11%]' : 'h-[7%]') + ' overflow-hidden'}>
                    <Divider sx={{my: 1}}/>
                    <Box className="text-center mb-4">
                        <LoadingButton
                            loading={loading}
                            onClick={logout}
                            startIcon={<Icon name={'Logout'}/>}
                            fullWidth={true}
                            color="secondary">
                            {openMenu ? 'Sair' : ''}
                        </LoadingButton>
                    </Box>
                    <Box hidden={!openMenu} className={'text-center my-2'} sx={{'fontSize': 12}}>
                        <Copyright/>
                    </Box>
                </Box>

            </List>
        </Drawer>
    )
}

export default Menu