import React from "react";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <section
            id="experience"
            className="w-full md:w-[80%] lg:w-[70%] mx-auto px-5 sm:px-6 py-5 md:py-7 text-white bg-gray-950 rounded-3xl my-7"
        >
            {/* Heading */}
            <h2 className="text-2xl sm:text-2xl md:text-2xl font-bold mb-6">
                Experience
            </h2>

            {/* Card */}
            <motion.div
                className="bg-[#1a263b]  rounded-xl p-4 sm:p-5"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                {/* Company + Role */}
                <h3 className="text-lg sm:text-xl font-semibold">
                    Soham Global
                </h3>

                <p className="text-sm text-gray-400">
                    Trainee Application Developer
                </p>

                <p className="text-xs sm:text-sm text-gray-500 mb-3">
                    Feb 2025 – July 2025
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Worked on Java and Spring Boot backend development, built REST APIs,
                    and handled database integration using MySQL. Gained practical
                    experience in developing backend features and understanding
                    real-world development workflows.
                </p>
            </motion.div>
        </section>
    );
}
