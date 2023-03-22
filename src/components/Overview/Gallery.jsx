import React, { useState, useEffect } from 'react';

function Gallery({ styleID, stylePhotos, mainImage }) {
  console.log('gallery', styleID, stylePhotos);
  console.log('asdasdasd: ', mainImage);
  return (
    <div className="flex flex-row">
      <div className="flex flex-col justify-center">
        {stylePhotos.map((style, index) => <img id={index} className="object-scale opacity-50 w-[75px] h-[75px] object-contain m-[10px]" src={style.thumbnail_url} alt="" />)}
      </div>
      <div className="flex flex-center h-[42rem] w-[42rem]">
        <img className="absoulte object-contain max-h-[100%] max-w-[100%]" src={mainImage} alt="" />
      </div>
    </div>

  );
}

export default Gallery;
