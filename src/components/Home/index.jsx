import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

import mortgage from './img/object.svg';
import income from './img/income.svg';
import costs from './img/costs.svg';
import bank from './img/bank.svg';

import cr from './img/cr.svg';
import quiz from './img/quiz.svg';
import bonus from './img/bonus.svg';

export const Home = () => {
  return (
    <>
      <main>
        <p>Ahoj, jsem Hypoška,</p>
        <p>
          <strong>řešíš bydlení</strong> a nepatříš mezi šťastlivce, kteří mohou
          zaplatit celou částku „ze svého“?
        </p>
        <p>
          <strong> S tím ti mohu pomoct právě já.</strong> Že o mně víš jen to,
          jak jsem drahá a hrozně prodlužuju zaplacení? To nemusí být vůbec
          pravda. Stačí vstoupit níže a já ti ukážu celý proces vyřízení, aby
          vše proběhlo rychle a hladce.
        </p>
        <p>
          <strong> Můj cíl:</strong> Nikdo nebude po první schůzce zaskočen.
          <strong> Kdo je připraven, není zaskočen.</strong>
        </p>
        <p>
          Nečekej radu, kam si dojít pro nejnižší úrok.
          <strong> Já ti poskytnu informace</strong> na co se připravit, jak to
          proběhne, co vzít s sebou na první návštěvu banky a na co dát pozor.
        </p>
        <h2 className="home-h">Co tě v appce čeká?</h2>

        <div className="container__img">
          <div>
            <div className="container__img-heigh">
              <img src={mortgage} alt="účel" />
            </div>
            <div className="container__h3-heigh">
              <h3>1. Zvolíš účel </h3>
            </div>
            <div className="container__p-heigh">
              <p>Získáš informace, co bude dokládáno k nemovitosti</p>
            </div>
          </div>
          <div>
            <div className="container__img-heigh">
              <img src={income} alt="příjem" />
            </div>
            <div className="container__h3-heigh">
              <h3>2. Doložíš příjmy</h3>
            </div>
            <div className="container__p-heigh">
              <p>Získáš informace, jak bance doložíš své příjmy. </p>
            </div>
          </div>
          <div>
            <div className="container__img-heigh">
              <img src={costs} alt="náklady" />
            </div>
            <div className="container__h3-heigh">
              <h3>3. Posoudíš výdaje</h3>
            </div>
            <div className="container__p-heigh">
              <p>Získáš informace k výdajům a koukneš na kalkulačky.</p>
            </div>
          </div>
          <div>
            <div className="container__img-heigh">
              <img src={bank} alt="banka" />
            </div>
            <div className="container__h3-heigh">
              <h3>4. Banka/poradce</h3>
            </div>
            <div className="container__p-heigh">
              <p>Zjistíš, jak vybrat vhodného partnera pro hypotéku.</p>
            </div>
          </div>
        </div>
        <p className="important-text">Zaškrtávej si v průběhu své volby. </p>
        <p className="text-center">
          V závěru si vytiskneš taháček pro tvou první schůzku v bance či u
          poradce.
        </p>
        <Link to="/hypoteka">
          <button className="button--large">Vstoupit</button>
        </Link>

        <div className="home-container">
          <div className="home-container__card ">
            <h2>Kvíz</h2>
            <div className="home-container__card-in">
              <img src={quiz} alt="Kvíz" />
              <p>Ověř své teoretické znalosti zpracování hypotéky.</p>
            </div>
            <Link to="/kviz">
              <button className="button--small">vstoupit</button>
            </Link>
          </div>
          <div className="home-container__card ">
            <h2>Kde to umí</h2>
            <div className="home-container__card-in">
              <img src={cr} alt="Mapa České Republiky" />
              <p>Zadej referenci na bankéře či poradce nebo ho najdi.</p>
            </div>
            <Link to="/mapa">
              <button className="button--small">vstoupit</button>
            </Link>
          </div>
          <div className="home-container__card">
            <h2>Bonusy</h2>
            <div className="home-container__card-in">
              <img src={bonus} alt="Dárek" />
              <p>Fáze jednání, pojištění, čerpání, důvěřuj, ale prověřuj.</p>
            </div>
            <Link to="/bonus">
              <button className="button--small">vstoupit</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
