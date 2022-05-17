import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/Images/logo-s.png';
import LogoSubtitle from '../../assets/Images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Sidebar = () => (
     <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoS} alt='Logo' ></img>
                <img className='sub-logo' src={LogoSubtitle} alt='LogoSub' ></img>
            </Link>
            <nav>
                <NavLink exact="true" acitveclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" acitveclassname="active" className='about-link' to="/about">
                    <FontAwesomeIcon icon={faUser} color='#4d4d4e' />
                </NavLink>
                <NavLink exact="true" acitveclassname="active" className='contact-link' to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e' />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/talha-toufeeq-8207551b4/'>
                        <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' />
                    </a>
                </li>
                <li>
                    <a target='_blank' rel='noreferrer' href='https://github.com/Talhaaa99'>
                        <FontAwesomeIcon icon={faGithub} color='#4d4d4e' />
                    </a>
                </li>
            </ul>
    </div>
)

export default Sidebar;