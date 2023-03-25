import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Gallery({ stylePhotos, mainImage, changeMain }) {
  const [activeIndex, setActiveIndex] = useState('');
  const clickThumbnail = (e) => {
    e.preventDefault();
    const newURLMain = stylePhotos.filter((style) => (
      style.thumbnail_url === e.target.src
    ));
    changeMain(newURLMain[0].url);
    console.log(typeof e.target.id);
    setActiveIndex(e.target.id);
  };

  const changeNext = (e) => {
    e.preventDefault();
    const nextImageIndex = Number(e.target.value) + 1;
    console.log(typeof nextImageIndex, nextImageIndex);
    console.log(stylePhotos[nextImageIndex]);
    if (nextImageIndex === stylePhotos.length) {
      setActiveIndex(0);
      changeMain(stylePhotos[0].url);
    } else {
      setActiveIndex(nextImageIndex);
      changeMain(stylePhotos[nextImageIndex].url);
    }
  };

  const changePrev = (e) => {
    e.preventDefault();
    const nextImageIndex = Number(e.target.value) - 1;
    console.log(typeof nextImageIndex, nextImageIndex);
    console.log(stylePhotos[nextImageIndex]);
    if (nextImageIndex < 0) {
      setActiveIndex(stylePhotos.length - 1);
      changeMain(stylePhotos[stylePhotos.length - 1].url);
    } else {
      setActiveIndex(nextImageIndex);
      changeMain(stylePhotos[nextImageIndex].url);
    }
  };

  return (
    <div className="flex flex-row bg-pastelGray justify-around h-[650px] w-[850px] overflow-hidden">
      <div className="flex flex-col justify-start items-center overflow-hidden w-[95px] mt-[10px]">
        {stylePhotos.map((style, index) => (
          <button className=" border-line border-2 border-black w-[75px] h-[75px] mt-[2.5px] mb-[2.5px]" key={index} id={index} type="button" onClick={clickThumbnail}>
            <img
              id={index}
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
      <div className="flex flex-row justify-center items-center h-[100%] w-24 z-50">
        <button type="button" value={activeIndex} className="h-[100%] w-[100%]" onClick={changePrev}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="self-center ml-5"

          />
        </button>
      </div>
      <img className="object-contain h-[98%] w-[98%]" src={mainImage} alt="" />
      <div className="flex justify-start h-[100%%] w-24 z-50">
        <button type="button" value={activeIndex} className="h-[100%] w-[100%]" onClick={changeNext}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="self-center mr-5"
          />
        </button>
      </div>
    </div>

  );
}

export default Gallery;
