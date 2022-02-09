import React, { Component, useEffect, useRef, useState } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [alert, setAlert] = useState(false);
  const rgbString = rgb.join(',');
  // const hexColor = rgbToHex(...rgb);
  const hexValue = `#${hex}`;

  const handleClick = () => {
    setAlert(true);
    navigator.clipboard.writeText(hexValue);
  };  

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert(false);
    },2000);

    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article className={`color ${index > 10 && 'color-light'} `} style={{backgroundColor:`rgb(${rgbString})`}} onClick={handleClick}>
      <p className="percent-value">{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  )
};

export default SingleColor;