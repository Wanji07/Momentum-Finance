import NavbarLogo from '../assets/icons/navbar-light.png'
import NotificationIcon from '../assets/icons/notification-icon.png'
import SettingsIcon from '../assets/icons/settings-icon.png'

export default function Header() {
    return (
        <>
        <nav id="container" className="sticky top-0 z-50 max-h-20 p-2 flex flex-row gap-2 shadow-sm items-center justify-between border-b border-emerald-500/40">
            <img src={NavbarLogo} alt="Momentum Finance Logo" className="h-35 w-auto" />
            <div id="navbar-btn-container" className="flex flex-row gap-6 items-center">
                <button type="button">
                    <img src={NotificationIcon} className="h-8 w-auto" alt="Notification Icon" />
                </button>
                <button type="button">
                    <img src={SettingsIcon} className="h-8 w-auto" alt="Settings Icon" />
                </button>
            </div>
        </nav>
        </>
    )
}