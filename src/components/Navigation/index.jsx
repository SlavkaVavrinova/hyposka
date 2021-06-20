import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import logo from './img/logo.svg';

export const Navigation = () => {
  const [isMenuOpened, setisMenuOpened] = useState(false);

  const mobileMenuRef = useRef(null);

  const showMenu = () => {
    setisMenuOpened(!isMenuOpened);
  };

  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      setisMenuOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });
  return (
    <>
      <nav className="main-nav">
        <div className="main-nav__logo">
          <Link to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navigation__mobile">
          <button
            onClick={showMenu}
            className={isMenuOpened ? 'hamburger hamburger-open' : 'hamburger'}
          ></button>

          {isMenuOpened ? (
            <>
              <div className="links-mobile" ref={mobileMenuRef}>
                <Link to="/" onClick={showMenu}>
                  Domů
                </Link>
                <Link to="/kviz" onClick={showMenu}>
                  Kvíz
                </Link>
                <Link to="/mapa" onClick={showMenu}>
                  Mapa
                </Link>
                <Link to="/bonus" onClick={showMenu}>
                  Bonusy
                </Link>
                <Link to="/kontakt" onClick={showMenu}>
                  Kontakt
                </Link>
              </div>
            </>
          ) : null}
        </div>
        <div className="navigation__large">
          <Link to="/kviz">Kvíz</Link>
          <Link to="/mapa">Mapa</Link>
          <Link to="/bonus">Bonusy</Link>
          <Link to="/kontakt">Kontakt</Link>
        </div>
      </nav>
    </>
  );
};
