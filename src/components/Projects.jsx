import * as Motion from "framer-motion";
import projects from "../projects";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

export default function Projects() {
    const scrollRef = useRef(null);

    const scroll = (dir) => {
        if (!scrollRef.current) return;

        const cardWidth = 360; // matches lg:min-w-[360px]
        scrollRef.current.scrollBy({
        left: dir === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
        });
    };

    return (
        <Motion.motion.section
            initial={{opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration:  0.8, ease: "easeOut"  }}
            className="min-h-screen bg-secondary-background/80 dark:bg-secondary-background/90 py-15 px-6 md:px-16 overflow-hidden"
            id="projects"
            >
            
            
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-100">
                        Projects
                    </h2>
                    <p className="mt-4 text-gray-200 max-w-xl mx-auto">
                        A selection of projects that showcase my frontend skills.
                    </p>
                </div>

                {/* Slider wrapper */}
                <div className="relative">

                    {/* LEFT ARROW */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-10
                                bg-gray-900/30 dark:bg-gray-200/30 backdrop-blur-md text-gray-900 dark:text-gray-200 font-extrabold
                                w-10 h-10 rounded-full flex items-center justify-center
                                hover:bg-white/60 transition"
                    >
                        <FaArrowLeft />
                    </button>

                    {/* RIGHT ARROW */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-10
                                bg-gray-900/30 dark:bg-gray-200/30 backdrop-blur-md text-gray-900 dark:text-gray-200 font-extrabold
                                w-10 h-10 rounded-full flex items-center justify-center
                                hover:bg-white/60 hover:border transition"
                    >
                        <FaArrowRight />
                    </button>

                    {/* SCROLL CONTAINER */}
                    <div
                        ref={scrollRef}
                        className="overflow-x-scroll scrollbar-hide"
                    >
                        <Motion.motion.div
                        className="flex gap-8"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear",
                        }}
                        >
                        {[...projects, ...projects].map((project, index) => (
                            <div
                            key={index}
                            className="min-w-70 sm:min-w-[320px] lg:min-w-90
                                        snap-start bg-border dark:bg-border backdrop-blur-3xl rounded-2xl overflow-hidden
                                        shadow-2xl hover:shadow-xl/20 transition
                                        border-border dark:border-border border-8"
                            >
                            {/* Image */}
                            <img
                                src={project.image}
                                alt={project.title}
                                className="h-48 w-full object-cover"
                            />

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-950 dark:text-[#f1f5f9]">
                                {project.title}
                                </h3>

                                <p className="mt-3 text-gray-700 dark:text-gray-300 text-sm">
                                {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="mt-4 flex flex-wrap gap-2">
                                {project.tech.map((tech, i) => (
                                    <span
                                    key={i}
                                    className="text-xs bg-blue-900 text-blue-100 px-3 py-1 rounded-full"
                                    >
                                    {tech}
                                    </span>
                                ))}
                                </div>

                                {/* Links */}
                                <div className="mt-6 flex gap-4">
                                <a
                                    href={project.live}
                                    className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-800 transition"
                                >
                                    Live Demo
                                </a>
                                <a
                                    href={project.github}
                                    className="text-sm font-medium text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition"
                                >
                                    GitHub
                                </a>
                                </div>
                            </div>
                            </div>
                        ))}
                        </Motion.motion.div>
                    </div>
                </div>
            </div>
        </Motion.motion.section>
    );
}
