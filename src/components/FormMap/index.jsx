import './style.css';

import React, { useEffect, useState } from 'react';

import { db } from './../../db';
import firebase from 'firebase/app';
import validator from 'validator';

import ReCAPTCHA from 'react-google-recaptcha';

export const FormMap = () => {
  const [name, setName] = useState('');
  const [select, setSelect] = useState('bankéř');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  const [response, setResponse] = useState('');
  const [coordinates, setCoordinates] = useState([]);
  const [town, setTown] = useState('');

  const [recaptcha, setRecaptcha] = useState(false);

  const onChange = () => {
    setRecaptcha(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (responseEmail && name && comment && address && recaptcha === true) {
      db.collection('poradci')
        .add({
          name: name,
          select: select,
          allowed: false,
          email: email,
          address: address,
          town: town,
          comment: comment,
          phone: phone,
          datumVytvoreni: firebase.firestore.FieldValue.serverTimestamp(),
          latitude: coordinates.latitude,
          longitude: coordinates.longitude,
        })

        .then(() => {
          setResponse(
            `Formulář byl úspěšně odeslán, po schválení bude vložen do mapy.`,
          );
        })
        .catch(() => {
          setResponse(`Jejda, něco se nepovedlo. Zadej znovu.`);
        });

      setName('');
      setSelect('');
      setEmail('');
      setPhone('');
      setAddress('');
      setComment('');
    } else {
      setResponse(
        'Dopňte chybějící požadované údaje a zaškrtněte, že nejste robot.',
      );
    }
  };

  const [responseEmail, setResponseEmail] = useState(true);

  const validEmail = responseEmail !== true ? 'Zatejte platný email' : '';

  useEffect(() => {
    setResponseEmail(validator.isEmail(email));
  }, [email]);

  const [responsePhone, setResponsePhone] = useState(true);

  const validPhone = responsePhone !== true ? 'Zatejte platný telefon' : '';

  useEffect(() => {
    setResponsePhone(validator.isMobilePhone(phone));
  }, [phone]);

  useEffect(() => {
    let center = window.SMap.Coords.fromWGS84(14.1, 50.1);
    let m = new window.SMap(window.JAK.gel('m'), center);
    m.addDefaultLayer(window.SMap.DEF_BASE).enable();
    m.addDefaultControls();

    // naseptavac
    let inputEl = document.querySelector('#naseptavac');
    let suggest = new window.SMap.Suggest(inputEl, {
      provider: new window.SMap.SuggestProvider({
        updateParams: (params) => {
          /*
            tato fce se vola pred kazdym zavolanim naseptavace,
            params je objekt, staci prepsat/pridat klic a ten se prida
            do url
          */
          let c = m.getCenter().toWGS84();
          params.lon = c[0].toFixed(5);
          params.lat = c[1].toFixed(5);
          params.zoom = m.getZoom();
          // omezeni pro celou CR
          params.bounds = '48.5370786,12.0921668|51.0746358,18.8927040';

          // nepovolime kategorie, ale takto bychom mohli
          //params.enableCategories = 1;

          // priorita jazyku, oddelene carkou
          params.lang = 'cs,en';
        },
      }),
    });
    suggest.addListener('suggest', (suggestData) => {
      // vyber polozky z naseptavace
      setTimeout(function () {
        /*alert(JSON.stringify(suggestData, null, 4));*/
        setCoordinates({
          latitude: suggestData.data.latitude,
          longitude: suggestData.data.longitude,
        });
        setTown(suggestData.data.secondRow);
      }, 0);
    });
  }, []);

  return (
    <>
      <form className="form-map" onSubmit={handleSubmit}>
        <p className="required right">* Povinné údaje</p>
        <label className="form-map__select">
          Osoba je:
          <select
            name="Vyber poradce"
            value={select}
            onChange={(event) => setSelect(event.target.value)}
          >
            <option value="bankéř">Pracovník banky</option>

            <option value="poradce">Finanční poradce</option>
          </select>
        </label>

        <label className="form-map__name">
          Jméno bankéře/poradce <span className="required">*</span>
        </label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <div className="valid">
          <label className="form-map__phone">
            Telefonní kontakt bankéře/poradce
          </label>
          <span> {validPhone}</span>
        </div>
        <input
          value={phone}
          onChange={(event) => setPhone(event.target.value.trim())}
        />
        <div className="valid">
          <label className="form-map__email">
            E-mail bankéře/poradce <span className="required">*</span>
          </label>
          <span> {validEmail}</span>
        </div>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value.trim())}
        />

        <label className="form-map__address">
          Zadej adresu <span className="required">*</span>
        </label>
        <input
          id="naseptavac"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <div id="parent">
          <div id="m"></div>
        </div>

        <label>
          Zadej komentář se zkušeností <span className="required">*</span>
        </label>
        <textarea
          className="form-map__comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          rows={5}
        />
        <ReCAPTCHA
          sitekey="6LfeONEbAAAAALQzCl3o22xBWND0mj3UBERgzv7S"
          onChange={onChange}
          value={recaptcha}
        />
        <button className="button--large">Odeslat</button>
        <p>{response}</p>
      </form>
    </>
  );
};
