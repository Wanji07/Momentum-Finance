import NavbarLogo from '../assets/icons/navbar-light.png'
import NotificationIcon from '../assets/icons/notification-icon.png'
import SettingsIcon from '../assets/icons/settings-icon.png'
import { useState, useEffect } from 'react'

export default function Header() {
    
    const [isScrolled, setIsScrolled] = useState(false);
    
    useEffect(() => {
        const scrollHandling = () => {
            setIsScrolled(window.scrollY > 25)
            console.log("Scroll test")
        }

        window.addEventListener('scroll', scrollHandling);

        return () => {
            window.removeEventListener('scroll', scrollHandling)      
        }
    }, [])
    
    return (
        <>
        <nav id="container" className="top-0 z-50 max-h-20 p-5 flex flex-row gap-2 shadow-sm items-center justify-between border-b bg-[#0D1117]/40 border-emerald-500/20">
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