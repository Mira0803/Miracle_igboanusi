import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import * as Motion from "framer-motion";

export default function NavBar () {

    const [open, setOpen] = useState(false);


    return (
        <Motion.motion.header
            initial={{opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration:  0.8, ease: "easeOut"  }}

            className="fixed top-0 left-0 z-50 w-full px-10 md:px-16 py-5 flex 
                items-center justify-between bg-background/80 backdrop-blur-md text-text-color 
                shadow-xl dark:bg-secondary-background dark:text-gray-200"
                >
            
            <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg cursor-pointer hover:text-blue-600 transition"><a href="#home">MIRA</a></span>
            </div>
            <nav className="hidden cursor-pointer md:flex items-center gap-8 text-sm font-medium text-gray-700 dark:text-gray-200">
                <a href="#home" className="hover:text-button-background transition">Home</a>
                <a href="#about" className="hover:text-button-background">About</a>
                <a href="#projects" className="hover:text-button-background">Projects</a>
                <a href="#contact" className="hover:text-button-background">Contact</a>
            </nav>

            <div className="flex items-center gap-4">
                
                <button
                    onClick={() => window.open("https://wa.me/+2349123613888", "_blank")}
                    className="md:inline-flex bg-button-background text-white px-5 py-2 
                                rounded-full shadow-md text-sm font-medium cursor-pointer 
                                hover:bg-blue-800 transition"
                            >
                    Connect Now
                </button>
                <ThemeToggle />
            </div>
            <button
                className="md:hidden text-2xl cursor-pointer"
                onClick={() => setOpen(!open)}
            >
                ☰
            </button>

            <div
            className={`absolute top-full left-0 z-50 w-full bg-background text-gray-800 dark:bg-secondary-background dark:text-gray-200
                overflow-hidden md:hidden transition-all duration-300 ease-out
                ${open ? "max-h-60 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-4"}
            `}
            >
                <div className="flex flex-col items-center gap-6 py-6">
                    <a href="#home" className="hover:text-button-background">Home</a>
                    <a href="#about" className="hover:text-button-background">About</a>
                    <a href="#projects" className="hover:text-button-background">Projects</a>
                    <a href="#contact" className="hover:text-button-background">Contact</a>
                </div>
            </div>
        </Motion.motion.header>
    )
    
}