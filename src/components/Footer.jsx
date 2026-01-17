
export default function Footer() { 

    return (
        <footer className="bg-[#0e1c38]/80 dark:bg-[#0e1c38] py-6 px-6 md:px-16">
            <div className="max-w-6xl mx-auto">
                <p className="text-gray-300 text-center">
                    &copy; {new Date().getFullYear()} Miracle Igboanusi. All rights reserved.
                </p>
            </div>
        </footer>
    )

}