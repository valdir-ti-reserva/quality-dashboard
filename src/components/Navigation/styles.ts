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
        paddingBottom: 30,
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