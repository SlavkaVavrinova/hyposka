import React from 'react';
import './style.css';
import copyright from './img/c.svg';
import logo from './img/logo-footer.svg';
import CookieConsent from 'react-cookie-consent';

export const Footer = () => {
  return (
    <>
      <CookieConsent
        location="bottom"
        buttonText="Jasně souhlasím!"
        cookieName="myAwesomeCookieName2"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
        expires={150}
      >
        Tato webová stránka používá cookies. Appka Hypoška využívá soubory
        cookies k analýze návštěvnosti webu. Děkuji z povolení.{' '}
      </CookieConsent>

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
