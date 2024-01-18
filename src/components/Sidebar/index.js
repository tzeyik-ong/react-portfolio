import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoT from '../../assets/images/logo-t.png'
import LogoSubtitle from '../../assets/images/logo-sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/react-portfolio/home">
            <img src={LogoT} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="tze yik"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/react-portfolio/home">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/react-portfolio/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/react-portfolio/portfolio">
                <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/react-portfolio/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
            <a exact="true" target="_blank" rel='noreferrer' className="resume-link" href="https://docs.google.com/document/d/1XP5NxP0b7o71VRbeCwTA2D-spqYq8i92/edit?usp=sharing&ouid=106912813493399807929&rtpof=true&sd=true">
                <FontAwesomeIcon icon={faBook} color="#4d4d4e"/>
            </a>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/tze-yik-ong-13887421b'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/tzeyik01'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar