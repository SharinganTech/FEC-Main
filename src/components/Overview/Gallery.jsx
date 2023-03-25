import React, { useState } from 'react';

function Gallery({ stylePhotos, mainImage, altImage, changeMain }) {
  const [highlight, setHighlight] = useState(mainImage);
  const clickThumbnail = (e) => {
    e.preventDefault();
    const newURLMain = stylePhotos.filter((style) => (
      style.thumbnail_url === e.target.src
    ));
    changeMain(newURLMain[0].url, newURLMain[0].thumbnail_url);

    console.log('new alt  image; ', newURLMain[0].thumbnail_url);
    console.log('current alt image; ', altImage);
    console.log('my main: ', e.target);
    // const currentThumbnail = document.getElementById(e.target.src);
    // console.log(currentThumbnail);
    setHighlight(newURLMain[0].url);
  };
  return (
    <div className="flex flex-row bg-white justify-center h-[700px] w-[800px] overflow-hidden">
      <div className="flex flex-col justify-center overflow-auto w-[80px]">
        {stylePhotos.map((style, index) => (
          <button key={index} type="button" onClick={clickThumbnail}>
            <img
              id={style.thumbnail_url}
              key={index}
              className={(style.url === mainImage)
                ? 'opacity-50 object-scale w-[75px] h-[75px] object-contain m-[10px]'
                : 'opacity-100 object-scale w-[75px] h-[75px] object-contain m-[10px]'}
              src={style.thumbnail_url}
              alt=""
            />
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center h-[42rem] w-[42rem]">
        <img className="absoulte object-contain max-h-[95%] max-w-[95%]" src={mainImage} alt="" />
      </div>
    </div>

  );
}

export default Gallery;
