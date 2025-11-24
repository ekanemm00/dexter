"use client"
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import Link from "next/link";
export function Navbar () {
    const [dropDown, setDropDown] = useState(false);
    const toggleMenu = () => {
        setDropDown(!dropDown)
    }
    return (
        <main className="w-full bg-gray-100 shadow shadow-gray-300 sticky top-0">
            <div className="h-[50px] flex justify-between items-center px-5">
                <h1 className="text-2xl font-bold text-blue-500">Dexter</h1>
                <ul className="hidden md:text-sm font-semibold md:flex gap-10 cursor-pointer">
                    <li>Home</li>
                    <li>Contact-us</li>
                    <li>About-us</li>
                </ul>
                <Link href="/auth/login">
                <div className="hidden md:block">
                    <button className="w-15 h-[30px] bg-blue-500 text-white rounded-md">Login</button>
                </div>
                </Link>

                <div className="block md:hidden">
                    <CiMenuFries onClick={toggleMenu} className="text-3xl text-blue-500"/>
                </div>
            </div>
            {dropDown && (
            <div className="flex flex-col gap-4 justify-center items-center">
                <ul className="flex flex-col gap-3">
                    <li>Home</li>
                    <li>Contact-us</li>
                    <li>About-us</li>
                </ul>
                <button className="w-15 h-8 bg-blue-500 rounded-md text-white mb-5">Login</button>
            </div>
            )}
        </main>
    )
}