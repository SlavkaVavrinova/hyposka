import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Entrepreneur = (props) => {
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
        Doporučuji hned na první schůzku přibalit daňové přiznání minimálně za
        poslední rok, ideálně 2. Jako podnikatel máš možnost využít paušální
        výdaje, různé odpočty a může se stát, že se tam hypotéka nebude chtít
        úplně vejít. U podnikání je někdy lepší začít právě kalkulací příjmu,
        kdyby bylo nutné hledat banku, která tyto optimalizace zohledňuje. Taky
        doporučím navštívit svou banku. Je možné, že má připraven dárek v podobě
        nějakých limitů, které je schopná poskytnout bez doložení přiznání na
        základě pohybů na účtu.
      </p>

      <div className="row-print">
        <label className="checkbox">
          {' '}
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
