import React, { useState } from 'react';
import './style.css';

export const HypoCalculator = () => {
  const [osoba, setOsoba] = useState(3860);

  const [pocetOsob, setPocetOsob] = useState(0);
  const [pocet6Deti, setPocet6Deti] = useState(0);
  const [pocet15Deti, setPocet15Deti] = useState(0);
  const [pocet26Deti, setPocet26Deti] = useState(0);

  const [incomInput, setIncomInput] = useState(0);
  const [costInput, setCostInput] = useState(0);

  const livingMinimum =
    osoba +
    pocetOsob * 3200 +
    pocet6Deti * 1970 +
    pocet15Deti * 2420 +
    pocet26Deti * 2770;

  const restForMortgage = incomInput - (costInput + livingMinimum);

  return (
    <>
      <h2>HYPOŠKALKULAČKA</h2>
      <p>
        <strong>Nejsem banka, nemohu ti hypotéku slíbit.</strong> Mohu ti ukázat
        <strong> základní výpočet</strong>, který by měla banka jistě dodržet.
        Připrav se, že banka bude mimo spátky kalkulovat i s nějakou rezervou a
        <strong> bude přísnější než já</strong>.
      </p>
      <p className="text-center"> Nevychází ti moje kalkulace? </p>
      <p className="text-center">
        <em>Pravděpodobně nebude vhodná doba na hypoteční úvěr.</em>
      </p>

      <h3>Životní minimum rodiny</h3>
      <div className="form-costs">
        <label className="form-cost__select">
          Vyber kolik osob bude žádat o hypotéku
          <select
            name="person"
            value={osoba}
            onChange={(event) => {
              setOsoba(Number(event.target.value));
            }}
          >
            <option value={3860}>O hypotéku žádám sám</option>
            <option value={3550}>Žádám s někým z domácnosti</option>
          </select>
        </label>
        {osoba === 3550 ? (
          <div className="form-costs__in">
            <label>
              Kolik dalších osob ze společné domácnosti bude o hypotéku žádat
              <input
                type="number"
                name="pocetOsob"
                min={0}
                value={pocetOsob}
                onChange={(event) => {
                  setPocetOsob(Number(event.target.value));
                }}
              />
            </label>
            <label>
              Kolik je v domácnosti dětí do 6 let
              <input
                type="number"
                name="pocet6Deti"
                min={0}
                value={pocet6Deti}
                onChange={(event) => {
                  setPocet6Deti(Number(event.target.value));
                }}
              />
            </label>
            <label>
              Kolik je v domácnosti dětí od 6 do 15 let
              <input
                type="number"
                name="pocet15Deti"
                min={0}
                value={pocet15Deti}
                onChange={(event) => {
                  setPocet15Deti(Number(event.target.value));
                }}
              />
            </label>
            <label>
              Kolik je v domácnosti dětí 15 - 26 let (nezaopatřených)
              <input
                type="number"
                name="pocet26Deti"
                min={0}
                value={pocet26Deti}
                onChange={(event) => {
                  setPocet26Deti(Number(event.target.value));
                }}
              />
            </label>
          </div>
        ) : (
          <div className="form-costs__in">
            <label>
              Kolik dalších osob ze společné domácnosti bude o hypotéku žádat
              <input
                type="number"
                name="pocetOsob"
                min={0}
                value={pocetOsob}
                disabled={true}
                onChange={(event) => {
                  setPocetOsob(Number(event.target.value));
                }}
              />
            </label>
            <label>
              Kolik je v domácnosti dětí do 6 let
              <input
                type="number"
                name="pocet6Deti"
                min={0}
                value={pocet6Deti}
                disabled={true}
                onChange={(event) => {
                  setPocet6Deti(Number(event.target.value));
                }}
              />
            </label>
            <label>
              Kolik je v domácnosti dětí od 6 do 15 let
              <input
                type="number"
                name="pocet15Deti"
                min={0}
                value={pocet15Deti}
                disabled={true}
                onChange={(event) => {
                  setPocet15Deti(Number(event.target.value));
                }}
              />
            </label>
            <label>
              Kolik je v domácnosti dětí 15 - 26 let (nezaopatřených)
              <input
                type="number"
                name="pocet26Deti"
                min={0}
                value={pocet26Deti}
                disabled={true}
                onChange={(event) => {
                  setPocet26Deti(Number(event.target.value));
                }}
              />
            </label>
          </div>
        )}
      </div>
      <div className="form-costs__container-minimum">
        <p>
          <strong>Celkové životní minimum je</strong>
        </p>
        <p className="form-costs__minimum">{`${livingMinimum} Kč`}</p>
      </div>
      <p>
        Žádáš s manželkou/manželem, partnerkou/partnerem - příjmy sečti, výdaje
        také
      </p>
      <div className="form-costs">
        <label>
          Součet průměrných <strong>příjmů</strong> žadatelů
          <input
            type="number"
            min={0}
            value={incomInput}
            onChange={(event) => {
              setIncomInput(Number(event.target.value));
            }}
          />
        </label>
        <label>
          Součet pravidelných <strong>výdajů</strong> žadatelů
          <input
            type="number"
            min={0}
            value={costInput}
            onChange={(event) => {
              setCostInput(Number(event.target.value));
            }}
          />
        </label>
      </div>
      <div className="form-costs__container-minimum">
        <strong>Výše splátky nové hypotéky může být</strong>
        <p className="form-costs__minimum">{`${restForMortgage} Kč`}</p>
      </div>
    </>
  );
};
