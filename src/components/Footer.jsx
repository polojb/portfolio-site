import emailIcon from '../assets/email.png'
import githubIcon from '../assets/github.png'
import linkedinlIcon from '../assets/linkedin.png'

function Footer() {
    return (
        <footer className="flex flex-col items-center gap-4 py-6">
            <div className="flex gap-4 items-center">
                <a href="https://github.com/polojb" target="_blank" rel="noreferrer">
                    <img className="h-12 w-12 footer-icon" src={githubIcon} alt="github icon" />
                </a>
                <a href="https://www.linkedin.com/in/jaxon-polo/" target="_blank" rel="noreferrer">
                    <img className="h-12 w-12 footer-icon" src={linkedinlIcon} alt="linkedin icon" />
                </a>
                <a href="mailto:polojb@mail.uc.edu" target="_blank" rel="noreferrer">
                    <img className="h-12 w-12 footer-icon" src={emailIcon} alt="email icon" />
                </a>
            </div>

            <hr className="w-full border-t" />

            <div className="text-sm text-gray-500 text-center">
                Copyright 2026; Designed by Jaxon Polo
            </div>
        </footer>
    )
}

export default Footer