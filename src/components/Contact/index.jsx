import React from 'react';
import { Slavka } from './text/slavka.jsx';
import { Veru } from './text/veru.jsx';
import { ContactCard } from '../ContactCard';
import { FormContact } from './../FormContact/index';

import slavka from './img/slavka.jpg';
import verca from './img/veru.jpg';
import email from './img/email.svg';
import github from './img/git.svg';
import './style.css';

export const Contact = () => {
  return (
    <>
      <main>
        <h1>Kontakty</h1>

        <ContactCard
          photo={slavka}
          alt="Slávka"
          title="Slávka Vavřinová"
          render={(data) => (
            <>
              <div className="contact__box">
                <div className="contact">
                  <img className="email" src={email} alt="E-mail" />

                  <a href="mailto:slavka.vav@gmail.com">slavka.vav@gmail.com</a>
                </div>
                <div className="contact">
                  <img className="github" src={github} alt="Logo GitHub" />
                  <a
                    className="Slavka"
                    href="https://github.com/SlavkaVavrinova"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Slávka Vavřinová
                  </a>
                </div>
              </div>
            </>
          )}
        >
          <Slavka />
        </ContactCard>

        <ContactCard
          photo={verca}
          alt="Verča"
          title="Verča Sípalová"
          render={(data) => (
            <>
              <div className="contact__box">
                <div className="contact">
                  <img className="email" src={email} alt="E-mail" />
                  <a href="mailto:ver.kosik@gmail.com">ver.kosik@gmail.com</a>
                </div>
                <div className="contact">
                  <img className="github" src={github} alt="Logo GitHub" />
                  <a
                    className="Verca"
                    href="https://github.com/VerS10"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Verča Sípalová
                  </a>
                </div>
              </div>
            </>
          )}
        >
          <Veru />
        </ContactCard>
        <p className="text-center">Máš pro nás radu? Napiš, budeme rády!</p>
        <FormContact />
      </main>
    </>
  );
};
