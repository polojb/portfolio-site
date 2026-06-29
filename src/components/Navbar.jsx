import { Link } from 'react-router-dom'
import sunIcon from '../assets/sun.png'
import moonIcon from '../assets/moon.png'

function Navbar({ darkMode, setDarkMode }) {
    return (
        <nav className="flex justify-between items-center px-8 py-4 border-b">
            <Link to="/" className="text-xl font-bold">
                Jaxon Polo
            </Link>
            
            <div className="flex gap-6">
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
    )
}

export default Navbar