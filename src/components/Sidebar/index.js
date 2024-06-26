import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoT from '../../assets/images/logo-t.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faBook, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'


const Sidebar = () => {
    const [showNav,setShowNav] = useState(false);

    return(
    <div className="nav-bar">
        <Link className="logo" to="/react-portfolio/home">
            <img src={LogoT} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="tze yik"/>
        </Link>
        <nav className={showNav ? 'mobile-show' : ''}>
            <NavLink exact="true" activeclassname="active" to="/react-portfolio/home" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/react-portfolio/about" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/react-portfolio/portfolio" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/react-portfolio/contact" onClick={() => setShowNav(false)}>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <a exact="true" target="_blank" rel='noreferrer' className="resume-link" href="https://1drv.ms/w/s!AppdrDQPhvZ9kGIaglzxCGzGVc0r?e=svx8Xl">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
            </a>
            <FontAwesomeIcon
                onClick={() => setShowNav(false)}
                icon={faClose}
                color="#ffd700"
                size="3x"
                className='close-icon'
            />
            <ul className={showNav ? 'mobile-show' : ''}>
                <li>
                    <a className="linkedin" target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/tze-yik-ong-13887421b'>
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                    </a>
                </li>
                <li>
                    <a className="github" target="_blank" rel='noreferrer' href='https://github.com/tzeyik-ong'>
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                    </a>
                </li>
            </ul>
        </nav>
        <FontAwesomeIcon 
            onClick={() => setShowNav(true)}
            icon={faBars}
            color="#ffd700"
            size="3x"
            className='hamburger-icon'
        />
    </div>
    )
}

export default Sidebar
