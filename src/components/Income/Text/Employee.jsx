import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Employee = (props) => {
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
        Ideální je, když máš již smlouvu na dobu neurčitou. V současnosti je
        pravděpodobné, že můžeš mít i smlouvu na dobu určitou. Je možné, že
        nějaká banka s tím bude mít problém, ale některým to vadit nemusí. To už
        se domluvíš tam. Je dobré na to ale myslet, aby se to neobjevilo až
        následně v potvrzení o příjmu a hypotéku to nezastavilo. Je lepší změnu
        banky řešit hned na začátku. Dále doporučuji hlásit rovnou i dohody o
        provedení práce nebo dohodu o pracovní činnosti.
      </p>
      <h3>Zaměstnán a výplata ti chodí na účet do banky, do které jdeš.</h3>
      <p>
        Na první schůzku si nic k příjmu brát nemusíš, najdou si tam vše, co
        bude potřeba. To ale neznamená, že si pak neřeknou o něco dalšího.
      </p>
      <h3>
        Zaměstnán a výplata ti chodí na účet do jiné banky, než kam se jdeš
        podívat.
      </h3>
      <p>
        Připrav si alespoň orientační výši příjmu nebo si vezmi s sebou výpis z
        účtu, kde je průměrná mzda vidět. Prosím ne ten, kde jsou nějaké
        nestandardní odměny, aby to „vypadalo lépe“. Banka bude pravděpodobně
        chtít potvrdit své potvrzení o příjmu a tam se objeví průměr např. za 3
        měsíce nebo rok.
      </p>
      <h3>Zaměstnán a příjem chodí v hotovosti</h3>
      <p>
        Vezmi výplatní pásku s nějakou průměrnou mzdou. U této varianty se
        připrav na větší následné papírování, protože to není úplně běžné.
        Některé banky s tím mohou mít i větší problém.
      </p>
      <p>
        <strong>TIP: </strong> Zaměstnán ve firmě, která je tvá nebo někoho z
        rodiny. Vezmi s sebou na schůzku i daňové přiznání a výkazy té
        společnosti, pokud je to možné. Ušetříš si tím jednu cestu.
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
