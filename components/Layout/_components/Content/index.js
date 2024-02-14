import {Box, Toolbar, Typography, Breadcrumbs, Link} from "@mui/material";
import {ListPages} from "@/components/Layout/_components/Content/_components";

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
            <Toolbar />
            <Typography  variant="h4" color="text.secondary" align="left">
                {name}
            </Typography>
            <ListPages list={list} />
            <Box className={'mt-10'}>
                {children}
            </Box>
        </Box>
    )
}

export default Content