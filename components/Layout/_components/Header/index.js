import Image from "next/image";
import Badge from "@mui/material/Badge";
import {Icon} from "@/components";
import {AppBar, ConfigMenu, NotifyMenu} from "./_components";
import {Toolbar, IconButton, Box} from "@mui/material";

const Header = ({openMenu, toggleMenu, drawerWidth}) => {
    return (
        <AppBar position="absolute" open={openMenu} drawerWidth={drawerWidth}>
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
                            src="/Logo_SCS.svg"
                            alt="Logo_SCS"
                            width={90}
                            height={50}
                            loading={"lazy"}
                            sx={{flexGrow: 1}}
                        />
                        <Box className={'flex flex-row gap-6 items-center'}>
                            <NotifyMenu />
                            <ConfigMenu />
                        </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header