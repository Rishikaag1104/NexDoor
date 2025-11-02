import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav className=" w-full bg-purple-800 text-white  flex justify-between px-4 py-3 ">
            <div className="flex">
                <img src={logo} alt="Logo" className="h-12 p-2 " />
                <h1 className="text-2xl font-bold">NexDoor</h1>
            </div>


            {/* Navigation Links */}
            <ul className="flex space-x-6">
                <li><Link to="/" className="hover:text-gray-200">Home</Link></li>
                <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
                <li><Link to="/help" className="hover:text-gray-200">Help Requests</Link></li>
                <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
            </ul>

            {/* Button */}
            <div>
                <Link to="/offer">
                    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Offer Help</button>
                </Link>

                <Link to="/post-request">
                    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Post Request</button>
                </Link>
                <Link to="/login">
                    <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login/SignUP</button>
                </Link>

            </div>


        </nav>
    );
};

export default Navbar;
