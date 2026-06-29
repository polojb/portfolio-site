import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import sunIcon from '../assets/sun.png'
import moonIcon from '../assets/moon.png'

function Navbar({ darkMode, setDarkMode }) {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <div>
            <nav className="flex justify-between items-center px-8 py-4 border-b">
                <Link to="/" className="text-xl font-bold">
                    Jaxon Polo
                </Link>     
                
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>
                

                <div className="hidden md:flex gap-6">
                    <Link to="/" className="hover:underline">Home</Link>
                    <Link to="/projects" className="hover:underline">Projects</Link>
                    <Link to="/skills" className="hover:underline">Skills</Link>
                    <Link to="/resume" className="hover:underline">Resume</Link>
                </div>

                <div>
                    <label className="toggle-track">
                        <input 
                            type="checkbox" 
                            className="toggle-checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode(!darkMode)}
                        />
                        <span className="toggle-pill">
                            <img src={sunIcon} alt="light mode" className="h-5 w-5" />
                            <img src={moonIcon} alt="dark mode" className="h-5 w-5" />
                        </span>
                    </label>
                </div>
            </nav>
            {menuOpen && (
                <div className="md:hidden flex flex-col px-8 py-4 gap-4 border-b">
                    <Link to="/" className="hover:underline" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/projects" className="hover:underline" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link to="/skills" className="hover:underline" onClick={() => setMenuOpen(false)}>Skills</Link>
                    <Link to="/resume" className="hover:underline" onClick={() => setMenuOpen(false)}>Resume</Link>
                </div>
            )}
        </div>
    )
}

export default Navbar