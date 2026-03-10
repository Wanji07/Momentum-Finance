import Header from '../components/Header'
import Footer from '../components/Footer'
import './Layout.css'

export default function Layout() {
    return (
        <>
        <div id="container" className="min-h-screen grid grid-rows-[auto_1fr_auto]">
            <Header />
            <h1>Hello, World!</h1>
            <Footer />
        </div>
        </>
    )
}