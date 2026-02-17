import React, { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {

    useEffect(() => {
        gsap.fromTo(
            ".project-card",
            { y: 100, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.25,
                scrollTrigger: {
                    trigger: "#projects",
                    start: "top 80%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    }, []);

    return (
        <section
            id="projects"
            className="w-full md:w-[80%] lg:w-[70%] mx-auto px-5 sm:px-6 py-7 text-white bg-gray-950 rounded-3xl my-7"
        >
            {/* Heading */}
            <h2 className="text-2xl font-bold text-left md:text-center mb-7">
                Projects
            </h2>

            {/* Projects Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                <ProjectCard
                    title="MindCare – Mental Health Support Platform"
                    desc="A full-stack mental health web application that helps users track mood, sleep, and wellbeing, complete assessments, and access one-to-one support chat."
                    tech="Java • Spring Boot • REST API • MySQL • HTML • CSS • JavaScript"
                    github="https://github.com/prachu25/mindcare_frontend"
                    live="https://mindcare-health.vercel.app/"
                />

                <ProjectCard
                    title="AI ChatBot"
                    desc="Real-time AI chatbot using Gemini API with typing animation, file upload, and theme toggle. Uses free API tier so replies may stop after limit."
                    tech="HTML • CSS • JavaScript • Gemini API"
                    github="https://github.com/prachu25/chatbot"
                    live="https://prachu25.github.io/chatbot/"
                />

                <ProjectCard
                    title="FocusKeeper – Smart Focus & Streak Manager"
                    desc="Full-stack Pomodoro app for tracking study sessions, managing daily streaks, and viewing productivity dashboard with React, Spring Boot, and MySQL."
                    tech="React • Vite • Spring Boot • MySQL • REST API"
                    github="https://github.com/prachu25/pomodoro_frontend"
                    live="https://pomodoro-app-sigma-pink.vercel.app/"
                />

            </div>
        </section>
    );
}

/* Project Card */
function ProjectCard({ title, desc, tech, github, live }) {
    return (
        <div className="project-card bg-[#1a263b] rounded-xl p-5 flex flex-col justify-between hover:scale-[1.03] transition duration-300">

            <div>
                <h3 className="text-lg font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-300 mb-3">{desc}</p>
                <p className="text-xs text-blue-400 mb-4">{tech}</p>
            </div>

            <div className="flex gap-3">

                {/* GitHub Button */}
                <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-gray-950 bg-gradient-to-r from-cyan-500 to-blue-900 px-3 py-1.5 rounded-lg transition"
                >
                    <FaGithub /> Code
                </a>

                {/* Live Button */}
                <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-sm border border-gray-500 px-3 py-1.5 rounded-lg transition ${live === "#" ? "opacity-50 pointer-events-none" : "hover:bg-gray-700"
                        }`}
                >
                    <FiExternalLink /> Live
                </a>

            </div>
        </div>
    );
}
