import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../../assets/Logo_wt_bg.png';
import avatarImg from '../../assets/dashboard/avatar.png';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-[#f8f4ef] px-10 pt-6 max-[900px]:px-4 max-[900px]:pt-3">
      <div className="flex items-center justify-between rounded-[20px] bg-[#ddceb9] px-5 py-2 max-[900px]:px-3 max-[900px]:py-2">
        <Link to="/" className="flex items-center gap-2 text-[#2d1d0c] no-underline" onClick={closeMenu}>
          <img src={logoImg} alt="FactoryPulse" className="size-[34px] rounded-full object-cover" />
          <span className="text-base font-semibold tracking-[-0.87px]">FACTORYPULSE</span>
        </Link>

        <nav className="flex gap-8 max-[900px]:hidden">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `text-[13px] font-light tracking-[-0.6px] text-[#2d1d0c] no-underline transition-opacity hover:opacity-70 ${isActive ? 'font-medium' : ''}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/machines"
            end
            className={({ isActive }) =>
              `text-[13px] font-light tracking-[-0.6px] text-[#2d1d0c] no-underline transition-opacity hover:opacity-70 ${isActive ? 'font-medium' : ''}`
            }
          >
            Parc Machines
          </NavLink>

          <NavLink
            to="/kanban"
            className={({ isActive }) =>
              `text-[13px] font-light tracking-[-0.6px] text-[#2d1d0c] no-underline transition-opacity hover:opacity-70 ${isActive ? 'font-medium' : ''}`
            }
          >
            Kanban
          </NavLink>

          <NavLink
            to="/machines/new"
            className={({ isActive }) =>
              `text-[13px] font-light tracking-[-0.6px] text-[#2d1d0c] no-underline transition-opacity hover:opacity-70 ${isActive ? 'font-medium' : ''}`
            }
          >
            Nouvelle machine
          </NavLink>
        </nav>

        <div className="flex items-center gap-3 max-[900px]:hidden">
          <button type="button" className="flex size-[34px] cursor-pointer items-center justify-center rounded-full border-0 bg-[#6e473b] text-white" aria-label="Search">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2.5"
                 strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="16.5" y1="16.5" x2="21" y2="21" />
            </svg>
          </button>
          <div className="flex items-center gap-2">
            <img src={avatarImg} alt="User avatar" className="size-[34px] rounded-full object-cover" />
            <div className="flex flex-col leading-[1.3]">
              <span className="text-[13px] font-light text-[#6e473b]">Hello!</span>
              <span className="text-[13px] font-medium text-[#2d1d0c]">Aya</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          className="hidden cursor-pointer border-0 bg-transparent p-[0.2rem] text-[#2d1d0c] max-[900px]:block"
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
        <nav className="flex flex-col rounded-b-[20px] bg-[#ddceb9] px-3 pb-2 max-[900px]:flex">
          <NavLink to="/" end onClick={closeMenu}
            className={({ isActive }) =>
              `px-4 py-[0.6rem] text-[#2d1d0c] no-underline ${isActive ? 'bg-[rgba(110,71,59,0.12)] text-[#6e473b]' : ''}`
            }>
            Tableau de bord
          </NavLink>

          <NavLink to="/machines" end onClick={closeMenu}
            className={({ isActive }) =>
              `px-4 py-[0.6rem] text-[#2d1d0c] no-underline ${isActive ? 'bg-[rgba(110,71,59,0.12)] text-[#6e473b]' : ''}`
            }
          >
            Parc Machines
          </NavLink>

          <NavLink to="/kanban" onClick={closeMenu}
            className={({ isActive }) =>
              `px-4 py-[0.6rem] text-[#2d1d0c] no-underline ${isActive ? 'bg-[rgba(110,71,59,0.12)] text-[#6e473b]' : ''}`
            }
          >
            Kanban
          </NavLink>

          <NavLink to="/machines/new" onClick={closeMenu}
            className={({ isActive }) =>
              `px-4 py-[0.6rem] text-[#2d1d0c] no-underline ${isActive ? 'bg-[rgba(110,71,59,0.12)] text-[#6e473b]' : ''}`
            }
          >
            Nouvelle machine
          </NavLink>
        </nav>
      )}
    </header>
  );
}
