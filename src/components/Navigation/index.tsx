import { useState } from 'react'

import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'
import { IconButton } from '@mui/material'
import { ChevronLeft, Menu } from '@mui/icons-material'

import MenuItem from '../MenuItem'

import { useStyles } from './styles'

import Logo1 from '../../assets/logo1.svg'
import Logo2 from '../../assets/logo2.svg'

import Routes from '../../routes'

const Navigation = () => {
    const classes = useStyles()

    const [open, setOpen] = useState(true)

    const toggleNavigation = () => {
        setOpen(!open)
    }

    return (
        <div>
            <Drawer
                classes={{ paper: (`${classes.navigationDrawer} ${!open && classes.navigationDrawerCollapse}`) }}
                variant='permanent'
                open={open}
            >
                <div className={(`${classes.navigationToolBar} ${!open && classes.navigationToolBarCollapse}`)}>
                    <IconButton onClick={toggleNavigation}>
                        {open ? <ChevronLeft /> : <Menu />}
                    </IconButton>
                </div>
                <div className={classes.navigationLogoContainer}>
                    <img src={open ? Logo1 : Logo2} alt="Logo" className={classes.navigationLogo} />
                </div>
                <List className={classes.navigationList}>
                    {Routes.map((route: any) => {
                        return (
                            <>
                                {route.path !== '/sign-out' && <div className={classes.navigationSpacer}></div>}
                                <MenuItem
                                    label={route.label}
                                    icon={route.icon}
                                    activeIcon={route.activeIcon}
                                    path={route.path}
                                />
                            </>
                        )
                    })}
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation