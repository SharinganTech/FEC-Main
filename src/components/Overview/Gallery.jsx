import React from 'react';
import { CurrentProduct } from './Overview';

function Gallery({ styleID, styles, mainImage }) {
  console.log('gallery', typeof styleID, styleID, styles);
  console.log('asdasdasd: ', mainImage);
  return (
    <div className="flex max-w-[800px] h-[600px] object-scale-down justify-center">
      <img className="" src={mainImage} alt="" />
    </div>
  );
}

export default Gallery;
