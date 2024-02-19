import {Breadcrumbs, Typography} from "@mui/material";

/**
 *
 * @param list
 * @returns {JSX.Element}
 * @constructor
 */
const ListPages = ({list}) => {
    return (
        <Breadcrumbs className={'hidden md:block'} maxItems={3} aria-label="breadcrumb">
            {
                list.map((name, index) => {
                    return (
                        <Typography key={index}
                                    color={(index + 1 === list.length) ? 'text.primary' : 'text.secondary'}>{name}</Typography>
                    )
                })
            }
        </Breadcrumbs>
    )
}

export default ListPages