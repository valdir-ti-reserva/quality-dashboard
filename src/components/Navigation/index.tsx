import List from '@mui/material/List'
import Drawer from '@mui/material/Drawer'

import MenuItem from '../MenuItem'

import { useStyles } from './styles'

import Logo from '../../logo.svg'
import Dashboard from '../../assets/DashboardIcon.svg'
import DashboardActive from '../../assets/DashboardIconActive.svg'

const Navigation = () => {
    const classes = useStyles()

    return (
        <div>
            <Drawer
                PaperProps={{
                    style: {
                        width: 240,
                    }
                }}
                variant='permanent'
                open={true}
            >
                <div className={classes.navigationLogoContainer}>
                    <img src={Logo} alt="Logo" className={classes.navigationLogo} />
                </div>
                <List>
                    <MenuItem
                        label="Dashboard"
                        icon={Dashboard}
                        activeIcon={DashboardActive}
                        path="/"
                    />
                </List>
            </Drawer>
        </div>
    )
}

export default Navigation