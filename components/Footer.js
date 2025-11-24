import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";


export function Footer() {
    return (
        
        <footer className="grid grid-cols-1 py-5 px-5 bg-gray-100 md:grid-cols-2 md:py-5 lg:grid-cols-4 lg:px-20 lg:py-5">
            <div>
                <p className="text-2xl font-bold text-blue-500">Dexter</p>
                <p className="font-thin">About us</p>
                <p className="font-thin">Contact us</p>
                <p className="font-thin">Location</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-blue-500">Legal</p>
                <p className="font-thin">Privacy policy</p>
                <p className="font-thin">Cookies</p>
                <p className="font-thin">Terms of use</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-blue-500">Business</p>
                <p className="font-thin">Customer</p>
                <p className="font-thin">Management</p>
            </div>
            <div>
                <p className="text-2xl font-bold text-blue-500">Socials</p>
                  <div className="flex gap-4 mt-4">
                    <FaFacebook className="text-xl text-blue-500"/>
                    <FaInstagram className="text-xl text-blue-500"/>
                    <CiLinkedin className="text-xl text-blue-500"/>
                  </div>
            </div>
        </footer>
    )
}