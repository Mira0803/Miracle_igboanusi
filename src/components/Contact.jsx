import { useRef } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"
import * as Motion from "framer-motion"


export default function Contact() {


    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

        .then(() => {
            alert("Message sent successfully ✅");
            formRef.current.reset();
        })

        .catch(() => {
            alert("Something went wrong ❌");
        });
    };
    
    return (
        <Motion.motion.section
            initial={{opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration:  0.8, ease: "easeOut"  }}

            className="bg-background dark:bg-background py-28 px-6 md:px-16"
            id="contact"
            >
            <div className="max-w-6xl mx-auto relative">

                {/* CONTACT CARD */}
                <div className="bg-cards-color/80 backdrop-blur-xl rounded-3xl shadow-2xl grid md:grid-cols-2 gap-12 p-10 md:p-14 relative z-10">

                    {/* LEFT SIDE */}

                    <div className="flex flex-col items-center text-center">
                        <h2 className="text-3xl font-bold text-gray-100 mb-4">
                            Get in Touch
                        </h2>

                        <p className="text-gray-200 mb-8 max-w-sm">
                            Feel free to reach out if you want to collaborate on a project,
                            have a question, or just want to connect.
                        </p>

                        {/* IMAGE */}
                        <Motion.motion.div
                                initial={{ y: 0 }}
                                animate={{ y: [-6, 6, -6] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="w- h-60 mb-8 overflow-hidden rounded-xl shadow-lg">
                            <img
                                src="/contact_me.png"
                                alt="Contact me"
                                className="w-full h-full object-center object-cover"
                            />
                        </Motion.motion.div>

                        {/* ICON ROW */}
                        <div className="flex items-center gap-6 text-gray-300">
                            <a
                                href="https://github.com/Mira0803"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-800 hover:scale-110 transition"
                            >
                                <FaGithub className="text-2xl" />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/miracle-igboanusi-b5463b338/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-800 hover:scale-110 transition"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>

                            <a
                                href="https://x.com/Sunshine_MiraJ"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-800 hover:scale-110 transition"
                            >
                                <FaXTwitter className="text-2xl" />
                            </a>

                            <a
                                href="https://www.tiktok.com/code_with_mira?_r=1&_"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-blue-800 hover:scale-110 transition"
                            >
                                <FaTiktok className="text-2xl" />
                            </a>

                            <a
                                href="mailto:miracleigboanusi@gmail.com"
                                className="hover:text-blue-800 hover:scale-110 transition">
                                <FaEnvelope className="text-2xl" />
                            </a>
                        </div>
                    </div>


                    {/* RIGHT SIDE (FORM) */}
                    <form 
                        ref={formRef}
                        onSubmit={sendEmail}
                        className="space-y-5"
                    >
                        <h3 className="text-xl font-semibold text-gray-100">
                            Say Something
                        </h3>

                        <input
                            type="text"
                            name="from_name"
                            placeholder="Your Name"
                            required
                            className="w-full border text-gray-200 border-gray-300 rounded-lg px-4 py-3
                                        focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />

                        <input
                            type="email"
                            name="from_email"
                            placeholder="Your Email"
                            required
                            className="w-full border text-gray-200 border-gray-300 rounded-lg px-4 py-3
                                        focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="w-full border text-gray-200 border-gray-300 rounded-lg px-4 py-3
                                        focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                        ></textarea>

                        <button
                        type="submit"
                            className="w-full bg-button-background text-gray-100 py-3 rounded-lg
                                        font-medium hover:bg-blue-800 transition cursor-pointer"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* BOTTOM ACCENT BAR */}
                <div className="absolute -bottom-12 left-0 w-full h-40 bg-[#668bac]/50 rounded-3xl"></div>

            </div>
        </Motion.motion.section>
    );
}
