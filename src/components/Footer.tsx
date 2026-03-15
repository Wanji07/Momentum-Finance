import { FaHome } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

export default function Footer() {
    const navButtonClass =
        "shadow-lg grid h-10 w-10 place-items-center rounded-xl text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white";
    return (
        <footer className="w-full mx-auto mt-3 rounded-t-lg border border-white/5 bg-[#161B22]/90 px-4 py-3 text-center text-xs text-white/45 backdrop-blur-sm">
            <div id="button-container" className="flex flex-row items-center justify-between gap-2 text-2xl">
                <button type="button" className={navButtonClass}><FaHome /></button>
                <button type="button" className={navButtonClass}><FaChartBar /></button>
                <button type="button" className="shadow-lg bg-emerald-700 grid h-12 w-12 place-items-center rounded-full text-white/90 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"><FaPlus /></button>
                <button type="button" className={navButtonClass}><FaCreditCard /></button>
                <button type="button" className={navButtonClass}><IoMdPerson /></button>
            </div>
        </footer>
    )
}