'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"


const Navbar = () => {
    const path = usePathname();
    return (
        <header className="sm:mx-auto flex-center w-full z-20 mt-12 fixed">
            <nav className=" w-full sm:w-[600px] bg-slate-950/[20] flex-between p-4 rounded-xl shadow-xl border-2 border-slate-700">
                <Link href={'/'} className="bg-white p-1.5 rounded-lg">
                    <p className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500  to-purple-500 font-bold text-2xl">HD</p>
                </Link>
                <div className="flex gap-6 font-semibold text-white">
                    <Link href={'/about'} className={`hover:text-cyan-500 ${path === '/about' && 'text-cyan-500'}`}>About</Link>
                    <Link href={'/projects'} className={`hover:text-cyan-500 hover:font-extrabold ${path === '/projects' && 'text-cyan-500'}`}>Projects</Link>
                    <Link href={'/contact'} className={`hover:text-cyan-500 hover:font-extrabold ${path === '/contact' && 'text-cyan-500'}`}>Contact</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar