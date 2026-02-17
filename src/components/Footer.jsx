import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full md:w-[80%] lg:w-[70%] mx-auto px-5 sm:px-6 py-5 text-white bg-gray-950 rounded-3xl">

            <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400">

                {/* Left */}
                <p>
                    © 2026 Prachi Gorde
                </p>

                {/* Right */}
                <div className="flex gap-5 mt-3 sm:mt-0">
                    <a
                        href="https://github.com/prachu25"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-400 transition flex items-center gap-1"
                    >
                        <FaGithub />
                        GitHub
                    </a>

                    <a
                        href="https://linkedin.com/in/prachi-gorde-897440259"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-blue-400 transition flex items-center gap-1"
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                </div>

            </div>
        </footer>
    );
}
