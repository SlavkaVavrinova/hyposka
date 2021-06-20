import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const TextBuild = (props) => {
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
      <p> Banku bude zajímat nejvíce co a za kolik se bude stavět. </p>
      <p>
        <strong>Co:</strong>
      </p>
      <p>
        Máš domeček zatím pouze v plánu a chceš si zjistit, kolik ti banka na
        výstavbu půjčí. Tuto část můžeš přeskočit.
        <div className="link-in-text">
          <p>Vrhni se rovnou dále:</p>
          <p>
            <Link to="/prijem">2. Příjem</Link>
          </p>
        </div>
      </p>
      <p>Naopak víš, co chceš postavit? </p>
      <p>
        Připrav si <strong>projektovou dokumentaci</strong>. Jsi v začátku a
        nemáš ji? Nevadí, připrav si{' '}
        <strong>obrázek v katalogu s cenou </strong>
        nebo jen rozpočet. Ten nemusí být finální, ale měl bys mít přestavu,
        kolik bude dům stát.
      </p>
      <p>
        <strong>Rozpočet – nejzásadnější dokument u výstavby</strong>. Banka ti
        poskytne většinou vzor k vyplnění, ale já doporučuji si nad to sednout,
        již před návštěvou banky a hrubě si vše sepsat. Nejlepší je odborně
        vypracovaný rozpočet už stavební firmou (ideálně na referenci, aby se
        pak nenavyšoval).
      </p>
      <p>
        <strong>Plánuješ stavět svépomocí?</strong> O to víc se nad rozpočtem
        zamysli. Často používaný postup, dojít do banky kolik mi půjčí a za to
        to muset postavit, není správný. Informaci o rozpočtu najdeš i v
        projektu. Většinou jde jen o souhrnnou informaci. Je lepší si nechat
        vypracovat rozpočet detailní. Věř mi, i když se budeš rozpočtu věnovat
        na maximum, tak se do něj většinou nevejdeš. Je důležité, aby to ale
        nebylo o moc.
      </p>
      <p>
        Chceš půjčit polovinu a bance nic není do toho za kolik to postavíš
        celkem? To není bohužel pravda. Banka bude chtít jistotu, že stavba bude
        dokončena. Bohužel se stává, že někdo má plán, jak postaví za levno a
        pak se dostane do situace, že na dostavbu peníze chybí. Když se jedná o
        finální práce, tak to zásadní problém být nemusí a časem se vše dodělá.
        Když ale dojdou peníze v půlce, tak to může být neřešitelný problém.
        Připrav si proto informaci, jak dofinancuješ celý rozpočet:
      </p>
      <ul>
        <li>Peníze na účtu</li>
        <li>Končící investice za nějaký čas</li>
        <li>Prodej současného bydlení atd.</li>
      </ul>
      <p>
        <strong>TIP:</strong> Výstavba je možná pouze na pozemku určeném ke
        stavění. Toto zjistíš v územním plánu nebo se zastav na obci/městě a oni
        ti dají potvrzení.
      </p>
      <p>
        <strong>TIP:</strong> Budeš stavět na pozemku, který je jiné osoby než
        stavba. Toto není standardní situace, banka ti sdělí přesné informace.
        Že je jasné, že nebudeš stavět na cizím? Sem spadají i varianty, kdy
        pozemek je pouze ve tvém vlastnictví a dům stavíš s
        druhem/družkou/manželem/manželkou. I tady majitelé nejsou stejní. Je
        možné pozemek přepsat na oba stavebníky nebo to musíte ošetřit smluvně,
        protože jinak katastrální úřad stavbu nezapíše.
      </p>
      <p>
        <strong>TIP:</strong> Informuj se v bance na to, jak bude uvolňovat
        peníze. Hypotéka je do procentní hodnoty toho, co dáváš bance do
        zástavy. Hotovost banka může uvolňovat na části, dle toho, jak se zvedá
        hodnota rozestavěné stavby. Banky mají čerpání řešeno různě, mohou v
        době výstavby umožnit zaslání větších částek. Stavba na vlastním pozemku
        nebude problém, např. 7o% hodnoty pozemku bude na část stavby stačit. Co
        když na tom pozemku máš hypotéku na jeho koupi. V tomto případě už
        uvolnění hotovosti je komplikovanější. Najdi vhodnou banku, která nabízí
        benefit a umožní na nějakou dobu 70% <em>"přestřelit"</em>.
      </p>
      <p>
        <strong>TIP:</strong> Důležitá je podmínka finálního uvolnění poslední
        hotovosti. Banka může vyžadovat doložení kolaudace, prože poslední
        peníze má určeny na dodělávky. Kolaudace se může protáhnout a hypotéka
        bude dlouho nevyplacená. Co to znamená? Úroky navíc.
      </p>
      <p>
        <strong>Tip:</strong> Rozložení čerpání znamená více úroku. Někomu to
        ale může vyhovovat, protože 1. velká splátka začne odcházet až následně.
        Za celou dobu nižší splátky se hotovost může vkládat do stavby.
      </p>
      <p>
        <strong>Tip:</strong> Většina bank nabízí možnost nějakou část hypotéky
        nevyčerpat. Pokud je dostatečná zástavní hodnota, tak doporučuji
        promyslet, jestli rezervu nenastavit a pak ji nedočerpat. Je ale
        pravdou, že náklady na stavbu se většinou navyšují a nedočerpání se moc
        často nepodaří. Je ale určitě levnější než hypotéku nedočerpat.
      </p>
      <p>
        Závěrem informativní shrnutí. Kdy u hypotéky odchází první splátka?
        Záleží na době než se uvolní celá hotovost. První splátka odejde
        většinou měsíc po uvolnění poslední <em>"koruny"</em> z hypotéky.
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
