import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

import ReactToPrint from 'react-to-print';
import logoPrint from './img/logoPrint.svg';
import './style.css';

import printer from './img/printer.svg';

export const Print = (props) => {
  const componentRef = useRef();
  return (
    <>
      <div className="margin"></div>

      <ReactToPrint
        trigger={() => (
          <button className="button--print">
            {' '}
            <img src={printer} alt="Tiskárna" />
          </button>
        )}
        content={() => componentRef.current}
      />

      <main className="print-black" ref={componentRef}>
        <div className="print-black__container-pdf">
          <img
            className="print-black__logo"
            src={logoPrint}
            alt="Logo Appka Hypoška"
          />
          <h1 className="print-black__h1">Tisk z Appky Hypošky</h1>
        </div>

        {props.listToPrint['TextBuyHouse'] && (
          <>
            <h3 className="print-black">Doklady koupě domu:</h3>
            <ul>
              <li>Kupní smlouva nebo</li>
              <li>Smlouva o smlouvě budoucí nebo</li>
              <li>Rezervační smlouva smlouva nebo</li>
              <li>Kupní smlouva nebo</li>
              <li>Inzerát, kde s cenou a údaji</li>
              <li>Elektronický výpis z katastru</li>
              <li>Smlouvy od případných věcných břemen/úvěrů</li>
            </ul>
          </>
        )}

        {props.listToPrint['TextBuyLand'] && (
          <>
            <h3 className="print-black">Doklady koupě pozemku:</h3>
            <ul>
              <li>Kupní smlouva nebo</li>
              <li>Smlouva o smlouvě budoucí nebo</li>
              <li>Rezervační smlouva smlouva nebo</li>
              <li>Kupní smlouva nebo</li>
              <li>Inzerát, kde s cenou a údaji</li>
              <li>Elektronický výpis z katastru</li>
              <li>Smlouvy od případných věcných břemen / úvěrů</li>
              <li>Potvrzení, že pozemek je stavební</li>
            </ul>
          </>
        )}

        {props.listToPrint['TextBuyFlat'] && (
          <>
            <h3 className="print-black">Doklady koupě bytu:</h3>
            <ul>
              <li>Kupní smlouva nebo</li>
              <li>Smlouva o smlouvě budoucí nebo</li>
              <li>Rezervační smlouva smlouva nebo</li>
              <li>Kupní smlouva nebo</li>
              <li>Inzerát, kde s cenou a údaji</li>
              <li>Elektronický výpis z katastru</li>
              <li>Smlouvy od případných věcných břemen / úvěrů</li>
            </ul>
          </>
        )}

        {props.listToPrint['TextBuyCottage'] && (
          <>
            <h3 className="print-black">Doklady koupě chaty:</h3>
            <ul>
              <li>Kupní smlouva nebo</li>
              <li>Smlouva o smlouvě budoucí nebo</li>
              <li>Rezervační smlouva smlouva nebo</li>
              <li>Kupní smlouva nebo</li>
              <li>Inzerát, kde s cenou a údaji</li>
              <li>Elektronický výpis z katastru</li>
              <li>Smlouvy od případných věcných břemen / úvěrů</li>
              <li>Zkontroluj přístupovou cestu</li>
            </ul>
          </>
        )}

        {props.listToPrint['TextBuyPension'] && (
          <>
            <h3 className="print-black">Doklady koupě objektu na podnikání:</h3>
            <ul>
              <li>
                Uvedenou nemovitost není možné koupit hypotéku, zaběhni do banky
                pro více informací.
              </li>
            </ul>
          </>
        )}

        {props.listToPrint['TextRefinancing'] && (
          <>
            <h3 className="print-black">Doklady refinancování hypotéky:</h3>
            <ul>
              <li>smlouvu běžící hypotéky</li>
              <li>
                Vyčíslení nebo pro začátek jen dokument se stavem hypotéky
                (např. výpis)
              </li>
            </ul>
          </>
        )}

        {props.listToPrint['TextBuild'] && (
          <>
            <h3 className="print-black">Doklady výstavba domu:</h3>
            <ul>
              <li>Projektovou dokumentaci nebo</li>
              <li>obrázek v katalogu s cenou nebo</li>
              <li>Pouze rozpočet</li>

              <li>Rozpočet – nejzásadnější dokument u výstavby, promysli ho</li>
              <li>Informaci, jak dofinancuješ celý rozpočet</li>
            </ul>
          </>
        )}

        {props.listToPrint['TextReconstruction'] && (
          <>
            <h3 className="print-black">Doklady rekonstrukce:</h3>
            <ul>
              <li>
                Rozpočet – nejzásadnější dokument u rekonstrukce, promysli ho
              </li>
              <li>Informaci, jak dofinancuješ celý rozpočet</li>
              <li>
                Informaci, zda bude potřeba stavební povolení / ohláška / nic
              </li>
              <li>
                Rekonstruuješ nemovitost v pronájmu, souhlas majielů s
                rekonstrukcí
              </li>
            </ul>
          </>
        )}

        {props.listToPrint['TextBuyWithReconstruction'] && (
          <>
            <h3 className="print-black">Doklady koupě s rekonstrukcí:</h3>
            <ul>
              <li>Kupní smlouva nebo</li>
              <li>Smlouva o smlouvě budoucí nebo</li>
              <li>Rezervační smlouva smlouva nebo</li>
              <li>Kupní smlouva nebo</li>
              <li>Inzerát, kde s cenou a údaji</li>
              <li>Elektronický výpis z katastru</li>
              <li>Smlouvy od případných věcných břemen / úvěrů</li>
              <li>
                Rozpočet – nejzásadnější dokument u rekonstrukce, promysli ho
              </li>
              <li>Informaci, jak dofinancuješ celý rozpočet</li>
              <li>
                Informaci, zda bude potřeba stavební povolení / ohláška / nic
              </li>
            </ul>
          </>
        )}

        {props.listToPrint['Employee'] && (
          <>
            <h3 className="print-black">Doložení příjmu zaměstnanec:</h3>
            <ul>
              <li>Výplata na účet do banky, do které jdeš - občanský průkaz</li>
              <li>Výplata na účet do jiné banky - výpis z účtu</li>
              <li>Příjem v hotovosti - výplatní páska</li>
            </ul>
          </>
        )}

        {props.listToPrint['Entrepreneur'] && (
          <>
            <h3 className="print-black">Doložení příjmu podnikatel:</h3>
            <ul>
              <li>Daňové přiznání minimálně za poslední rok až 2</li>
            </ul>
          </>
        )}

        {props.listToPrint['Rent'] && (
          <>
            <h3 className="print-black">Doložení příjmu z pronájmu:</h3>
            <ul>
              <li>Daňové přiznání</li>
              <li>Nájemní smlouva</li>
            </ul>
          </>
        )}

        {props.listToPrint['Revenue'] && (
          <>
            <h3 className="print-black">Doložení příjmu důchod/mateřská:</h3>
            <ul>
              <li>Oznámení o poskytnutí příspěvku s částkou</li>
            </ul>
          </>
        )}

        {props.listToPrint['Rentier'] && (
          <>
            <h3 className="print-black">Doložení příjmu rentiér:</h3>
            <ul>
              <li>Gratuluji a posílám rovnou do banky</li>
            </ul>
          </>
        )}

        {props.listToPrint['TextCosts'] && (
          <>
            <h3 className="print-black">
              Nezapomenout zahrnout do pravidelných výdajů:
            </h3>
            <ul>
              <li>Splátky úvěrů a půjček</li>
              <li>Leasing</li>
              <li>Nepodepsals někomu ručení?</li>
              <li>Nějaký spotřebič, telefon na splátky</li>
              <li>Alimenty</li>
              <li>Životní minimum</li>
              <li>Nenarozené děti</li>
            </ul>
          </>
        )}
        <div className="buttons-row">
          <div className="buttons-row__buttons">
            <Link to="/banka">
              <button className="button--back ">Zpět</button>
            </Link>
            <Link to="/">
              <button className="button--forward">Ukončit</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
