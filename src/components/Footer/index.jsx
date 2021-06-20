import React from 'react';
import './style.css';
import copyright from './img/c.svg';
import logo from './img/logo-footer.svg';

export const Footer = () => {
  return (
    <>
      <footer>
        <img className="footer__logo" src={logo} alt="Logo" />
        <div className="footer__text">
          <img className="footer__copyright" src={copyright} alt="Copyright" />
          <p> 2021 Slávka a Verča</p>
        </div>
      </footer>
    </>
  );
};
