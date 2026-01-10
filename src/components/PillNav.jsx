import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import './PillNav.css';

const PillNav = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power2.out',
  baseColor = '#fff',
  pillColor = '#060010', // Non usato direttamente, gestito da CSS
  initialLoadAnimation = true
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // Refs
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const navItemsRef = useRef(null);
  const logoRef = useRef(null);

  // GESTIONE MENU MOBILE (Animazioni apertura/chiusura)
  useEffect(() => {
    const hamburger = hamburgerRef.current;
    const menu = mobileMenuRef.current;
    if (!hamburger || !menu) return;
    const lines = hamburger.querySelectorAll('.hamburger-line');

    if (isMobileMenuOpen) {
      gsap.to(lines[0], { rotation: 45, y: 5, duration: 0.3, ease });
      gsap.to(lines[1], { rotation: -45, y: -5, duration: 0.3, ease });
      gsap.set(menu, { visibility: 'visible' });
      gsap.fromTo(menu, { opacity: 0, y: -10, scaleY: 0.9 }, { opacity: 1, y: 0, scaleY: 1, duration: 0.3, ease });
    } else {
      gsap.to(lines[0], { rotation: 0, y: 0, duration: 0.3, ease });
      gsap.to(lines[1], { rotation: 0, y: 0, duration: 0.3, ease });
      gsap.to(menu, { opacity: 0, y: -10, scaleY: 0.9, duration: 0.2, ease, onComplete: () => gsap.set(menu, { visibility: 'hidden' }) });
    }
  }, [isMobileMenuOpen, ease]);

  // ANIMAZIONE INIZIALE (Caricamento pagina)
  useEffect(() => {
    if (initialLoadAnimation) {
      const logoEl = logoRef.current;
      const navItemsEl = navItemsRef.current;
      
      if (logoEl) {
        gsap.set(logoEl, { scale: 0, opacity: 0 });
        gsap.to(logoEl, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' });
      }
      if (navItemsEl) {
        gsap.fromTo(navItemsEl, 
          { opacity: 0, x: 20 }, 
          { opacity: 1, x: 0, duration: 0.6, ease: 'power2.out', delay: 0.2 }
        );
      }
    }
  }, [initialLoadAnimation]);

  const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
  const isRouterLink = href => href && !href.startsWith('http') && !href.startsWith('#');

  // Helper per renderizzare i link
  const renderLink = (item) => {
    const isActive = activeHref === item.href;
    const commonProps = {
      className: `pill${isActive ? ' is-active' : ''}`,
      role: "menuitem"
    };

    const content = (
      <>
        <span className="pill-bg" />
        <span className="pill-label">{item.label}</span>
      </>
    );

    return isRouterLink(item.href) ? (
      <Link to={item.href} {...commonProps}>{content}</Link>
    ) : (
      <a href={item.href} {...commonProps}>{content}</a>
    );
  };

  return (
    <div className="pill-nav-container">
      <nav className={`pill-nav ${className}`} aria-label="Primary">
        {/* LOGO (Sinistra) */}
        <Link className="pill-logo" to="/" aria-label="Home" ref={logoRef}>
          <img src={logo} alt={logoAlt} />
        </Link>

        {/* MENU DESKTOP (Destra) */}
        <div className="pill-nav-items desktop-only" ref={navItemsRef}>
          <ul className="pill-list" role="menubar">
            {items.map((item, i) => (
              <li key={i} role="none">
                {renderLink(item)}
              </li>
            ))}
          </ul>
        </div>

        {/* BOTTONE MOBILE */}
        <button className="mobile-menu-button mobile-only" onClick={toggleMobileMenu} aria-label="Toggle menu" ref={hamburgerRef}>
          <span className="hamburger-line" />
          <span className="hamburger-line" />
        </button>
      </nav>

      {/* MENU MOBILE POPOVER */}
      <div className="mobile-menu-popover mobile-only" ref={mobileMenuRef}>
        <ul className="mobile-menu-list">
          {items.map((item, i) => (
            <li key={i}>
              <Link 
                to={item.href} 
                className={`mobile-menu-link${activeHref === item.href ? ' is-active' : ''}`} 
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;