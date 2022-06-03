import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'

import MenuItem from '../MenuItem'

import { useStyles } from './styles'

import Logo from '../../logo.svg'

import Routes from '../../routes'

const Navigation = () => {
    const classes = useStyles()

    return (
        <div>
            <Drawer
                PaperProps={{
                    style: {
                        width: 240,
                        border: 'none',
                    }
                }}
                variant='permanent'
                open={true}
            >
                <div className={classes.navigationLogoContainer}>
                    <img src={Logo} alt="Logo" className={classes.navigationLogo} />
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