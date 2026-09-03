'use client';
import { Handbag, Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {

    const pathname = usePathname();

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Contact', path: '/contact' }
    ]
    return <div>
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {navItems.map((item) => (
                            <li key={item.path}>
                                <Link href={item.path} className={`${pathname === item.path ? 'font-semibold underline' : 'text-gray-600 font-medium'}`}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href={'/'} className=" text-xl">
                    <Image
                        src='/assets/logo.svg'
                        alt="Car Doctor logo"
                        width={107}
                        height={87}></Image>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems.map((item) => (
                        <li key={item.path}>
                            <Link href={item.path}
                                className={`${pathname === item.path ? 'font-semibold underline' : 'text-gray-600 font-medium'}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <div className="flex gap-3">
                    <Handbag size={20} />
                    <Search size={20} />
                </div>
                <button className="btn border-[#FF3811] text-[#FF3811]">Appointment</button>
            </div>
        </div>
    </div>;
}
