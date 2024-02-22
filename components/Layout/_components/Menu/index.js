import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {getSession} from "@/utils/session";
import {Copyright, Icon, Word} from "@/components";
import {fetchWithCredentials} from "@/utils/fetch";
import {Drawer, Item, ItemGroup} from "@/components/Layout/_components/Menu/_components";
import {
    Toolbar,
    IconButton,
    Divider,
    List,
    Box,
    ListItemIcon,
    ListItemText,
    ListItemButton,
    Skeleton
} from "@mui/material";
import {LoadingButton} from "@mui/lab";

/**
 * @param openMenu
 * @param toggleMenu
 * @param menuwidth
 * @returns {JSX.Element}
 * @constructor
 */
const Menu = ({openMenu, toggleMenu, menuwidth}) => {

    const router = useRouter()
    const [loading, setLoading] = useState(false)
    const [loadingItens, setLoadingItens] = useState(true)
    const [itens, setItens] = useState([])

    /**
     * Desloga o usuario
     * @returns {Promise<void>}
     */
    async function logout() {
        setLoading(true)

        await fetchWithCredentials('auth/logout', {method: 'POST'})

        await router.push(`/login`)
    }

    useEffect(() => {
        async function getMenuData() {
            let response = await fetchWithCredentials('menus')

            let itens = await response.json()

            setItens(itens)
            setLoadingItens(false)
        }

        getMenuData()
    }, [])

    return (
        <Drawer variant="permanent" open={openMenu} menuwidth={menuwidth} sx={{height: '100vh', overflow: 'hidden'}}>

            <Toolbar sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: [1]}}>
                <IconButton onClick={toggleMenu}>
                    <Icon name={'ChevronLeft'}/>
                </IconButton>
            </Toolbar>

            <Divider/>

            <List className={'h-full overflow-hidden flex flex-col justify-between'} component="nav">
                {!loadingItens ?
                    (<Box
                        className={(openMenu ? 'h-[89%]' : 'h-[93%]') + ' overflow-y-auto overflow-x-hidden sys-scrollbar text-wrap'}>

                        {itens.map((item) => {

                            if (item.itens.length > 0) {
                                return (
                                    <ItemGroup key={item.id} item={item} openMenu={openMenu}/>
                                )
                            } else {
                                return (
                                    <Item key={item.id} item={item} openMenu={openMenu}/>
                                )
                            }

                        })}

                    </Box>)
                :
                    (<Box className={(openMenu ? 'h-[89%]' : 'h-[93%]') + ' overflow-y-auto overflow-x-hidden sys-scrollbar text-wrap'}>
                        <ListItemButton href='' sx={{}}>
                            <ListItemIcon title='loading' className={!openMenu ? 'ml-1' : ''}>
                                <Skeleton variant="rounded" width={25} height={25} animation="wave"/>
                            </ListItemIcon>
                            <Skeleton variant="rounded" width={120} height={16} animation="wave"/>
                        </ListItemButton>
                    </Box>)
                }

                <Box className={(openMenu ? 'h-[11%]' : 'h-[7%]') + ' overflow-hidden'}>
                    <Divider sx={{my: 1}}/>
                    <Box className="text-center mb-4">
                        <LoadingButton
                            loading={loading}
                            onClick={logout}
                            startIcon={<Icon name={'Logout'}/>}
                            fullWidth={true}
                            color="secondary">
                            {openMenu ? <Word width={64} path="sistema.botoes.sair"/> : ''}
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