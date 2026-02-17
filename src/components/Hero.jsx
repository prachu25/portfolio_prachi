import React from "react";
import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(".hero-text",
            {
                x: -60,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: 'bounce.out'
            }
        )

            .fromTo(".name",
                { scale: 0 },
                { scale: 1, duration: 0.2, ease: 'sine' }
            )

            .fromTo(".desc",
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: 'sine' }
            )

            .fromTo(".buttons",
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.4, ease: 'sine' }
            );

    }, [])

    return (
        <section
            id="home"
            className="w-full md:w-[80%] lg:w-[70%] mx-auto px-5 sm:px-6 py-5 md:py-7  text-white bg-gray-950 rounded-3xl mb-6"

        >
            <div className="text-center md:text-left hero">

                {/* Heading */}
                <h1 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight tracking-wider mt-5 hero-text">
                    print("Hello, I'm{" "}
                    <span className="name bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Prachi Gorde
                    </span>
                    ")
                </h1>

                {/* Paragraph */}
                <p className="desc text-gray-400 mt-4 text-sm sm:text-sm md:text-base max-w-2xl md:max-w-none leading-relaxed mx-auto md:mx-0">
                    I am a full-stack developer with hands-on experience in building web applications
                    using Java, Spring Boot, React, JavaScript, and databases like MySQL and MongoDB.
                    I enjoy developing applications from backend APIs to responsive frontends.
                </p>

                {/* Buttons */}
                <div className="buttons flex flex-wrap justify-center md:justify-start gap-4 mt-7 mb-4">
                    <a
                        href="/assets/RESUME-2026.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-cyan-500 to-blue-900 text-gray-950 px-5 py-2.5 rounded-lg"
                    >
                        Download Resume
                    </a>

                    <a
                        href="#projects"
                        className="px-5 py-2.5 border border-gray-500 hover:bg-gray-800 rounded-lg"
                    >
                        See Projects
                    </a>
                </div>

            </div>

        </section>
    );
}
