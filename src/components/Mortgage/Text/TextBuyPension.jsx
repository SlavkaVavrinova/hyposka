import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TextBuyPension = (props) => {
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
        Bohužel nemůžu sloužit, musíš hledat
        <strong> úvěr pro podnikatele</strong>. Banky nabízí takzvanou
        „Americkou hypotéku“ u které se nemusí dokládat na co peníze jsou. Ale
        ani tou není možné zaplatit nemovitost pouze na podnikání.
      </p>
      <p>
        Kupuješ dům pro své bydlení, ale je tam i část pro podnikání. Vyraž do
        banky a tam se informuj na přesné podmínky. Jistě nějaké řešení najdeš,
        ale o <em>"provozovně"</em> se zmiň hned v začátku.
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
