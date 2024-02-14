import * as React from "react";
import * as icons from "@mui/icons-material";

/**
 * Retorna o componente do icone
 *
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
        React.createElement(treatedName, {... props})
    )
}

export default Icon