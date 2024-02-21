import Typography from "@mui/material/Typography";
import { Word } from "@/components";

/**
 * @returns {JSX.Element}
 * @constructor
 */
const Copyright = () => {
    return (
        <Typography variant="p" color="text.secondary" align="center">
            <Word width={164} path="sistema.copyright.default" />
            <span className={'mx-1'}>
                <Word width={164} path="sistema.copyright.empresa" />
            </span>
            <Word width={164} path="sistema.copyright.ano_inicio" />{'-' + new Date().getFullYear() + '.'}
        </Typography>
    );
}

export default Copyright