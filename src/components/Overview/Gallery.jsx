import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

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
    if (nextImageIndex === stylePhotos.length && nextImageIndex) {
      setActiveIndex(0);
      changeMain(stylePhotos[0].url);
    } else if (nextImageIndex) {
      setActiveIndex(nextImageIndex);
      changeMain(stylePhotos[nextImageIndex].url);
    }
  };

  const changePrev = (e) => {
    e.preventDefault();
    const nextImageIndex = Number(e.target.value) - 1;
    console.log('prev index', typeof nextImageIndex, nextImageIndex);
    console.log('prev urls', stylePhotos[nextImageIndex]);
    if (nextImageIndex < 0 && nextImageIndex) {
      setActiveIndex(stylePhotos.length - 1);
      changeMain(stylePhotos[stylePhotos.length - 1].url);
    } else {
      setActiveIndex(nextImageIndex);
      changeMain(stylePhotos[nextImageIndex].url);
    }
  };

  return (
    <div className="flex flex-row bg-pastelGray justify-around h-[650px] w-[850px] overflow-hidden">
      <div id="sideThumbnails" className="flex flex-col justify-center items-center">
        <button type="button" value={activeIndex} className="h-[20px] w-[75px]" onClick={changePrev}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="self-center"
          />
        </button>
        <div className="flex flex-col shrink-0 grow-0 justify-start items-center overflow-hidden w-[95px] max-h-[560px] hmt-[10px] transition-transform" style={{ transform: `translateY(-${activeIndex * 10}%)` }}>
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
        <button type="button" value={activeIndex} className="h-[20px] w-[75px]" onClick={changeNext}>
          <FontAwesomeIcon
            icon={faArrowDown}
            className="self-center"
          />
        </button>
      </div>
      <div className="flex shrink-0 flex-row grow-0 justify-center items-center h-[100%] w-16 z-50">
        <button type="button" value={activeIndex} className="h-[100%] w-[100%]" onClick={changePrev}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="self-center"
          />
        </button>
      </div>
      <div className="flex items-center justify-center grow-0 w-[600px] h-[650px]">
        <img className="object-contain w-[98%] h-[98%]" src={mainImage} alt="" />
      </div>
      <div className="flex shrink-0 grow-0 justify-start h-[100%] w-16 z-50">
        <button type="button" value={activeIndex} className="h-[100%] w-[100%] z-50" onClick={changeNext}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="self-center z-0"
          />
        </button>
      </div>
    </div>

  );
}

export default Gallery;
