import {styled} from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";

/**
 * Esse componente foi copiado proto do "Material UI"
 */

const AppBar = styled(MuiAppBar, {shouldForwardProp: (prop) => prop !== 'open', })
(({theme, open, menuwidth}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: menuwidth,
        width: `calc(100% - ${menuwidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default AppBar