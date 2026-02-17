import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser";

export default function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_ibj3nnj",
            "template_twhrx4h",
            e.target,
            "l2y4mFN0CbpmC0wRC"

        ).then(
            () => {
                console.log("Message Sent Successfully!");
                e.target.reset();
            },
            () => {
                console.log("Failed to send message");
            }
        );
    };

    return (
        <section
            id="contact"
            className="w-full md:w-[80%] lg:w-[70%] mx-auto px-5 sm:px-6 py-8 text-white bg-gray-900 rounded-3xl my-7"
        >
            <div className="grid md:grid-cols-2 gap-10 items-start">

                {/* LEFT SIDE */}
                <div className="space-y-5 text-center md:text-left">
                    <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-2xl text-transparent">Let's Connect</h3>

                    <p className="text-gray-400 text-sm">
                        Open to internships and new opportunities.
                    </p>

                    <div className="flex md:justify-start justify-center gap-4 pt-3">
                        <a
                            href="https://github.com/prachu25"
                            target="_blank"
                            className="flex items-center gap-2 bg-[#0f172a] px-4 py-2 rounded-full">
                            <FaGithub /> GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/prachi-gorde-897440259"
                            target="_blank"
                            className="flex items-center gap-2 bg-[#0f172a] px-4 py-2 rounded-full">
                            <FaLinkedin className="text-blue-400" /> LinkedIn
                        </a>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div>
                    <form onSubmit={sendEmail} className="space-y-4">

                        <input
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            className="w-full bg-[#1a263b] rounded-lg px-4 py-3"
                            required
                        />

                        <input
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className="w-full bg-[#1a263b] rounded-lg px-4 py-3"
                            required
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            className="w-full bg-[#1a263b] rounded-lg px-4 py-3"
                            required
                        ></textarea>

                        <button
                            type="submit"
                            className="w-24 mx-auto md:mx-0 block md:inline-block text-gray-950 bg-gradient-to-r from-cyan-500 to-blue-900 rounded-lg py-2 font-semibold"
                        >
                            Send
                        </button>

                    </form>
                </div>

            </div>
        </section>
    );
}
