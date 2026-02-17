import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Education() {
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(
            cardsRef.current,
            {
                opacity: 0,
                y: 80
            },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardsRef.current[0],
                    start: "top 85%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );
    }, []);

    return (
        <section
            id="education"
            className="w-full md:w-[80%] lg:w-[70%] mx-auto px-5 sm:px-6 py-5 md:py-7 text-white bg-gray-950 rounded-3xl my-7"
        >
            <h2 className="text-2xl font-bold mb-6">Education</h2>

            <div className="space-y-4">

                <div
                    ref={(el) => (cardsRef.current[0] = el)}
                    className="bg-[#1a263b] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
                >
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold">
                            B.E Electronic and Telecommunication Engineering
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Sipna College of Enginerring and Technology, Amravati.
                        </p>
                        <p className="text-gray-400 text-sm">
                            Gained core electronics knowledge while discovering my passion for programming.
                        </p>
                    </div>

                    <div className="text-sm text-gray-300 mt-2 sm:mt-0 sm:text-right">
                        <span className="block">2026</span>
                        <span className="block font-bold">CGPA: 7.47</span>
                    </div>


                </div>

                <div
                    ref={(el) => (cardsRef.current[1] = el)}
                    className="bg-[#1a263b] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
                >
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold">
                            Higher Secondary School
                        </h3>
                        <p className="text-gray-400 text-sm">
                            N.G Moghe Jr. College of Art & Science, She-ghat
                        </p>
                    </div>

                    <div className="text-sm text-gray-300 mt-2 sm:mt-0 sm:text-right">
                        <span className="block">2021</span>
                        <span className="block font-bold">72%</span>
                    </div>

                </div>

                <div
                    ref={(el) => (cardsRef.current[2] = el)}
                    className="bg-[#1a263b] rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
                >
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold">
                            Secondary Education
                        </h3>
                        <p className="text-gray-400 text-sm">
                            Janta Girls High School, She-ghat
                        </p>
                    </div>

                    <div className="text-sm text-gray-300 mt-2 sm:mt-0 sm:text-right">
                        <span className="block">2020</span>
                        <span className="block font-bold">85%</span>
                    </div>

                </div>

            </div>
        </section>
    );
}
