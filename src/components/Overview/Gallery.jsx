import React, { useState, useEffect } from 'react';

function Gallery({ styleID, stylePhotos, mainImage }) {
  console.log('gallery', styleID, stylePhotos);
  console.log('asdasdasd: ', mainImage);
  return (
    <div>
      <div className="flex flex-start items-center w-[800px] h-[800px]">
        <img className="absolute object-contain h-[800px] w-[800px]" src={mainImage} alt="" />
        <div className="flex flex-col flex-start">
          {stylePhotos.map((style, index) => <img id={index} className="relative object-scale opacity-50 w-[80px] h-[80px] object-fit m-[10px]" src={style.thumbnail_url} alt="" />)}
        </div>
      </div>
    </div>

  );
}

export default Gallery;
