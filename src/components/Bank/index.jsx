import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

import cr from './../Home/img/cr.svg';
import quiz from './../Home/img/quiz.svg';
import bonus from './../Home/img/bonus.svg';

import printer from './../Print/img/printer.svg';

export const Bank = () => {
  return (
    <>
      <main>
        <h1>Banka nebo finanční poradce</h1>
        <p> Blížíme se do finále.</p>
        <p>
          Teď už víš, co vzít s sebou. A kam teď vlastně jít? Můžeš jít do banky
          nebo za finančním poradcem.
        </p>
        <h2>Jak vybrat finančního poradce</h2>
        <p>
          Ideálně někdo, na koho máš<strong> doporučení.</strong>
        </p>
        <p>
          Dobrý poradce na hypotéku to většinou
          <strong>
            {' '}
            dělá dlouho, protože hypotéka je nejkomplikovanější produkt, co
            banky poskytují.{' '}
          </strong>
          Je nepravděpodobné, že někdo po 3 měsících rozumí hypotékám všech
          bank. Dá se ale i narazit na <em>"čerstvého" </em>poradce, který
          zařizuje sazbu a dál se nechá vést a poradit si bankou, i v tomto
          případě může vše dopadnout dobře.
        </p>
        <p>
          Zároveň pozor na{' '}
          <strong>
            poradce, který pracuje pod dceřinou společností určité banky.{' '}
          </strong>
          Tito poradci mohou být motivováni sjednávat hypotéky právě u ní.
          Vlastně ale ani to nemusí být špatně, když ti ta banka nabídne
          <em>"pecka"</em> podmínky.
        </p>
        <h3>Provize</h3>
        <p>
          Poradce má možnost sjednat hypotéku kdekoli, jak tvrdí. Nicméně banky
          mají <strong>nastaven provizní systém různě</strong> a poradce tak
          může preferovat jednu banku před druhou. Pohlídej si ho.
        </p>
        <p>
          Zajímá tě <strong>výše provize za tvou hypotéku</strong>? Zeptej se na
          ni, poradce ti to musí sdělit. Je ti tato otázka nepříjemná? Počkej
          si, výši najdeš <strong>ve smlouvě o hypotéce</strong>.
        </p>
        <h3>Výhody a nevýhody finančního poradce</h3>
        <ul>
          <li>Zařídí část věcí za tebe a mohl by pomoci ušetřit nějaký čas</li>
          <li>
            Naopak se ale můžeš setkat s poradcem, který tomu moc nerozumí či
            nestíhá a celý proces zdrží. Bohužel to se nemusíš ani dozvědět,
            protože jednáš jen s ním a on to vždy hodí na banku, že to ještě
            nemají.{' '}
          </li>
        </ul>
        <h3>
          <strong>
            Tenký led 🡪 je úrok nižší s nebo bez finančního poradce
          </strong>
        </h3>
        <p>
          <strong>Neznám odpověď</strong>. Když půjdeš do banky, tak ti budou
          tvrdit, pro tebe jako našeho VIP klienta máme nejlepší nabídku, nikam
          jinam nechoď.{' '}
        </p>
        <p>
          Naopak finanční poradce bude tvrdit to „jen já ti seženu tu nejlepší
          hypotéku, protože mám v bance předjednanou slevu, kterou ti nikde
          jinde nedají“.
        </p>
        <p>
          A co je z toho pravda? <strong>To musíš zjistit.</strong> Hypotéka má
          úrokovou sazbu, která se mění. Když ti někdo dá nabídku, tak jeden
          měsíc vyjde lépe jedna banka a druhý jiná.
        </p>
        <p>
          Potřebuješ půjčit 80 % z kupní ceny, vyjde ti nejlépe jedna banka.
          Soused Béďa taky něco kupuje a potřebuje půlku toho, co si půjčuješ
          ty, vyjde mu nejlépe úplně jiná banka.
        </p>{' '}
        <p>
          A ta sazba pro finančního poradce. Pokud je dobrý a hypoték zpracovává
          hodně, tak může být navázán na nějakou banku, kde mu budou chtít vyjít
          vstříc. Na druhou stranu si ale řekněme, že banka bude poradci z té
          hypotéky vyplácet provizi. Nejde tedy říci, jestli je pravda to nebo
          to. Co ale pravda je, když jedna banka{' '}
          <strong>
            nestandardně vyčnívá s nejnižším úrokem, tak je dobré si to prověřit
            ze všech stran
          </strong>
          . Banky tvoří sazby dle ČNB a konkurence. Úroky se proto pohybují na
          nějaké úrovni. Když něco vyčnívá, tak to nemusí být kvůli tomu, že to
          je hodná banka, ale spíš ta, která nemusí hrát čistě.
        </p>
        <p>
          <strong>Tip:</strong> Finanční poradce bude v úvodu potřebovat vyplnit
          žádost, že pro tebe bude hypotéku vyřizovat. To je v pořádku. Co už
          ale
          <strong>
            {' '}
            v pořádku není, pokud bude chtít vyplnit žádostí víc, aby mohl
            obejít více bank
          </strong>
          . Toto většinou končí tím, že hypotéku zadají různé banky, někdo ji
          může žádost rovnou zamítnout, protože uvidí ostatní žádosti. Může se i
          stát, že se hypotéka celá zpracuje a u konce se nahlédne do bankovního
          registru znovu a po zpracování se hypotéka zamítne. Samozřejmě když se
          o hypotéku žádá ve 2 bankách a nakonec se jedna vybere, tak to problém
          být nemusí. Bude ale administrativa navíc, protože mohou chtít doložit
          potvrzení, že nebude poskytnuta i ta druhá hypotéka.
        </p>
        <p>
          <strong>Zpozorni, když poradce žádost neumí vypsat</strong>. Když
          vytáhne prázdnou žádost, doplní tam jen jméno. V bance si to doplní.
          Toto je přesně ten poradce <em>"zdržovatel"</em>, kterého
          nepotřebuješ.
        </p>
        <h2>Nabídky hypoték</h2>
        <p>
          V nabídkách hypotečních úvěrů doporučuji
          <strong> řešit mimo úrokové sazby i vše ostatní</strong>. Máš nabídku
          super úroku, ale v podmínkách to má účet, pojištění nebo něco jiného.
          <strong> Zjisti si, co to přesně znamená.</strong> Že tam je{' '}
          <strong> povinnost účtu a zasílání výplaty</strong>. To ti asi vadit
          nebude, protože je to pro tebe lepší. Jasně můžeš si trvalým příkazem
          posílat peníze z jiného účtu, ale kdyby na tom účtu chybělo 10 Kč, tak
          ten příkaz neodejde a tím neodejde celá splátka. Když jde mzda na účet
          přímo tam, odkud odchází hypotéka, tak se zaplatí celá hypotéka bez
          10Kč. Penále z 10Kč budou méně než z celé splátky. Co když není
          podmínka jen účet, ale nějaká <strong>investice</strong> někam nebo
          pravidelné <strong>platby úvěrovou kartou</strong> atd. To někomu
          vadit nemusí, ale někomu to vadit bude, když to bude muset dělat třeba
          5 let.
        </p>
        <p>
          Zvláštní pozornost patří <strong>pojištění</strong>. Když má smysl,
          tak pojištění hypotéky stejně bude nastaveno, takže žádný problém ne?
          Když to pojištění v jedné bance vyjde na 1000 Kč a to stejné v druhé
          bance na 2000, tak už to problém být začíná. Sleva desetinka v úroku
          najednou bude mnohem méně, než navýšení o litr. Pojištění porovnávej.
        </p>
        <div className="link-in-text">
          <p>Více informací najdeš v části </p>
          <p>
            <a href="/bonusy" target="_blank">
              <strong>BONUSY</strong>
            </a>
          </p>
        </div>
        <p>
          A má rada na závěr. <strong>Chceš úplnou jistotu?</strong> Nech si od
          banky vyjet splátkový plán - dokument spolu s nabídkou, kde budou ty
          platby za pojištění atd. V něm najdeš, kolik ti bude každý měsíc
          odcházet a hlavně, kolik tam bude k doplacení, až uběhne celá fixace.
          Někdo může použít nějakou upravenou formu výpočtu a ač to je o málo,
          tak za 5 let uvidíš veliký rozdíl. To, že budeš platit méně a po
          fixaci tam bude víc než u druhé banky není dobré. Polož si splátkové
          plány vybraných bank vedle sebe a vše schované tam uvidíš. To v
          nabídce nenajdeš.
        </p>
        <p>
          Splátkový plán z banky můžeš porovnat s kalkulačkou, kterou jsi viděl
          v předchozím kroku u výdajů.
        </p>
        <div className="link-in-text">
          <p>Ve spodní části </p>
          <p>
            <a href="/vydaje" target="_blank">
              <strong> HYPOŠKALKULAČKY</strong>
            </a>
          </p>
        </div>
        <p>
          Rovněž zbystři, když se na začátku něco{' '}
          <strong>spoří a až následně se vloží do hypotéky </strong>. To
          znamená, že se úrok bude platit z celé výše tak dlouho než dojde k
          naspoření. Nižší úroková sazba se v tomto případě může prodražit.{' '}
          <strong>Všechno najdeš ve splátkovém plánu</strong>.
        </p>
        <p className="important-text">
          Vítám tě v cíli hlavní části Appky Hypošky!
        </p>
        <p>
          <span className="important-text">Co teď: </span>Vytiskni závěrečný
          souhrn, který sis naklikal. Nepotřebuješ ho? Appku ukonči, projdi ji
          znovu nebo mrkni dolů, co tu pro tebe ještě máme.
        </p>
        <div className="buttons-row">
          <div className="buttons-row__buttons">
            <Link to="/vydaje">
              <button className="button--back ">Zpět</button>
            </Link>
            <Link to="/">
              <button className="button--forward">Ukončit</button>
            </Link>
          </div>
        </div>
        <p className="important-text">Chci vytisknout závěrečný souhrn</p>
        <Link to="/print">
          <button className="button--print">
            {' '}
            <img src={printer} alt="Tiskárna" />
          </button>
        </Link>
        <p>Hlavní část APPKY máš za sebou, kam dál:</p>
        <div className="home-container">
          <div className="home-container__card ">
            <h2>Kvíz</h2>
            <div className="home-container__card-in">
              <img src={quiz} alt="Kvíz" />
              <p>Ověř své teoretické znalosti zpracování hypotéky.</p>
            </div>
            <Link to="/kviz">
              <button className="button--small">vstoupit</button>
            </Link>
          </div>

          <div className="home-container__card ">
            <h2>Kde to umí</h2>
            <div className="home-container__card-in">
              <img src={cr} alt="Mapa České Republiky" />
              <p>Zadej referenci na bankéře či poradce nebo ho najdi.</p>
            </div>
            <Link to="/mapa">
              <button className="button--small">vstoupit</button>
            </Link>
          </div>

          <div className="home-container__card">
            <h2>Bonusy</h2>
            <div className="home-container__card-in">
              <img src={bonus} alt="Dárek" />
              <p>Fáze jednání, pojištění, čerpání, důvěřuj ale prověřuj.</p>
            </div>
            <Link to="/bonus">
              <button className="button--small">vstoupit</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
