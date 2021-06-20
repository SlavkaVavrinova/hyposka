import React from 'react';
import { Link } from 'react-router-dom';
import { HypoCalculator } from './hypoCalculator';
import { AnnuityCalculator } from './annuityCalculator';
import { TextCosts } from './TextCosts';

import './style.css';

export const Costs = (props) => {
  return (
    <>
      <main>
        <TextCosts
          addToPrint={props.addToPrint}
          checkedToPrint={props.listToPrint}
          printName="TextCosts"
        />
        <HypoCalculator />
        <p className="important-text">Spočítej si splátku své hyptéky</p>
        <p>
          Zajímá tě, jaká bude výše splátky tvé nové hypotéky? Namodeluj si ji v
          naší anuitní kalkulačce. Bohužel hypotéku ti nesjednáme, proto neznáme
          výši úrokové sazby, kterou v bance dostaneš. Baj voko ti ji může
          prozradit pan Google. Přidej raději i rezervu, která ti pro představu
          může stačit a kalkulace banky pak vyjde přívětivěji.
        </p>

        <div className="link-in-text">
          <p>Zeptat se ho můžeš</p>
          <p>
            <a
              href="https://www.google.com/search?q=pr%C5%AFm%C4%9Brn%C3%A1+v%C3%BD%C5%A1e+%C3%BArokov%C3%A9+sazby+hypot%C3%A9ky&oq=pr%C5%AFm%C4%9Brn%C3%A1+v%C3%BD%C5%A1e&aqs=chrome.1.69i57j35i39j0l8.4755j0j7&sourceid=chrome&ie=UTF-8"
              target="_blank"
              rel="noreferrer"
            >
              <strong>ZDE</strong>
            </a>
          </p>
        </div>
        <p>
          <div className="link-in-text">
            <p>Kalkuačku můžeš přeskočit a pokračovat k dalšímu kroku</p>
            <p>
              <Link to="/banka">
                <strong>BANKA</strong>
              </Link>
            </p>
          </div>
        </p>
        <AnnuityCalculator />
        <div className="buttons-row__buttons">
          <Link to="/prijem">
            <button className="button--back">Zpět</button>
          </Link>
          <Link to="/banka">
            <button className="button--forward">Pokračovat</button>
          </Link>
        </div>
      </main>
    </>
  );
};
