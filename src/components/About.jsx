import React from "react";
import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function About() {
    return (
        <section
            id="about"
            className="w-full md:w-[80%] lg:w-[70%] mx-auto px-3 sm:px-4 py-4 md:py-6 text-white bg-gray-950 rounded-3xl"

        >
            {/* Heading */}
            <motion.h2
                className="text-2xl sm:text-2xl md:text-2xl font-bold mb-3"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About
            </motion.h2>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

                {/* LEFT WIDE CARD */}
                <motion.div
                    className="md:col-span-2 bg-[#1a263b] p-5 sm:p-6 rounded-2xl shadow-lg "
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">

                        <motion.img
                            src="/assets/pro.jpg"
                            alt="Profile"
                            className="w-26 h-26 sm:w-25 sm:h-25 rounded-full object-cover"
                            whileHover={{ scale: 1.05 }}
                        />

                        <div className="text-center sm:text-left">
                            <h3 className="text-xl sm:text-xl md:text-xl font-semibold">
                                Prachi Gorde
                            </h3>

                            <p className="text-gray-400 text-xs sm:text-sm mt-1">
                                Java Developer • Web Development • Creative Interfaces
                            </p>

                            <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                                <a
                                    href="/assets/RESUME-2026.pdf"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-3 py-1.5 text-gray-950 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-lg text-xs sm:text-sm"
                                >
                                    Resume
                                </a>

                                <a
                                    href="#projects"
                                    className="px-3 py-1.5 border border-gray-500 hover:bg-gray-800 rounded-lg text-xs sm:text-sm"
                                >
                                    Projects
                                </a>
                            </div>
                        </div>
                    </div>

                    <motion.p
                        className="text-gray-400 mt-4 leading-relaxed text-xs sm:text-sm md:text-base"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        I build user-friendly web applications using React, Java, Spring Boot, JavaScript, and modern databases.
                        I enjoy working on backend APIs and responsive frontends while focusing on clean design and continuous learning.
                        Currently open to job opportunities.
                    </motion.p>
                </motion.div>

                {/* RIGHT SMALL CARD */}
                <motion.div
                    className="md:col-span-1 bg-[#1a263b] p-5 sm:p-6 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h4 className="text-base sm:text-lg md:text-xl font-semibold mb-3">
                        Contact
                    </h4>

                    <p className="text-gray-400 text-xs sm:text-sm">
                        Email:
                        <a
                            href="mailto:gordeprachi64@gmail.com"
                            className="text-blue-400 ml-2 hover:underline"
                        >
                            gordeprachi64@gmail.com
                        </a>
                    </p>

                    <p className="text-gray-400 mt-2 text-xs sm:text-sm">
                        Location: Amravati, Maharashtra, India
                    </p>

                    <div className="flex gap-3 mt-5 flex-wrap">
                        <a
                            href="https://github.com/prachu25"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#0f172a] px-3 py-2 text-sm rounded-full hover:bg-blue-900/30 transition flex items-center gap-2"
                        >
                            <FaGithub className="text-white" />
                            GitHub
                        </a>
                        <a
                            href="https://linkedin.com/in/prachi-gorde-897440259"
                            target="_blank"
                            rel="noreferrer"
                            className="bg-[#0f172a] px-3 py-2 text-sm rounded-full hover:bg-blue-900/30 transition flex items-center gap-2"
                        >
                            <FaLinkedin className="text-blue-400" />
                            LinkedIn
                        </a>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
