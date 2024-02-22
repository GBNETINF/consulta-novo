import {createElement} from "react";
import * as icons from "@mui/icons-material";

/**
 * Componente de icone
 * Obs: facilita a importação dos icones
 *
 * @param {string} name
 *      Nome do icone
 * @param {object} props
 *      Propriedades do icone
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