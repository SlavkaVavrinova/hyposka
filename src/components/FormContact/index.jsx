import './style.css';

import React, { useEffect, useState } from 'react';
import { db } from './../../db';
import firebase from 'firebase/app';
import validator from 'validator';

export const FormContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (responseEmail && name && message) {
      db.collection('kontakt')
        .add({
          name: name,
          email: email,
          message: message,
          datumVytvoreni: firebase.firestore.FieldValue.serverTimestamp(),
        })

        .then(() => {
          setResponse(
            `Formulář byl úspěšně odeslán, odpověď dorazí na email: ${email}`,
          );
        })
        .catch(() => {
          setResponse(`Jejda, něco se nepovedlo. Zadej znovu.`);
        });

      setName('');
      setEmail('');
      setMessage('');
    } else {
      setResponse('Doplňte chybějící požadované údaje');
    }
  };

  const [responseEmail, setResponseEmail] = useState(true);

  const validEmail = responseEmail !== true ? 'Zatejte platný email' : '';

  useEffect(() => {
    setResponseEmail(validator.isEmail(email));
  }, [email]);

  return (
    <>
      <form className="form-contact" onSubmit={handleSubmit}>
        <p className="required right">* Povinné údaje</p>
        <label className="form-contact__name">
          Jméno <span className="required">*</span>
        </label>
        <input value={name} onChange={(event) => setName(event.target.value)} />
        <div className="valid">
          <label>
            Email <span className="required">*</span>
          </label>
          <span> {validEmail}</span>
        </div>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value.trim())}
        />
        <label>
          Vzkaz či rada <span className="required">*</span>{' '}
        </label>
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          rows={5}
        />
        <button className="button--large">Odeslat</button>

        <p>{response}</p>
      </form>
    </>
  );
};
