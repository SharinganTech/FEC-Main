import React, { useContext } from 'react';
import Style from './Style';

function StyleSelector({ styles }) {
  console.log('styles: ', styles);
  return (
    <div>
      {styles.map((style) => (
        <Style style={style} />
      ))}
    </div>
  );
}

export default StyleSelector;
