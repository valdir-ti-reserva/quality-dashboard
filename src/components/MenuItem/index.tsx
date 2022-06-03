import React from 'react'

import { Icon, ListItem, ListItemIcon, ListItemText } from '@mui/material'

import { useStyles } from './styles'

interface Props {
    label: string
    icon: string
    activeIcon?: string
    path: string
}

const MenuItem = ({label, icon, activeIcon, path}: Props) => {
    const classes = useStyles()

    const [active, setActive] = React.useState(true)

    return (
        <ListItem
            button
            className={`${classes.menuItem} ${active && classes.menuItemActive}`}
        >
            <ListItemIcon>
                <Icon>
                    <img src={active ? activeIcon : icon} alt={label} className={classes.menuItemIcon} />
                </Icon>
            </ListItemIcon>
            <ListItemText primary={label} primaryTypographyProps={{ variant: 'body2' }}/>
        </ListItem>
    )
}

export default MenuItem