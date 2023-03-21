import React from 'react';
import { CurrentProduct } from './Overview';

function Gallery({ styleID, styles }) {
  console.log('gallery', styleID, styles);

  const mainImage = styles.filter((style) => style.style_id === styleID);
  console.log(mainImage);
  return (
    <div>
      {mainImage}
    </div>
  );
}

export default Gallery;
