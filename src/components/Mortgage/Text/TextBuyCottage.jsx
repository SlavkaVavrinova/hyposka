import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TextBuyCottage = (props) => {
  const [checked, setChecked] = useState(
    props.checkedToPrint[props.printName] === true,
  );
  const handleChange = (event) => {
    const value = event.target.checked;
    setChecked(value);
    props.addToPrint(props.printName, value);
  };
  return (
    <>
      <p> Vezmi do banky něco, kde je vidět cena, za kterou chatu koupíme:</p>
      <ul>
        <li>
          Ideální je <strong>kupní smlouva</strong>, ale tu dostaneš až za hodně
          dlouho.
        </li>
        <li>
          Alternativa je <strong>smlouva o smlouvě budoucí</strong>. To je skoro
          to stejné a taky se bude dělat většinou později.
        </li>
        <li>
          Fajn je<strong> rezervační smlouva</strong>, ale tu ti dají jen za
          podpis. Podepíšeš 🡪 platíš rezervační poplatek a prostě kupuješ.
        </li>
        <li>
          Takže jak, nemáme nic. Vezmi s sebou alespoň
          <strong>
            {' '}
            inzerát, kde je cena a údaje k tomu, co se bude kupovat
          </strong>
          .
        </li>
      </ul>
      <h3>Co pro odhadce?</h3>
      <div className="link-in-text">
        <p>
          Vytiskni<strong> lektronický výpis z katastru </strong>
        </p>
        <p>
          <a
            href="https://nahlizenidokn.cuzk.cz/"
            target="_blank"
            rel="noreferrer"
          >
            <strong>ZDE</strong>
          </a>
        </p>
      </div>
      <p>
        Hledej v něm překvapení v podobě omezení. Není třeba se lekat, nemusí to
        být exekuce, ale hypotéka původních majitelů. Ta se dá zaplatit, ale
        musí se pohlídat, že bude zaplacena.
      </p>
      <p>
        Problematická jsou i <strong>věcná břemena</strong>, týkající se
        užívání. Nechceš kupovat chatu, kde někdo může bydlet s tebou. Naopak
        věcná břemena pro energetické společnosti, vadit nebudou. V případě
        havárie je jen pustíš ke kabelu či přípojce na tvém pozemku. U každého
        věcného břemene se informuj na smlouvu a co přesně umožňuje.
      </p>
      <p>
        <strong>Tip:</strong> Chatu a pozemek si prohlédni v katastru
        nemovitostí a <strong>hledej přístupovou cestu</strong> k ní. U chat zde
        může vzniknout problém. Nevidíš cestu v katastru, ale reálně funguje
        cesta přes sousedův pozemek. Pozor, ten je stále sousedův. Ústní dohoda
        najednou nemusí platit. Doporučuji se pokusit domluvit na zřízení
        věcného břemene, ale s tím soused souhlasit nemusí. Koupi pořádně
        promysli, banka bude na zřízení břemene pravděpodobně trvat a když
        zřídit nepůjde, tak bude chtít do zástavy něco jiného (dům, byt, jinou
        chatu atd.)
      </p>

      <div className="row-print">
        <label className="checkbox">
          Přidat do tisku:
          <input
            className="print"
            type="checkbox"
            checked={checked}
            onChange={handleChange}
          />
          <span></span>
        </label>
        <Link to="/print">Prohlédnout tisk</Link>
      </div>
      <div className="buttons-row__buttons">
        <Link to="/">
          <button className="button--back ">Domů</button>
        </Link>
        <Link to="/prijem">
          <button className="button--forward">Pokračovat</button>
        </Link>
      </div>
    </>
  );
};
