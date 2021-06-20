import React, { useState } from 'react';
import './style.css';

export const TextImg = (props) => {
  const [display, setDisplay] = useState(false);

  const handleClick = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className="container-bonus__item" onClick={handleClick}>
        <img
          className="container-bonus__img"
          src={props.photo}
          alt={props.alt}
        />
        <p>{props.title}</p>
        <div
          className={
            display !== true
              ? 'object-no-display'
              : 'object-display container-bonus__box'
          }
        >
          {props.text}
          <img src={props.cross} alt={props.crossAlt} />
        </div>
      </div>
    </>
  );
};
