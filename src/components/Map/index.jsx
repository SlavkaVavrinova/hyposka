import React, { useState } from 'react';
import { FormMap } from './../FormMap/index';
import { MapBox } from './../MapBox/index';

export const Map = () => {
  const [viewPerson, setViewPerson] = useState({});

  return (
    <>
      <main>
        <h1>Mapa poradců</h1>
        <p>
          Neboj, žádné "Vyplňte formulář" a kontaktuje Vás finační poradce tu
          není!
        </p>
        <p>
          Toto je mapa<em> "udělej si sám"</em>. V mapě najdeš pracovníky bank a
          finanční poradce, kteří umí hypotéky a jejich klienti jsou s nimi
          spokojeni. Jak jsme to zjistili? Pod mapou najdeš formulář, který
          můžeš vyplnit i ty. Máš v okolí někoho, o kom víš, že hypotéky
          zpracovává a má spokojené kliety? Nebo ti někdo takový hypotéku
          zařizoval? Budeme velice rádi, když referenci na něj přidáš do naší
          mapy.
        </p>
        <p>Jak to funguje?</p>
        <p>
          Po vyplnění se poradce v mapě neukáže. Nelekej se, údaje se uloží,
          poradce kontaktujeme a s jeho souhlasem zveřejníme.{' '}
        </p>
        <p>
          Z toho plyne, prosím, pouze o pozitivní zkušenost. Jistě se najdou i
          hororové příběhy, ale tady najdeš jen "top" poradce. Chceme se vyhnout
          změně na skládku těch špatných.
        </p>

        <MapBox
          viewPerson={(person) => {
            setViewPerson(person);
          }}
        />

        {viewPerson && (
          <>
            <h2>{viewPerson.name}</h2>
            <p>{viewPerson.select}</p>
            <p>{viewPerson.phone}</p>
            <p>{viewPerson.email}</p>
            <p>{viewPerson.address}</p>
            <p>{viewPerson.town}</p>
            <p>{viewPerson.comment}</p>
          </>
        )}

        <h3>Zadej poradce</h3>
        <p>Jsi spokojen se zpracovatelem hypotéky. Zadej svou zkušenost.</p>
        <FormMap />
      </main>
    </>
  );
};
