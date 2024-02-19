import {useState, Fragment} from 'react';
import {Menu, Divider, IconButton, Tooltip, Typography, Box, Badge} from '@mui/material';
import {Icon} from "@/components";

/**
 * @returns {JSX.Element}
 * @constructor
 */
const NotifyMenu = () => {

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
            <Tooltip title="Notificações">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Badge badgeContent={4} color="error">
                        <Icon props={{className: 'text-sys-gray-light'}} name={'Notifications'}/>
                    </Badge>
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
                <Box className={'grid flex-col justify-items-center px-4 py-2'}>
                    <Typography className={'text-sm'} variant="p" color="text.secondary" align="center">
                        Notificações
                    </Typography>
                </Box>
                <Box className={'max-w-sm m-5 pl-2 border-l-2 border-l-sys-gray-light'}>
                    <Box className={'flex flex-row justify-between items-center'}>
                        <Typography variant="body1">Retificação</Typography>
                        <IconButton>
                            <Icon props={{fontSize: 'small'}} name={'Delete'}/>
                        </IconButton>
                    </Box>
                    <Typography variant="body2">Lorem ipsum cubilia velit semper sagittis a metus, nisl iaculis ipsum
                        venenatis etiam felis ultrices nisl, at cubilia purus feugiat condimentum nibh. faucibus turpis
                        vulputate</Typography>
                </Box>
                <Box className={'max-w-sm m-5 pl-2 border-l-2 border-l-sys-gray-light'}>
                    <Box className={'flex flex-row justify-between items-center'}>
                        <Typography variant="body1">Retificação</Typography>
                        <IconButton>
                            <Icon props={{fontSize: 'small'}} name={'Delete'}/>
                        </IconButton>
                    </Box>
                    <Typography variant="body2">Lorem ipsum cubilia velit semper sagittis a metus, nisl iaculis ipsum
                        venenatis etiam felis ultrices nisl, at cubilia purus feugiat condimentum nibh. faucibus turpis
                        vulputate</Typography>
                </Box>
                <Divider className={'mt-5'}/>
                <Box className={'flex flex-col justify-items-center px-4 pt-2'}>
                    <Typography className={'text-xs'} variant="p" color="text.secondary" align="center">
                        Limpar tudo
                    </Typography>
                </Box>
            </Menu>
        </Fragment>
    );
}

export default NotifyMenu