import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import cx from 'classnames/bind';

import picture1 from './img/1.svg';
import picture2 from './img/2.svg';
import picture3 from './img/3.svg';
import picture4 from './img/4.svg';

export const SecondNav = () => {
  return (
    <>
      <nav className="second-nav">
        <div className="second-nav__container">
          <div
            className={cx('second-nav__item', {
              grey: window.location.pathname !== '/hypoteka',
            })}
          >
            <Link to="/hypoteka">
              Účel hypotéky <br />
              <img className="second-nav__img" src={picture1} alt="1" />
            </Link>
          </div>
          <div
            className={cx('second-nav__item', {
              grey: window.location.pathname !== '/prijem',
            })}
          >
            <Link to="/prijem">
              Příjem <br />
              <img className="second-nav__img" src={picture2} alt="2" />
            </Link>
          </div>
          <div
            className={cx('second-nav__item', {
              grey: window.location.pathname !== '/vydaje',
            })}
          >
            <Link to="/vydaje">
              Výdaje <br />
              <img className="second-nav__img" src={picture3} alt="3" />
            </Link>
          </div>
          <div
            className={cx('second-nav__item', {
              grey: window.location.pathname !== '/banka',
            })}
          >
            <Link to="/banka">
              Banka / poradce <br />
              <img className="second-nav__img" src={picture4} alt="4" />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
