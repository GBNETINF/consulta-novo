import {createElement} from "react";
import * as icons from "@mui/icons-material";

/**
 * Retorna o componente do icone
 * Obs: facilita a importação dos icones
 * @param name
 * @param props
 * @returns {React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>}
 * @constructor
 */
const Icon = ({name, props}) => {

    const treatedName = (name === undefined || name === '' || name === null || icons[name] === undefined)
        ? icons['ErrorOutline']
        : icons[name]

    return (
        createElement(treatedName, {...props})
    )
}

export default Icon