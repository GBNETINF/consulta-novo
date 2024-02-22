import {Box, Toolbar, Typography} from "@mui/material";
import {ListPages} from "@/components/Layout/_components/Content/_components";

/**
 * Componente do conteúdo
 *
 * @param children
 *      Componente filho que será inserido dentro do layout.
 * @param {String} name
 *      Nome da página atual do layout.
 * @param list
 *      Lista do breadcrumb do layout
 * @returns {JSX.Element}
 * @constructor
 */
const Content = ({children, name, list}) => {
    return (
        <Box className={'sys-scrollbar'}
             component="main" sx={{
            backgroundColor: (theme) => theme.palette.grey[100],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
            p: 6,
        }}
        >
            <Toolbar/>
            <Typography variant="h4" color="text.secondary" align="left">
                {name}
            </Typography>
            <ListPages list={list}/>
            <Box className={'mt-10'}>
                {children}
            </Box>
        </Box>
    )
}

export default Content