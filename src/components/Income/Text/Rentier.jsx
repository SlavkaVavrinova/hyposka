import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Rentier = (props) => {
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
      <p>Tady tě pošlu hned do banky, protože to asi nebude úplně jednoduché</p>
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
        <Link to="/hypoteka">
          <button className="button--back ">Zpět</button>
        </Link>
        <Link to="/vydaje">
          <button className="button--forward">Pokračovat</button>
        </Link>
      </div>
    </>
  );
};
