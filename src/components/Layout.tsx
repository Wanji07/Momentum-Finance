import Header from '../components/Header'
import Footer from '../components/Footer'
import Dashboard from '../pages/Dashboard'
import './Layout.css'

export default function Layout() {
    return (
        <>
        <div id="container" className="min-h-screen grid grid-rows-[auto_1fr_auto] bg-[radial-gradient(circle_at_top,#10b98122,transparent_40%)]">
            <Header />
                <div id="mainContent" className="mt-6">
                    <Dashboard />
                </div>
            <Footer />
        </div>
        </>
    )
}