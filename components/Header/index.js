import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Image from "next/image";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {Avatar} from "@mui/material";
import AppBar from "@/components/Header/_components/AppBar";

function stringAvatar(name) {
    return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

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
                        <MenuIcon/>
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
                            <IconButton color="inherit">
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsIcon/>
                                </Badge>
                            </IconButton>
                            <IconButton color="inherit">
                                <Avatar className={'text-base bg-sys-gray-light'} {...stringAvatar('Victor Franco')} />
                            </IconButton>
                        </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header