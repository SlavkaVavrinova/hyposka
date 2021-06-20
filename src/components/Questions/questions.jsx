import React from 'react';
import cx from 'classnames/bind';
import './style.css';

export const Questions = (props) => {
  const handleRightAnswer = (event) => {
    props.goAhead();
  };
  const handleWrongAnswer = (event) => {
    alert(
      'Špatná odpověď. Že jen zkoušíš, co se stane, když odpovíš špatně? Odpovídej znovu.',
    );
  };

  return (
    <>
      <div className={cx('id', props.className)}>
        <span className="result">{props.result}</span>
        <img className="answer__img" src={props.photo} alt={props.alt} />
      </div>
      <div className={cx('id', props.className)}>
        <span className={props.key}></span>
        <span className="question">{props.title}</span>
      </div>
      <div className={cx('id', props.className)}>
        <span className="answer" onClick={handleRightAnswer}>
          {props.textA}
        </span>
        <span className="answer" onClick={handleWrongAnswer}>
          {props.textB}
        </span>
      </div>
    </>
  );
};
