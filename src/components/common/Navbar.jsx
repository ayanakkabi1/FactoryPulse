import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../../assets/Logo_wt_bg.png';
import avatarImg from '../../assets/dashboard/avatar.png';
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img src={logoImg} alt="FactoryPulse" className="navbar-logo-img" />
          <span className="navbar-brand-title">FACTORYPULSE</span>
        </Link>

        <nav className="navbar-desktop-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/machines"
            end
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Parc Machines
          </NavLink>

          <NavLink
            to="/kanban"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Kanban
          </NavLink>

          <NavLink
            to="/machines/new"
            className={({ isActive }) =>
              `nav-link ${isActive ? 'nav-link-active' : ''}`
            }
          >
            Nouvelle machine
          </NavLink>
        </nav>

        <div className="navbar-right">
          <button type="button" className="navbar-search-btn" aria-label="Search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>
          <div className="navbar-user">
            <img src={avatarImg} alt="User avatar" className="navbar-user-avatar" />
            <div className="navbar-user-info">
              <span className="navbar-user-hello">Hello!</span>
              <span className="navbar-user-name">Aya</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="navbar-toggle-btn"
          onClick={toggleMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <svg viewBox="0 0 24 24" width="24" height="24"
                 fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="24" height="24"
                 fill="none" stroke="currentColor" strokeWidth="2"
                 strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="navbar-mobile-menu">
          <NavLink to="/" end onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
            }>
            Tableau de bord
          </NavLink>

          <NavLink to="/machines" end onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
            }
          >
            Parc Machines
          </NavLink>

          <NavLink to="/kanban" onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
            }
          >
            Kanban
          </NavLink>

          <NavLink to="/machines/new" onClick={closeMenu}
            className={({ isActive }) =>
              `mobile-nav-link ${isActive ? 'mobile-nav-link-active' : ''}`
            }
          >
            Nouvelle machine
          </NavLink>
        </nav>
      )}
    </header>
  );
}
