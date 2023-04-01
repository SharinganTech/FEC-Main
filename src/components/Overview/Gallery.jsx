import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faArrowLeft, faArrowUp, faArrowDown, faExpand,
} from '@fortawesome/free-solid-svg-icons';

function Gallery({
  stylePhotos, mainImage, changeMain, changeView,
}) {
  const [photos, setPhotos] = useState(stylePhotos);
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    setPhotos(stylePhotos);
  }, [stylePhotos]);
  const clickThumbnail = (e) => {
    e.preventDefault();
    const newURLMain = stylePhotos.filter((style) => (
      style.thumbnail_url === e.target.src
    ));
    console.log('new main url', newURLMain[0].url);
    changeMain(newURLMain[0].url);
    setActiveIndex(e.target.id);
  };

  const changeNext = (e) => {
    e.preventDefault();
    const nextImageIndex = Number(activeIndex) + 1;
    if (nextImageIndex === photos.length) {
      setActiveIndex(0);
      changeMain(photos[0].url);
    } else {
      setActiveIndex(nextImageIndex);
      changeMain(photos[nextImageIndex].url);
    }
  };

  const changePrev = (e) => {
    e.preventDefault();
    const prevImageIndex = Number(activeIndex) - 1;
    if (prevImageIndex < 0) {
      setActiveIndex(stylePhotos.length - 1);
      changeMain(photos[stylePhotos.length - 1].url);
    } else {
      setActiveIndex(prevImageIndex);
      changeMain(photos[prevImageIndex].url);
    }
  };
  return (
    <div className="h-[100%] w-[100%] min-w-[320px] grid grid-cols-[14.2%_14.2%_20%_20%_20%_10%] grid-rows-[8%_27%_27%_27%_11%] bg-[#EFE1CE] shadow-xl rounded-lg">
      <div id="sideThumbnails" className="max-h-[100%] row-start-1 row-end-6 col-start-1 col-end-2 flex flex-col justify-start items-center overflow-hidden">
        <button data-testid="arrowUp" id="arrowUpButton" type="button" value={activeIndex} className="h-[5.5em] w-[5em] mb-[0.5em] justify-center z-30 bg-[#EFE1CE]" onKeyPress={changePrev} onClick={changePrev}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="self-center"
            onKeyPress={changePrev}
            onClick={changePrev}
          />
        </button>
        <div className="row-start-2 flex flex-col max-h-[80%] justify-start z-20 transition-transform" style={{ transform: `translateY(-${activeIndex * 13.35}%)` }}>
          {photos.map((style, index) => (
            <button
              data-testid={`${index}thumbnail`}
              className="justfy-center rounded-md items-center border-line z-0 border-2 border-black w-[60px] h-[60px] mt-[10px]"
              key={index}
              id={index}
              type="button"
              onKeyPress={clickThumbnail}
              onClick={clickThumbnail}
            >
              <img
                id={index}
                key={index}
                className={(style.url === mainImage)
                  ? 'opacity-100 object-cover rounded-sm w-[60px] h-[57px]'
                  : 'opacity-40 object-cover rounded-sm w-[60px] h-[57px]'}
                src={style.thumbnail_url}
                alt=""
              />
            </button>
          ))}
        </div>
        <button type="button" id="arrowDownButton" value={activeIndex} className="row-start-5 row-end-6 h-[5em] w-[5em] justify-self-center items-center z-30 bg-[#EFE1CE]" onClick={changeNext}>
          <FontAwesomeIcon
            icon={faArrowDown}
            className="self-center z-40 bg-inherit"
            onClick={changeNext}
          />
        </button>
      </div>
      <button data-testid="arrowLeft" type="button" value={activeIndex} className="row-star-5 row-end-6 col-start-3 col-end-4" onKeyPress={changePrev} onClick={changePrev}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="self-center"
          onKeyPress={changePrev}
          onClick={changePrev}
        />
      </button>
      <button className="z-0 row-start-2 p-top-[25px] row-end-5 col-start-2 col-end-6 max-h-[100%] min-w-[100%]" type="button" onClick={changeView}>
        <img
          data-testid="mainImage"
          className="z-0 row-start-2 row-end-5 col-start-2 col-end-6 max-h-[100%] min-w-[100%] object-contain"
          src={mainImage}
          alt=""
        />
      </button>
      <button data-testid="arrowRight" type="button" value={activeIndex} className="row-start-5 row-end-6 col-start-4 col-end-5 justfy-self-center" onKeyPress={changeNext} onClick={changeNext}>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="self-center z-0"
          onKeyPress={changeNext}
          onClick={changeNext}
        />
      </button>
      <button data-testid="expandIcon" type="button" className="place-self-center row-start-1 row-end-2 col-start-6 col-end-7" onClick={changeView}>
        <FontAwesomeIcon
          icon={faExpand}
          className="h-[25px] w-[25px] mt-[10px]"
        />
      </button>
    </div>
  );
}

export default Gallery;
