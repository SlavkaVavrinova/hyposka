import React from 'react';
import './style.css';

import { TextImg } from './TextImg';
import { Theory } from './Text/theory';
import { Insurance } from './Text/insurance';
import { Card } from '../Card/index';
import { Check } from './Text/check';

import book from './img/book.svg';
import insurance from './img/insurance.svg';
import check from './img/check.svg';

import bank from './img/bank.svg';
import paper from './img/paper.svg';
import pen from './img/pen.svg';
import lock from './img/lock.svg';
import globe from './img/globe.svg';
import party from './img/party.svg';
import cross from './img/cross.svg';

export const Bonus = () => {
  return (
    <>
      <main>
        <h1>Bonusy</h1>
        <h2>Fáze zpracování hypotéky</h2>
        <div className="container-bonus">
          <TextImg
            photo={bank}
            alt="Banka"
            title="1. Banka"
            text="Startujeme, vytiskni si podklady co jsou tu připravné a vyraž do banky. Tam dostaneš další informace."
            cross={cross}
            crossAlt="Křížek"
          />
          <TextImg
            photo={paper}
            alt="Papír"
            title="2. Papírování"
            text="Vše co ses tu dozvěděl a co přihodila banka musíš sehnat a donést zpět do banky. Banka ti dle toho schválí hypoteční úvěr."
            cross={cross}
            crossAlt="Křížek"
          />
          <TextImg
            photo={pen}
            alt="Propiska"
            title="3. Podpisy"
            text="V bance budeš zavalen/a podpisy. Začíná to smlouvou o hypotéce, rovnou dostaneš i zástavní smlouvu pro kupujícího (tu podepisuješ ty i on). Utíkáš za prodávajícím, podepíšete kupní smlouvu, ty zástavní smlouvy a utíkáš se zástavní smlouvou na katastrální úřad."
            cross={cross}
            crossAlt="Křížek"
          />
          <TextImg
            photo={lock}
            alt="Zámek"
            title="4. Úschova"
            text="Zpět do banky se přinese návrh na vklad té zástavní smlouvy [to je často s poplatkem, ale může se čekat bez poplatku než to projde katastrem (14 dní se čeká a pak má katastr měsíc na zpracování). Banka pošle peníze do  úschovy."
            cross={cross}
            crossAlt="Křížek"
          />
          <TextImg
            photo={globe}
            alt="Globus"
            title="5. Katastr"
            text=" Advokát odnese kupní smlouvu na katastrální úřad a dle podmínek vyplatí peníze z úschovy prodávajícímu - tam už se většinou čeká na to, až kupní smlouvu katastr zapíše. Zase 14 dní + měsíc, ale lhůta není závazná. Může to trvat i déle, ale někde to umí hned po těch 14 dnech :-)"
            cross={cross}
            crossAlt="Křížek"
          />
          <TextImg
            photo={party}
            alt="Párty"
            title="6. Kolaudačka"
            text="To nejdůležitější, sezvat kamarády, rodinu a řádně to zapít. Jen pozor, aby nebyla potřeba další rekonstrukce. Nezapomeň, dům je v zástavě, nesmí se ničit."
            cross={cross}
            crossAlt="Křížek"
          />
        </div>

        <p>
          Tento proces je doporučený. <strong>Dá se postupovat i jinak</strong>.
          <strong>
            {' '}
            Můžete si kupní smlouvu <em>Vygooglit</em>
          </strong>{' '}
          a peníze si předat u podpisu. Dokonce je i velká šance, že to
          katastrem projde. On zastaví chybnou identifikaci nemovitosti. Nic
          dalšího v kupní smlouvě ho nezajímá.
          <p>
            <strong>
              To, že kupní smlouva projde katastrem neznamená, že je v pořádku.
            </strong>{' '}
            Může jí následně kdokoli napadnout. Nekupuješ ale rohlíky, kdyby
            byla kupní smlouva špatně, tak by ti prodávající měl peníze vrátit,
            ale udělá to?{' '}
            <strong>
              Jsi ochoten risknout, že o všechny peníze na koupi můžeš přijít?
            </strong>
          </p>
          <p></p> Právník není levný, ale kdyby to nedopadlo dobře, tak suma
          vynaložená za právníka je nesrovnatelná s tou, o kterou můžeš přijít.{' '}
        </p>

        <div className="card-bonus">
          <Card
            photo={book}
            alt="Kniha"
            title="Teorie"
            text="Základní informace k hypotečním úvěrům."
          >
            <Theory />
          </Card>
          <Card
            photo={insurance}
            alt="Pojištění"
            title="Pojištění "
            text="S hypotékou souvisí pojištění a zde najdeš informace."
          >
            <Insurance />
          </Card>
          <Card
            photo={check}
            alt="lupa"
            title="Důvěřuj, ale prověřuj "
            text="Rady, co vše můžeš před realizací hypotéky zkontrolovat."
          >
            <Check />
          </Card>
        </div>
      </main>
    </>
  );
};
