import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faArrowLeft, faArrowUp, faArrowDown, faExpand,
} from '@fortawesome/free-solid-svg-icons';
import ZoomedImage from './ZoomedImage';

function ExpandedView({
  stylePhotos, mainImage, changeMain, changeView,
}) {
  const [photos, setPhotos] = useState(stylePhotos);
  const [activeIndex, setActiveIndex] = useState('');
  const [imageScaled, setImageScaled] = useState(false);
  useEffect(() => {
    setPhotos(stylePhotos);
  }, [stylePhotos]);
  const clickThumbnail = (e) => {
    e.preventDefault();
    const newURLMain = stylePhotos.filter((style) => (
      style.thumbnail_url === e.target.src
    ));
    changeMain(newURLMain[0].url);
    setActiveIndex(e.target.id);
  };

  const changeNext = (e) => {
    e.preventDefault();
    const nextImageIndex = Number(e.target.value) + 1;
    if (nextImageIndex === stylePhotos.length) {
      setActiveIndex(0);
      changeMain(stylePhotos[0].url);
    } else {
      setActiveIndex(nextImageIndex);
      changeMain(stylePhotos[nextImageIndex].url);
    }
  };

  const changePrev = (e) => {
    console.log(e.target);
    e.preventDefault();
    const nextImageIndex = Number(e.target.value) - 1;
    if (nextImageIndex < 0) {
      setActiveIndex(stylePhotos.length - 1);
      changeMain(stylePhotos[stylePhotos.length - 1].url);
    } else {
      setActiveIndex(nextImageIndex);
      changeMain(stylePhotos[nextImageIndex].url);
    }
  };
  const zoomImage = () => {
    setImageScaled(!imageScaled);
  };
  if (imageScaled) {
    return (
      <ZoomedImage mainImage={mainImage} zoomImage={zoomImage}/>
    );
  }
  return (
    <div className="flex flex-row bg-pastelGray justify-around h-[800px] w-[100%] overflow-hidden">
      <div id="sideThumbnails" className="flex flex-col justify-between items-center">
        <button type="button" value={activeIndex} className="h-[50px] w-[75px] z-30 bg-pastelGray" onClick={changePrev}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="self-center"
          />
        </button>
        <div className="flex flex-col shrink-0 grow-0 justify-start items-center overflow-visible w-[95px] max-h-[560px] hmt-[10px] z-10 transition-transform" style={{ transform: `translateY(-${activeIndex * 6.5}%)` }}>
          {photos.map((style, index) => (
            <button className=" border-line z-0 border-2 border-black w-[75px] h-[75px] mt-[2.5px] mb-[2.5px]" key={index} id={index} type="button" onClick={clickThumbnail}>
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
        <button type="button" value={activeIndex} className="h-[50px] w-[75px] z-30 bg-pastelGray" onClick={changeNext}>
          <FontAwesomeIcon
            icon={faArrowDown}
            className="self-center z-40 bg-inherit"
          />
        </button>
      </div>
      <div id="mainImage" className="flex items-center justify-evenly grow-0 w-[1370px] h-[98%]">
        <button type="button" value={activeIndex} className="h-[100%] w-[68px] z-10" onClick={changePrev}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="self-center"
          />
        </button>
        <img className="object-fit max-h-[100%]" src={mainImage} onClick={zoomImage} alt="" />
        <button type="button" value={activeIndex} className="h-[100%] z-10 w-[68px]" onClick={changeNext}>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="self-center z-0"
          />
        </button>
      </div>
      <button type="button" className="self-start justify-self-end z-10" onClick={changeView}>
        <FontAwesomeIcon
          icon={faExpand}
          className="h-[25px] w-[25px] mt-[10px]"
        />
      </button>
    </div>
  );
}

export default ExpandedView;
