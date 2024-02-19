import Typography from "@mui/material/Typography";

/**
 * @returns {JSX.Element}
 * @constructor
 */
const Copyright = () => {
    return (
        <Typography variant="p" color="text.secondary" align="center">
            {'Copyright ©'}
            <span className={'mx-1'}>
                {'GB-NET'}
            </span>
            {'2009-' + new Date().getFullYear() + '.'}
        </Typography>
    );
}

export default Copyright