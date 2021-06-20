import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TextBuyWithReconstruction = (props) => {
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
      <p>
        Naskytla se příležitost koupit dům za <strong>hodně nízkou cenu</strong>
        ? Na to většinou pozor. Než se do něčeho takového pustíš, určitě čti
        dál.
      </p>
      <p>
        Doporučuji si to opravdu hodně rozmyslet a
        <strong> důkladně si vše zjisti.</strong> Nemyslím tím postup mého
        vyřízení, ale kolik přesně bude potřeba peněz. Každá nízká cena většinou
        znamená velikou a o to dražší rekonstrukci.
      </p>
      <p>
        V hypotéce si banka vždy hlídá hodnotu a stav domu v zástavě. Může to
        pak vypadat, že je zlá a prudí. Problém vznikne, když na začátku
        nahlásíš malou rekonstrukci a pak se do domečku sáhne a zjistí se:
      </p>
      <ul>
        <li>
          Je potřeba vyměnit i stropy - spadnou na hlavu - trámy sežral
          červotoč.
        </li>
        <li>
          Neměla se dělat koupelna - někde ve zdi zásadní problém - půl koupelny
          rozbouráno
        </li>
      </ul>
      <p>
        Banka zašle první peníze na opravu, ale pak se zjistí, že místo opravy
        se spíše bouralo a opravovalo, co se opravovat nemělo. To je samozřejmě
        správně, ale až se bude posuzovat hodnota rozestavěné stavby, tak místo
        navýšení hodnoty o první část rekonstrukce, dojde k snížení.
      </p>
      <p>
        <strong>
          Místo navýšení hodnoty o první část rekonstrukce, dojde k snížení
          celkové současné hodnoty.{' '}
        </strong>
        Dům bez stropu a s rozbouranou koupelnou má menší hodnotu než původní
        plán, výměna podlah a kohoutků v koupelně. To byl jen příklad, u
        rekonstrukce domu, který neznáme a může se vyvrbit kde co.
      </p>
      <p>
        Určitě doporučuji se do toho pouštět s
        <strong> rezervou v penězích</strong>. Nebo když je možnost dát bance
        <strong> do zástavy něco jiného</strong>. Ne auto, ale jiný dům, byt,
        chatu. Tam banka peníze pošle a dál v tom už nešťourá. Ale to nic nemění
        na tom, že ta rekonstrukce bude stát víc a bydlet v domě bez stropů a
        koupelny není ideální.
      </p>
      <p>
        Zdá se, že toto by měl pohlídat <strong>odhadce</strong>. To ale není
        pravda. Ten posuzuje rozpočet a zadá ho do odhadu. Není to ale technik,
        který ručí za to, že není potřeba nic dalšího. Samozřejmě v odhadu
        posuzuje, jestli je rozpočet a stav nemovitosti úplně mimo, ale rozdíl
        tam může u staré nemovitosti vzniknout velice snadno.
      </p>
      <p>
        <strong>Kdo s tím tedy může pomoci?</strong> Stavební firma a doporučuji
        promyslet i nějaký nezávislý stavební dozor. Nezávislý, jako ten co ti
        ho nedoporučí ta stavební firma. A taky není špatné, když nejsou ze
        stejného místa. Firmy v oboru se dost často znají. A i tak pak při
        stavbě je dobré hlídat, aby se spolu nezačali domlouvat.
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
