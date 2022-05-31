import { Icon, ListItem, ListItemIcon, ListItemText } from '@mui/material'

import { useStyles } from './styles'

interface Props {
    label: string
    icon: string
    activeIcon: string
    path: string
}

const MenuItem = ({label, icon, activeIcon, path}: Props) => {
    const classes = useStyles()

    return (
        <ListItem>
            <ListItemIcon>
                <Icon>
                    <img src={icon} alt={label} className={classes.menuItemIcon} />
                </Icon>
            </ListItemIcon>
            <ListItemText primary={label} primaryTypographyProps={{ variant: 'body2' }}/>
        </ListItem>
    )
}

export default MenuItem