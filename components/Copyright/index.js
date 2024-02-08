import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import * as React from "react";

const Copyright = () => {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright ©'}
            <span className={'mx-1'}>
                {'GB-NET'}
            </span>
            {'2009-' + new Date().getFullYear() + '.'}
        </Typography>
    );
}

export default Copyright