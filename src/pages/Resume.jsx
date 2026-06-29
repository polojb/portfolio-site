import resume from '../assets/resume.png'

function Resume() {
    return (
        <section className="px-8 py-16 max-w-6xl mx-auto">
            <div>
                <p className="text-sm text-violet-400 px-3 py-1">
                    My background
                </p>
                <h1 className="text-5xl font-medium mb-3">
                    Resume
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-md">
                    A summary of my education, experience, and certifications. Download the full PDF below.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <div className="mb-12 border-l-4 border-violet-600 pl-4">
                        <h2 className="text-2xl font-medium mb-1">Education</h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">Bachelor of Science, Computer Science</p>
                        <p className="font-medium text-sm mb-1">University of Cincinnati — Expected May 2027</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">GPA: 3.25 / 4.0</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">Relevant Coursework: Data Structures, Algorithms, Software Engineering, Operating Systems, Computer Networks, Database Design, AI Principles, Network Security</p>
                    </div>

                    <div className="mb-12 border-l-4 border-blue-600 pl-4">
                        <h2 className="text-2xl font-medium mb-1">Experience</h2>
                        <p className="font-medium text-sm mb-1">Web Development Intern — soHza Sister, Covington KY</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">May 2025 – Present</p>
                        <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-2">
                            <li>Audited and optimized Shopify storefront using Screaming Frog and Lighthouse; resolved SEO errors, implemented WebP images, and reduced render-blocking scripts</li>
                            <li>Automated product catalog corrections via Python CSV processing; managed Google Shopping attributes and Faire integration for 200+ SKUs</li>
                            <li>Built custom Shopify Liquid section files and authored SOP documentation for non-technical staff</li>
                        </ul>
                    </div>

                    <div className="mb-12 border-l-4 border-amber-600 pl-4">
                        <h2 className="text-2xl font-medium mb-1">Certifications</h2>
                        <p className="font-medium text-sm mb-1">freeCodeCamp C# Certification — 2026</p>
                        <p className="font-medium text-sm mb-1">University of Cincinnati — Bachelor of Science, Computer Science</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">In Progress — Expected May 2027</p>
                    </div>
                </div>

                <div>
                    <div className="flex justify-center items-center">
                        <img
                            src={resume}
                            alt="Jaxon Polo"
                            className="rounded-lg border border-violet-600/40 w-72 h-80 object-cover"
                        />
                    </div>
                    <div className="flex justify-center mt-4">
                        <a
                            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 mt-4 inline-block"
                            href="/Jaxon_Polo_Resume.pdf"
                            download="">
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume