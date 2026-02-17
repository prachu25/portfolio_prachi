import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {
    FaJava,
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaGithub,
    FaReact
} from "react-icons/fa";

import {
    SiSpringboot,
    SiHibernate,
    SiMysql,
    SiMongodb,
    SiPython,
    SiPostman
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {

    useEffect(() => {

        // Heading animation
        gsap.fromTo(
            ".skill-heading",
            { y: -40, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top 85%",
                }
            }
        );

        // Icons stagger animation
        gsap.fromTo(
            ".skill-icon",
            {
                y: 60,
                opacity: 0,
                scale: 0.8
            },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "back.out(1.7)",
                stagger: 0.15,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top 60%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

    }, []);

    return (
        <section
            id="skills"
            className="w-full md:w-[80%] lg:w-[70%] mx-auto px-5 sm:px-6 py-7 text-white bg-gray-950 rounded-3xl my-7"
        >
            {/* Heading */}
            <h2 className="skill-heading text-2xl font-bold text-center mb-4">
                Skills
            </h2>

            {/* LANGUAGES */}
            <h3 className="text-center text-blue-300 font-semibold tracking-widest mb-4">
                LANGUAGES
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge icon={<FaJava className="text-orange-500" />} name="Java" />
                <Badge icon={<SiPython className="text-yellow-400" />} name="Python" />
                <Badge icon={<FaHtml5 className="text-orange-600" />} name="HTML" />
                <Badge icon={<FaCss3Alt className="text-blue-500" />} name="CSS" />
                <Badge icon={<FaJs className="text-yellow-400" />} name="JavaScript" />
                <Badge icon={<FaReact className="text-cyan-400" />} name="React JS" />
            </div>

            {/* BACKEND */}
            <h3 className="text-center text-blue-300 font-semibold tracking-widest mb-4">
                BACKEND
            </h3>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge icon={<SiSpringboot className="text-green-600" />} name="Spring Boot" />
                <Badge icon={<SiHibernate className="text-amber-400" />} name="Hibernate" />
                <Badge icon={<SiMysql className="text-blue-500" />} name="MySQL" />
                <Badge icon={<SiMongodb className="text-green-500" />} name="MongoDB" />
            </div>

            {/* TOOLS */}
            <h3 className="text-center text-blue-300 font-semibold tracking-widest mb-4">
                TOOLS
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
                <Badge icon={<FaGithub className="text-white" />} name="GitHub" />
                <Badge icon={<SiPostman className="text-orange-500" />} name="Postman" />
            </div>
        </section>
    );
}

/* Badge Component */
function Badge({ icon, name }) {
    return (
        <div
            className="
      skill-icon
      flex items-center gap-2 
      bg-[#0f172a] 
      border border-blue-900/40 
      px-5 py-3 
      rounded-full 
      shadow-md
      hover:bg-blue-900/30
      transition
    "
        >
            <span className="text-lg text-blue-400">{icon}</span>
            <span className="text-sm font-medium">{name}</span>
        </div>
    );
}
