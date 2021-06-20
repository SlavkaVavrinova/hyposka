import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TextBuyFlat = (props) => {
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
      <p> Vezmi do banky něco, kde je vidět cena bytu:</p>
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
          Fajn je <strong>rezervační smlouva</strong>, ale tu ti dají jen za
          podpis. Podepíšeš 🡪 platíš rezervační poplatek a prostě kupuješ.
        </li>
        <li>
          Takže jak, nemáme nic. Vezmi s sebou alespoň
          <strong> inzerát s cenou a údaji k tomu, co se bude kupovat</strong>.
        </li>
      </ul>
      <p>
        <strong>Tip:</strong> U koupě bytu se vždy zajímej o stav celého
        bytového domu, ne jen o byt. Je zrekonstruovaný nebo je rekonstrukce
        teprve v plánu? Můžeš najít dva stejné byty, se stejným nájmem, ale
        jeden má nižší platbu do bytového fondu. Supr, ten bude lepší. Nemusí to
        tak být. Nastěhuješ se a vlastníci odhlasují navýšení platby na
        dvojnásobek, protože mají díru ve střeše. Oproti tomu druhý byt je v
        domě, kde je vše opraveno a navýšené zálohy jsou jen dočasné. Úvěr se
        brzy doplatí a zálohy se sníží nebo se bude šetřit na něco, co hodnotu
        bytu zvýší.
      </p>
      <h3>Co pro odhadce?</h3>
      <p>
        Některé banky umí zpracovat odhad bez odhadce. Do svých kalkulaček
        zadají údaje s rozměry, které jsou uvedeny ve smlouvě a zjistí zástavní
        hodnotu dle cenové mapy, která je v dané lokalitě nastavena.
      </p>
      <div className="link-in-text">
        <p>
          Vytiskni<strong> elektronický výpis z katastru </strong>
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
        Problematická jsou i věcná břemena, týkající se užívání. Nechceš kupovat
        byt, kde někdo může bydlet s tebou.
      </p>
      <p>
        <strong> Tip:</strong> Kupovaný byt je <strong>družstevní</strong>. Je
        možné koupit hypotékou družstevní byt? Ano, ALE nemůžeš jím ručit.
        Kupuješ si podíl na celém, která není ofiko rozdělená na byty. Z toho
        důvodu by družstvo muselo podepsat zástavu celé <em>“bytovky”</em> a to
        co? Neudělá.
      </p>
      <p>
        Neudělá. Zaplatit ho hypotékou proto můžeš, ale
        <strong> do zástavy musíš dát nějakou jinou nemovitost </strong>
        (druhý byt, chatu, dům extramilujících rodičů atd.) Neudělá.
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
