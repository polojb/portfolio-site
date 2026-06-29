import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'

function Home() {
    return ( 
        <section className="px-4 md:px-8 py-8 md:py-16 max-w-6xl mx-auto">
            <section className="grid md:grid-cols-2 gap-12">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <p className="text-sm text-green-500 dark:text-green-400">Available for junior roles</p>
                    </div>
                    
                    <p className="inline-block text-sm border border-violet-600 text-violet-400 px-3 py-1 rounded-full mb-4">
                        CS Student · University of Cincinnati
                    </p>
                    <h1 className="text-3xl md:text-5xl font-medium mb-3">Hi, I'm
                        <span className="text-violet-500"> Jaxon Polo</span>
                    </h1>
                    <h2 className="text-xl text-gray-600 dark:text-gray-400 mb-5 font-normal">.NET Developer & Aspiring Game Dev</h2>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-md">
                        I'm a Computer Science student finishing my degree 
                        this spring, building backend APIs with .NET and  
                        frontends with React. My long-term passion is game  
                        development with Unity — I'm laying the engineering 
                        foundation to get there.
                    </p>
                    <Link to="/projects" className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 mr-3">
                        View Projects
                    </Link>
                    <a 
                        href="/Jaxon_Polo_Resume.pdf"
                        download
                        className="border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200">
                        Download Resume
                    </a>

                    <div>
                        <ul className="flex gap-2 flex-wrap list-none mt-8 p-0">
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                C#
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                .NET
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                React
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                SQL
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                Unity
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                Git
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex justify-center items-center">
                    <img
                        src={heroImg}
                        alt="Jaxon Polo"
                        className="rounded-lg border border-violet-600/40 w-72 h-80 object-cover"
                    />
                </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200 dark:border-white/10 mt-16">
                <div className="text-center py-8 border-r border-gray-200 dark:border-white/10 last:border-r-0">
                    <h2 className="text-4xl font-medium text-violet-500">4</h2>
                    <p className="text-sm text-gray-500 mt-1">Portfolio projects</p>
                </div>
                <div className="text-center py-8 border-r border-gray-200 dark:border-white/10 last:border-r-0">
                    <h2 className="text-4xl font-medium text-violet-500">3+</h2>
                    <p className="text-sm text-gray-500 mt-1">Years coding</p>
                </div>
                <div className="text-center py-8 border-r border-gray-200 dark:border-white/10 last:border-r-0">
                    <h2 className="text-4xl font-medium text-violet-500">2027</h2>
                    <p className="text-sm text-gray-500 mt-1">Graduating spring</p>
                </div>
            </div>
        </section>
    )
}

export default Home