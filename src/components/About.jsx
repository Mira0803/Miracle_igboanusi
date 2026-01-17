import * as Motion from "framer-motion"

export default function About () {

    return (




        <section className="min-h-screen bg-background dark:bg-background flex items-center py-10 px-6 md:px-16"
            id="about"
            >
            <div className="max-w-6xl mx-auto w-full grid gap-8 md:grid-cols-2">

                {/* ABOUT CARD */}
                <Motion.motion.div 
                    initial={{ opacity: 0, x: -80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: "easeOut", delay: 0.2 }}
                    className="bg-cards-color/80 dark:bg-cards-color/80 backdrop-blur-3xl rounded-3xl p-8 shadow-2xl"
                    >
                    <h2 className="text-3xl font-bold text-white mb-6">
                        About Me
                    </h2>

                    <p className="text-gray-300 leading-relaxed">
                        I’m a frontend developer passionate about building clean,
                        responsive, and accessible user interfaces. I enjoy turning
                        complex problems into elegant digital experiences and
                        continuously improving my craft through real-world projects.
                    </p>

                    <p className="text-gray-300 mt-4">
                        When I’m not coding, you can find me exploring the latest
                        web technologies, contributing to open-source projects, or
                        indulging in my love for photography and travel.
                    </p>
                </Motion.motion.div>

                {/* SKILLS CARD */}
                <Motion.motion.div 
                    initial={{ opacity: 0, x: 80 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.0, ease: "easeOut", delay: 0.3 }}
                    className="bg-cards-color/80 dark:bg-cards-color/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
                    >
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Skills
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {[
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "React",
                        "Tailwind CSS",
                        "Git & GitHub",
                        "Firebase",
                        "Node.js",
                        "TypeScript",
                        ].map((skill) => (
                        <div
                            key={skill}
                            className="flex items-center justify-center
                                    bg-white/10 text-white
                                    rounded-xl py-4
                                    font-medium tracking-wide
                                    hover:bg-button-color/80
                                    transition cursor-pointer"
                        >
                            {skill}
                        </div>
                        ))}
                    </div>
                </Motion.motion.div>

            </div>
        </section>

    )

}