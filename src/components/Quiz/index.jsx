import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/*import { useHistory } from 'react-router';*/

import cx from 'classnames/bind';
import { Questions } from '../Questions/questions.jsx';
import './style.css';

import Start from './img/start.svg';
import Castle from './img/castle.svg';
import Ruin from './img/ruin.svg';
import Tent from './img/tent.svg';
import Flat from './img/flat.svg';
import House from './img/house.svg';

export const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);
  const increment = () => {
    if (activeQuestion <= 5) {
      setActiveQuestion(activeQuestion + 1);
    }
  };
  /* const history = useHistory();*/
  const refreschQuiz = () => {
    setActiveQuestion(1);
  };
  return (
    <>
      <main>
        <h1>Kvíz</h1>
        <h2>
          Vyzkoušej své znalosti. Každá správná odpověď tě posune o krok blíž k
          lepšímu bydlení.
        </h2>
        <div className="quiz-container__card">
          <Questions
            className={cx({ 'is-active': activeQuestion === 1 })}
            key="Question1"
            photo={Start}
            alt="Start"
            result="Připraven? Jdeme na to!"
            title="OTÁZKA 1: Co je to hypoška?"
            textA="Hypoteční úvěr na bydlení."
            textB="Úvodní fáze při hypnóze."
            goAhead={increment}
          ></Questions>

          <Questions
            className={cx('change', { 'is-active': activeQuestion === 2 })}
            key="Question2"
            result="Správně, stěhuješ se do stanu. Bohužel spacák hypotékou koupit nejde. Vyber další správnou odpověď a přestěhuj se!"
            photo={Tent}
            alt="Stan"
            title="OTÁZKA 2: Co je to fixace?"
            textA="Doba, pro kterou bude platit sjednaný úrok."
            textB="Když muž potká ženu, tak mezi nimi vznikne fixace."
            goAhead={increment}
          ></Questions>

          <Questions
            className={cx('change', { 'is-active': activeQuestion === 3 })}
            key="Question3"
            result="Správně, stěhuješ se. Chce to hypošku na novou střechu. Nebo ne, vyber další správnou odpověď a přestěhuj se!"
            photo={Ruin}
            alt="Ruina"
            title="OTÁZKA 3: Jaká fixace úroku je nejlepší?"
            textA="Pro Pepíčka 3 roky, pro Aničku 7 let. Nejlepší fixace je ta, která je na míru tvým potřebám"
            textB="Čím delší, tím lepší."
            goAhead={increment}
          ></Questions>

          <Questions
            className={cx({ 'is-active': activeQuestion === 4 })}
            key="Question4"
            photo={Flat}
            alt="Byt"
            title="OTÁZKA 4: Kde najdeš nejlevnější hypotéku?"
            textA="Každá banka má v různý moment jinou sazbu. Je třeba banky obejít nebo si sehnat  finančního poradce"
            textB="V televizi, tam mají vždy pravdu."
            goAhead={increment}
          ></Questions>

          <Questions
            className={cx('change', { 'is-active': activeQuestion === 5 })}
            key="Question5"
            photo={House}
            alt="Dům"
            title="OTÁZKA 5: Co je zástavní smlouva?"
            textA="Smlouva, která se vystaví po podpisu smlouvy o hypotéce."
            textB="Vystavuje ji policie, když zastavím na zákazu zastavení.Zástavní smlouvou mi pomáhá a chrání mě."
            goAhead={increment}
          ></Questions>

          <Questions
            className={cx({ 'is-active': activeQuestion === 6 })}
            key="Question6"
            title="Gratulujeme! Obstál jsi. Jsi v cíli a na dobré cestě k vysněnému bydlení"
            photo={Castle}
            alt="Zámek"
            textA=""
            textB=""
            goAhead={increment}
          ></Questions>
        </div>
        <div className="buttons-row__buttons">
          <Link to="/kviz">
            <button className="button--back" onClick={refreschQuiz}>
              Hrát znovu
            </button>
          </Link>
          <Link to="/">
            <button className="button--forward">Konec</button>
          </Link>
        </div>
      </main>
    </>
  );
};
