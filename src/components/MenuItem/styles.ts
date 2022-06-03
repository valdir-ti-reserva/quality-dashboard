import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
    menuItemIcon: {
        width: '100%'
    },
    menuItem: {
        width: '80%',
        borderRadius: 8,
        marginBottom: 8,
        cursor: 'pointer'
    },
    menuItemActive: {
        backgroundColor: '#EBEBEC'
    }
}))