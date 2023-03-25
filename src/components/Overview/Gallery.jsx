import React, { useState } from 'react';

function Gallery({ stylePhotos, mainImage, altImage, changeMain }) {
  const clickThumbnail = (e) => {
    e.preventDefault();
    const newURLMain = stylePhotos.filter((style) => (
      style.thumbnail_url === e.target.src
    ));
    changeMain(newURLMain[0].url);

    console.log('new alt  image; ', newURLMain[0].thumbnail_url);
    console.log('current alt image; ', altImage);
    console.log('my main: ', e.target);
    // const currentThumbnail = document.getElementById(e.target.src);
    // console.log(currentThumbnail);
  };
  return (
    <div className="flex flex-row bg-pastelGray justify-around h-[650px] w-[850px] overflow-hidden">
      <div className="flex flex-col justify-start items-center overflow-hidden w-[95px] mt-[10px]">
        {stylePhotos.map((style, index) => (
          <button className=" border-line border-2 border-black w-[75px] h-[75px] mt-[2.5px] mb-[2.5px]" key={index} type="button" onClick={clickThumbnail}>
            <img
              id={style.thumbnail_url}
              key={index}
              className={(style.url === mainImage)
                ? 'opacity-100 object-cover w-[73px] h-[73px]'
                : 'opacity-40 object-cover w-[73px] h-[73px]'}
              src={style.thumbnail_url}
              alt=""
            />
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center h-[40rem] w-[50rem]">
        <img className="absoulte object-contain h-[98%] w-[98%]" src={mainImage} alt="" />
      </div>
    </div>

  );
}

export default Gallery;
