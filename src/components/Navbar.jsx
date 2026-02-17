import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        gsap.set(".brand", { y: -40, opacity: 0 });
        gsap.set(".nav-item", { y: -40, opacity: 0 });

        const tl = gsap.timeline();

        tl.to(".brand", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
        });

        if (window.innerWidth > 768) {
            tl.to(".nav-item", {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out"
            }, "-=0.5");
        }
    }, []);

    return (
        <div className="w-full flex justify-center py-6 px-2">
            <header className="w-full md:w-[80%] lg:w-[70%] bg-gray-950 backdrop-blur-lg border border-white/10 text-white px-4 md:px-6 py-3 rounded-2xl flex items-center justify-between shadow-lg relative">

                {/* Brand */}
                <div className="flex items-center gap-3 brand">
                    <div className="bg-gradient-to-br from-cyan-500 to-blue-900 text-gray-950 w-9 h-9 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold">
                        PG
                    </div>
                    <div>
                        <div className="font-semibold text-sm md:text-base">Prachi Gorde</div>
                        <div className="text-xs text-gray-300">Portfolio</div>
                    </div>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-8 lg:gap-11 text-sm">
                    <a href="#home" className="nav-item hover:text-blue-300">Home</a>
                    <a href="#about" className="nav-item hover:text-blue-300">About</a>
                    <a href="#education" className="nav-item hover:text-blue-300">Education</a>
                    <a href="#skills" className="nav-item hover:text-blue-300">Skills</a>
                    <a href="#projects" className="nav-item hover:text-blue-300">Projects</a>
                    <a href="#contact" className="nav-item hover:text-blue-300">Contact</a>
                </nav>

                {/* Mobile Icon */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <RiCloseLine /> : <RiMenu3Line />}
                </button>

                {/* Mobile Menu */}
                {open && (
                    <div className="absolute top-16 left-0 w-full bg-blue-950/95 backdrop-blur-lg rounded-xl p-4 flex flex-col gap-4 md:hidden">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#education">Education</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                        <a href="#achievements">Achievements</a>
                        <a href="#contact">Contact</a>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navbar;
