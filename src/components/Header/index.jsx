import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <header>
        <div className="banner">
          <div className="app">
            <h1>Appka Hypoška </h1>{' '}
            <p className="app-rest">u bydlení kámoška</p>
          </div>
          <p className="motto">
            Jednoduché kroky k vysněnému bydlení s hypotékou.
          </p>
          <p className="motto__info">
            <strong>Nejsem banka, finanční poradce, nic nenabízím!</strong>{' '}
            Poskytuji informace, co tě se mnou čeká.
          </p>
          <Link to="/hypoteka">
            <button className="button--banner">vstoupit</button>
          </Link>
        </div>
      </header>
    </>
  );
};
