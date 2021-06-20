import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import './style.css';

import left from './img/left.svg';
import right from './img/right.svg';
import printer from './../Print/img/printer.svg';
import logoPrint from './../Print/img/logoPrint.svg';

export const AnnuityCalculator = () => {
  const [nrOfMonth, setNrOfMonths] = useState(0);
  const [loanAmount, setLoanAmount] = useState(0);
  const [rate, setRate] = useState(0);
  const [page, setPage] = useState(1);

  const [plan, setPlan] = useState(false);

  const countNrOfMonths = (event) => {
    setNrOfMonths(event.target.value);
  };

  const changeLoanAmount = (event) => {
    setLoanAmount(Number(event.target.value));
  };

  const changeRate = (event) => {
    setRate(event.target.value);
  };

  const pageSize = 36;
  let nrOfPages = Math.floor(nrOfMonth / pageSize);
  if (nrOfMonth % pageSize > 0) {
    nrOfPages++;
  }
  nrOfPages = nrOfPages === 0 ? 1 : nrOfPages;

  const handleClick = (page) => {
    if (page >= 1 && page <= nrOfPages) {
      setPage(page);
    }
  };

  const rows = [];
  const calculations = [];
  const dates = [];
  const now = new Date();
  const actualYear = now.getFullYear();
  const actualMonth = now.getMonth();

  const getHalfMonth = (i) => {
    let date = new Date(actualYear, actualMonth, 15);
    date = new Date(date.setMonth(actualMonth + i));
    const month = date.getMonth();
    const year = date.getFullYear();
    const patnactehoVmesici = `15.${month + 1}.${year}`; // mesice zacinaji od 0, proto se pricita 1
    return patnactehoVmesici;
  };

  const m6 = rate / 1200;
  const m11 = 1 + m6;
  const m12 = Math.pow(m11, -nrOfMonth);
  const m13 = 1 - m12;
  const payment = loanAmount * (m6 / m13) || 0;

  const getInterest = (i) => {
    const restOfLoan = calculations[i - 1]
      ? calculations[i - 1].restOfLoan
      : loanAmount;
    const interest = m6 * restOfLoan;
    const umor = payment - interest;
    return {
      interest: interest,
      umor: umor,
      restOfLoan: restOfLoan - umor,
    };
  };

  for (let i = 0; i < nrOfMonth; i++) {
    const calcs = getInterest(i);
    calculations.push(calcs);
    dates.push(getHalfMonth(i));
  }
  const pageItems = calculations.slice((page - 1) * pageSize, page * pageSize);
  const splicedDates = dates.slice((page - 1) * pageSize, page * pageSize);

  for (let c = 0; c < pageItems.length; c++) {
    const calcs = pageItems[c];
    rows.push(
      <tr key={c}>
        <td>{splicedDates[c]}</td>
        <td>{Math.trunc(calcs.interest)}</td>
        <td>{Math.trunc(calcs.umor)}</td>
        <td>{Math.trunc(calcs.restOfLoan)}</td>
      </tr>,
    );
  }
  const componentRef = useRef();
  return (
    <>
      <div className="annuity__input">
        <label>
          Zadej požadovanou výši úvěru
          <input
            type="number"
            min={0}
            onChange={changeLoanAmount}
            value={loanAmount}
          />
        </label>
        <label>
          Zadej úrokovou sazbu hypotéky v %
          <input type="number" min={0} onChange={changeRate} value={rate} />
        </label>
        <label>
          Zadej počet <strong>měsíců</strong> splácení
          <input
            type="number"
            min={0}
            onChange={countNrOfMonths}
            value={nrOfMonth}
          />
        </label>
      </div>

      <div className="form-costs__container-minimum">
        <strong>Výše splátky hypotéky:</strong>
        <p className="form-costs__minimum"> {`${Math.trunc(payment)} Kč`}</p>
      </div>
      <button className="button--extra-large" onClick={() => setPlan(!plan)}>
        Zobrazit splátkový plán
      </button>
      <div className="print-black" ref={componentRef}>
        {plan && (
          <>
            <div className="print-black__container">
              <img
                className="print-black__logo"
                src={logoPrint}
                alt="Logo Appka Hypoška"
              />
              <h1 className="print-black__h1">Tisk z Appky Hypošky</h1>
            </div>

            <p className="print__text">
              Splátkový plán pro úvěr {loanAmount} Kč, se splátkou{' '}
              {`${Math.trunc(payment)} Kč`}, dobou splácení {nrOfMonth} měsíců a
              úrokovou sazbou {rate}%.{' '}
            </p>
            <table>
              <thead>
                <tr>
                  <th>Datum splátky</th>
                  <th>Zaplacený úrok</th>
                  <th>Úmor dluhu</th>
                  <th>Zůstatek úvěru</th>
                </tr>
              </thead>
              <tbody>{rows}</tbody>
            </table>
            <span className="print-black__container">
              Strana {page}/{nrOfPages}
            </span>
            <div className="noPrint">
              <div>
                <div className="plan-arrows">
                  <span onClick={handleClick.bind(null, page - 1)}>
                    <img src={left} alt="Šipka vlevo" />
                  </span>
                  <span onClick={handleClick.bind(null, page + 1)}>
                    <img src={right} alt="Šipka vpravo" />
                  </span>
                </div>
              </div>
              <div className="plan-pages">
                <span>
                  Strana {page}/{nrOfPages}
                </span>
                <h3>Chci vytisknout stranu {page} splátkového plánu</h3>
                <ReactToPrint
                  trigger={() => (
                    <button className="button--print">
                      <img src={printer} alt="Tiskárna" />
                    </button>
                  )}
                  content={() => componentRef.current}
                />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
