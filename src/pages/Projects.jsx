import placeholderImg from '../assets/general-img-landscape.png'

function Projects() {
    return (
        <section className="px-8 py-16 max-w-6xl mx-auto">
            <div>
                <p className="text-sm text-violet-400 px-3 py-1">
                    My work
                </p>
                <h1 className="text-5xl font-medium mb-3">
                    Projects
                </h1>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-md">
                    A collection of what I've built across backend, full-stack, and game development
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors duration-200 overflow-hidden">
                    <div className=" p-5">
                        <h2 className="mb-3">
                            Personal Finance Tracker
                        </h2>
                        <div className="flex justify-center mb-4">
                            <img 
                            src={placeholderImg}
                            alt=""
                            className="rounded-lg border border-violet-600/40 w-72 h-80 object-cover"
                        />
                        </div>
                        <ul className="flex gap-2 flex-wrap list-none mt-4 p-0">
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                C#
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                .NET
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                EF Core
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                SQLite
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                Swagger
                            </li>
                        </ul>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            A REST API for tracking personal finances with CRUD operations, category filtering, and monthly summaries
                        </p>

                        <div className="flex gap-3 mt-4">
                            <a 
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 mr-3">
                                GitHub
                            </a>
                            <a 
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                className="border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors duration-200 overflow-hidden">
                    <div className="p-5">
                        <h2 className="mb-3">
                            Job Board MVC App
                        </h2>
                        <div className="flex justify-center mb-4">
                            <img 
                            src={placeholderImg}
                            alt=""
                            className="rounded-lg border border-violet-600/40 w-72 h-80 object-cover"
                        />
                        </div>
                        <ul className="flex gap-2 flex-wrap list-none mt-4 p-0">
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                ASP.NET MVC
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                Identity
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                EF Core
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                SQL
                            </li>
                        </ul>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            Full-stack job board with employer and applicant roles, job listings, search, and application tracking
                        </p>
                        <div className="flex gap-3 mt-4">
                            <a 
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 mr-3">
                                GitHub
                            </a>
                            <a 
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                className="border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors duration-200 overflow-hidden">
                    <div className="p-5">
                        <h2 className="mb-3">
                            Auth Microservice
                        </h2>
                        <div className="flex justify-center mb-4">
                            <img 
                            src={placeholderImg}
                            alt=""
                            className="rounded-lg border border-violet-600/40 w-72 h-80 object-cover"
                        />
                        </div>
                        <ul className="flex gap-2 flex-wrap list-none mt-4 p-0">
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                JWT
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                OAuth2
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                ASP.NET Core
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                EF Core
                            </li>
                        </ul>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            Standalone authentication service with JWT tokens, refresh token rotation, and Google OAuth2 support
                        </p>

                        <div className="flex gap-3 mt-4">
                            <a 
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 mr-3">
                                GitHub
                            </a>
                            <a 
                                href=""
                                target="_blank"
                                rel="noreferrer"
                                className="border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200">
                                Live Demo
                            </a>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-white/10 rounded-lg hover:border-violet-500 dark:hover:border-violet-500 transition-colors duration-200 overflow-hidden">
                    <div className="p-5">
                        <h2 className="mb-3">
                            Mario Unity Game
                        </h2>
                        <div className="flex justify-center mb-4">
                            <img 
                            src={placeholderImg}
                            alt=""
                            className="rounded-lg border border-violet-600/40 w-72 h-80 object-cover"
                        />
                        </div>
                        
                        <ul className="flex gap-2 flex-wrap list-none mt-4 p-0">
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                Unity
                            </li>
                            <li className="text-xs bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 px-3 py-1 rounded-md">
                                C#
                            </li>
                        </ul>
                        <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                            A 2D arcade platformer built in Unity to learn C# scripting, physics, collisions, and scene management
                        </p>

                        <div className="flex gap-3 mt-4">
                            <a 
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 mr-3">
                            GitHub
                        </a>
                        <a 
                            href=""
                            target="_blank"
                            rel="noreferrer"
                            className="border border-violet-600 text-violet-400 hover:bg-violet-600 hover:text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors duration-200">
                            Live Demo
                        </a>
                        </div>
                    </div>
                </div>
            </div>  
            
        </section>
    )
}

export default Projects