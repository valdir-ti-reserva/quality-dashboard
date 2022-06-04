import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    appRoot: {
        display: 'flex',
        justifyContent: 'center',
    },
    componentsRoot: {
        position: 'absolute',
        right: 0,
        height: '100vh',
        width: 'calc(100% - 240px)',
    },
    componentsRootCollapsed: {
        position: 'absolute',
        right: 0,
        height: '100vh',
        width: 'calc(100% - 50px)',
    }
}))