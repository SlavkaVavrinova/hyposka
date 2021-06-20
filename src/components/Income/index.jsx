import React from 'react';
import { Card } from '../Card/index';

import { Employee } from './Text/Employee';
import { Entrepreneur } from './Text/Entrepreneur';
import { Rent } from './Text/Rent';
import { Revenue } from './Text/Revenue';
import { Rentier } from './Text/Rentier';

import oznameni from './img/oznameni.jpeg';
import pasky from './img/pasky.jpeg';
import najem from './img/najem.jpeg';
import relax from './img/pohoda.jpeg';
import priznani from './img/priznani.jpeg';

export const Income = (props) => {
  return (
    <>
      <main>
        <p>V dalším kroku projdeme, co bude banka chtít asi od tebe. </p>
        <p>
          Na schůzku si vezmi minimálně
          <strong> občanku a lépe ještě nějaký druhý doklad</strong>. Samozřejmě
          to bude potřeba až u žádosti o hypotéku, ne u informativní schůzky do
          budoucna.
        </p>
        <p>
          Míříš do své banky? I tam se hodí. Mohou si tě najít v systému, to bez
          občanky nesmí.
        </p>
        <p>
          Dál se dozvíš, co si můžeš vzít s sebou pro urychlení, abys už po
          první schůzce věděl/a, zda hypotéka vychází. Určitě to ale neznamená,
          že musíš hned u dveří sdělovat průměrný příjem
        </p>
        <p>Vyber, kdo jsi, odkud tečou tvé příjmy:</p>
        <Card
          photo={pasky}
          alt="Výplatní páska"
          title="Zaměstnanec "
          text="Příjem mi vyplácí zaměstnavatel."
        >
          <Employee
            addToPrint={props.addToPrint}
            checkedToPrint={props.listToPrint}
            printName="Employee"
          />
        </Card>

        <Card
          photo={priznani}
          alt="Daňové přiznání"
          title="Podnikatel"
          text="Podnikám, příjem mám od zákazníků a na konci roku si zpracovávám daňové přiznání."
        >
          <Entrepreneur
            addToPrint={props.addToPrint}
            checkedToPrint={props.listToPrint}
            printName="Entrepreneur"
          />
        </Card>

        <Card
          photo={najem}
          alt="Nájemní smlouva"
          title="Z pronájmu"
          text="Příjem mám z pronájmu bytu, domu atd. Na konci roku ho uvádím v daňovém přiznání."
        >
          <Rent
            addToPrint={props.addToPrint}
            checkedToPrint={props.listToPrint}
            printName="Rent"
          />
        </Card>

        <Card
          photo={oznameni}
          alt="Výměr dávky / důchodu"
          title="Jsem na mateřské / v důchodu"
          text="Příjem mi posílá Okresní správa sociálního zabezpečení nebo pracovní úřad."
        >
          <Revenue
            addToPrint={props.addToPrint}
            checkedToPrint={props.listToPrint}
            printName="Revenue"
          />
        </Card>

        <Card
          photo={relax}
          alt="Pohoda"
          title="Rentiér "
          text="Šťastlivec, který pobírá nějakou rentu "
        >
          <Rentier
            addToPrint={props.addToPrint}
            checkedToPrint={props.listToPrint}
            printName="Rentier"
          />
        </Card>
      </main>
    </>
  );
};
