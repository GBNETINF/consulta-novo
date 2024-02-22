import {useState, Fragment} from 'react';
import {Avatar, Menu, MenuItem, Divider, IconButton, Tooltip, Typography, Box} from '@mui/material';
import {Icon} from "@/components";

/**
 * Retona as duas primiras letras no nome
 * @param name
 * @returns {{children: string}}
 */
function stringAvatar(name) {
    return {
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

/**
 * Componente de configurações do cabeçalho
 *
 * @returns {JSX.Element}
 * @constructor
 */
const ConfigMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <Tooltip title="Configurações">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar className={'text-base bg-sys-gray-light'} {...stringAvatar('Victor Franco')} />
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{horizontal: 'right', vertical: 'top'}}
                anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
            >
                <Box className={'grid flex-col justify-items-center py-4 px-10'}>
                    <Tooltip title="Alterar foto">
                        <Avatar onClick={handleClose} className={'m-0 cursor-pointer'}/>
                    </Tooltip>
                    <Typography className={'mt-2'} variant="p" align="center">
                        Victor Ferreira Franco
                    </Typography>
                    <Typography className={'text-sm'} variant="p" color="text.secondary" align="center">
                        Médico III - LC1193/13 - CLT
                    </Typography>
                    <Typography className={'text-sm'} variant="p" color="text.secondary" align="center">
                        008.159.932/01
                    </Typography>
                    <Box className={'flex flex-row gap-2 mt-4'}>
                        <Tooltip title="Alterar senha">
                            <Avatar onClick={handleClose} className={'cursor-pointer'}>
                                <Icon name={'Key'}/>
                            </Avatar>
                        </Tooltip>
                        <Tooltip title="Manual">
                            <Avatar onClick={handleClose} className={'cursor-pointer'}>
                                <Icon name={'AutoStories'}/>
                            </Avatar>
                        </Tooltip>
                    </Box>
                </Box>
                <Divider/>
                <Tooltip title="008.159.932/02">
                    <MenuItem onClick={handleClose} className={'mt-2'}>
                        <Avatar/> Diretor II
                    </MenuItem>
                </Tooltip>
                <Tooltip title="008.159.932/02">
                    <MenuItem onClick={handleClose} className={'mt-2'}>
                        <Avatar/> Diretor III (Desigado)
                    </MenuItem>
                </Tooltip>
                <Divider/>
                <Box className={'flex flex-col justify-items-center px-4'}>
                    <Typography className={'text-xs'} variant="p" color="text.secondary" align="center">
                        Ultimo acesso: 15/02/2024
                    </Typography>
                </Box>
            </Menu>
        </Fragment>
    );
}

export default ConfigMenu