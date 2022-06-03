import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    navigationLogo: {
        width: '50%',
        cursor: 'pointer',
        marginTop: 5,
    },
    navigationLogoContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 25,
    },
    navigationDrawer: {
        width: 240,
        border: 'none',
        whiteSpace: 'nowrap',
        overflowX: 'hidden',
    },
    navigationDrawerCollapse: {
        width: 50,
        border: 'none',
    },
    navigationToolBar: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingRight: 5,
    },
    navigationToolBarCollapse: {
        justifyContent: 'center',
        paddingRight: 0,
    },
    navigationList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    navigationSpacer: {
        flex: 1,
    }
})