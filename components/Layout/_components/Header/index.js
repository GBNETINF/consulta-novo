import {Icon, Image} from "@/components";
import {AppBar, ConfigMenu, NotifyMenu} from "./_components";
import {Toolbar, IconButton, Box} from "@mui/material";

/**
 * Componente do cabeçalho
 *
 * @param {Boolean} openMenu
 *      Status em que o menu lateral se encontra (aberto|fechado)
 * @param {Function} toggleMenu
 *      Função para fechar o menu
 * @param {int} menuwidth
 *      Tamanho do menu
 * @returns {JSX.Element}
 * @constructor
 */
const Header = ({openMenu, toggleMenu, menuwidth}) => {
    return (
        <AppBar position="absolute" open={openMenu} menuwidth={menuwidth}>
            <Toolbar className={'pr-6 bg-sys-gray-dark'}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="Abrir menu"
                    onClick={toggleMenu}
                    sx={{marginRight: '36px', ...(openMenu && {display: 'none'})}}
                >
                    <Icon name={'Menu'}/>
                </IconButton>
                <Box className={'w-full flex flex-row justify-between px-3 ' + (openMenu ? 'hidden md:flex' : '')}>
                    <Image
                        src={'/Logo_SCS.svg'}
                        alt={'Logo_SCS'}
                        type="image/svg"
                        width={90}
                        height={50}
                    />
                    <Box className={'flex flex-row gap-6 items-center'}>
                        <NotifyMenu/>
                        <ConfigMenu/>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header