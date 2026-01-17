import { ReactTyped } from 'react-typed';
import * as Motion from "framer-motion"

export default function Hero() {
    


    return (
        
        <Motion.motion.section
            initial={{opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration:  0.8, ease: "easeOut"  }}
            className="relative min-h-screen bg-[url('/src/assets/bgpofilio.jfif')] bg-cover bg-center flex items-center justify-center dark:brightness-75 dark:saturate-75"
            id="home"
            >
        {/* Overlay */}
        
        

        <div className="absolute inset-0 bg-black/50 dark:bg-black/65" />

        <div className="relative z-10 px-6 md:px-16 py-20 grid gap-16 md:grid-cols-2 items-center">
            
            {/* Text Content */}
            <div className="text-white text-center md:text-left dark:drop-shadow-[0_2px_12px_rgba(59,130,246,0.25)]">
                <h1 className="text-3xl md:text-4xl font-semibold mb-3">
                    Miracle Igboanusi
                </h1>

                <h2 className="text-2xl md:text-3xl font-light">
                    I'm a{" "}
                    <span className="font-bold text-blue-400 dark:text-blue-300">
                        <ReactTyped
                            strings={[
                            'Frontend Developer',
                            'Web Interface Developer',
                            'Frontend Specialist',
                            'Modern Web Developer',
                            'UI Engineer',
                            ]}
                            typeSpeed={90}
                            backSpeed={40}
                            backDelay={1200}
                            loop
                        />
                    </span>
                </h2>

                <p className="mt-4 text-base md:text-xl max-w-md mx-auto md:mx-0">
                    From Lagos, Nigeria. I design and develop sleek, responsive websites
                    that look stunning and deliver seamless user experiences.
                </p>

                <Motion.motion.button
                    initial={{ y: 0 }}
                                animate={{ y: [-6, 6, -6] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}

                    onClick={() => window.open("https://wa.me/+2349123613888", "_blank")} 
                    className="cursor-pointer mt-8 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500
                            dark:hover:bg-blue-600 px-8 py-3 rounded-full font-medium transition"
                            >
                    Lets Talk
                </Motion.motion.button>
            </div>

            {/* Images */}
            <div className="relative flex justify-center">
            
            {/* Main Image */}
            <div className="bg-blue-100 dark:bg-[#1b3466] p-3 rounded-t-full shadow-2xl dark:shadow-blue-900/40">
                <img
                src="/src/assets/profile-image 2.JPG"
                alt="Profile"
                className="w-52 h-64 md:w-60 md:h-72 object-cover rounded-t-full"
                />
            </div>

            {/* Floating Image (Desktop only) */}
            <div className="hidden md:block absolute -bottom-12 right-0 bg-blue-300 dark:bg-[#020617] p-3 rounded-t-full shadow-2xl dark:shadow-black/60">
                <img
                src="/src/assets/profilepofolio.jfif"
                alt="Profile"
                className="w-44 h-56 object-cover rounded-t-full rounded-br-full"
                />
                <div className="absolute bottom-2 right-2 bg-blue-700 text-white w-7 h-7 rounded-full flex items-center justify-center font-bold">
                ✓
                </div>
            </div>
            </div>

        </div>
        </Motion.motion.section>
    );
}