import DashboardIcon from './assets/DashboardIcon.svg'
import DashboardIconActive from './assets/DashboardIconActive.svg'
import AccountsIcon from './assets/AccountsIcon.svg'
import AccountsIconActive from './assets/AccountsIconActive.svg'
import TransactionsIcon from './assets/TransactionsIcon.svg'
import TransactionsIconActive from './assets/TransactionsIconActive.svg'
import SecureIcon from './assets/SecureIcon.svg'
import SecureIconActive from './assets/SecureIconActive.svg'
import SettingsIcon from './assets/SettingsIcon.svg'
import SettingsIconActive from './assets/SettingsIconActive.svg'
import SignOutIcon from './assets/SignOutIcon.svg'

const routes = [
    {
        label: 'Dashboard',
        path: '/',
        icon: DashboardIcon,
        activeIcon: DashboardIconActive,
    },
    {
        label: 'Accounts',
        path: '/accounts',
        icon: AccountsIcon,
        activeIcon: AccountsIconActive,
    },
    {
        label: 'Transactions',
        path: '/transactions',
        icon: TransactionsIcon,
        activeIcon: TransactionsIconActive,
    },
    {
        label: 'Secure',
        path: '/secure',
        icon: SecureIcon,
        activeIcon: SecureIconActive,
    },
    {
        label: 'Settings',
        path: '/settings',
        icon: SettingsIcon,
        activeIcon: SettingsIconActive,
    },
    {
        label: 'Sign Out',
        path: '/sign-out',
        icon: SignOutIcon,
        activeIcon: SignOutIcon,
    },
]

export default routes