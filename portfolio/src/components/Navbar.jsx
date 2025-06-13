import { useLocation, Link } from 'react-router-dom';
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home', icon: <FaHome /> },
    { path: '/about', label: 'About', icon: <FaUser /> },
    { path: '/work', label: 'Work', icon: <FaBriefcase /> },
    { path: '/contact', label: 'Contact', icon: <FaEnvelope /> }
  ];

  return (
    <nav className="navbar">
      <div className="nav-container">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
            aria-label={link.label}
          >
            <span className="nav-icon">{link.icon}</span>
            <span className="nav-label">{link.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 