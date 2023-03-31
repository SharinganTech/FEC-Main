import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight, faArrowLeft, faArrowUp, faArrowDown, faExpand,
} from '@fortawesome/free-solid-svg-icons';

function ExpandedView({
  stylePhotos, mainImage, changeMain, changeView,
}) {
  const [photos, setPhotos] = useState(stylePhotos);
  const [activeIndex, setActiveIndex] = useState(0);
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
    const nextImageIndex = activeIndex + 1;
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
    const nextImageIndex = activeIndex - 1;
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
  // if (imageScaled) {
  //   return (
  //     <ZoomedImage mainImage={mainImage} zoomImage={zoomImage}/>
  //   );
  // }
  return (
    <div className="flex flex-row bg-[#EFE1CE] justify-around h-[750px] w-[100%] rounded-lg overflow-hidden">
      <div id="sideThumbnails" className="flex flex-col justify-between items-center">
        <button type="button" value={activeIndex} className="h-[50px] w-[95px] z-30 bg-[#EFE1CE]" onClick={changePrev}>
          <FontAwesomeIcon
            icon={faArrowUp}
            className="self-center"
            onClick={changePrev}
          />
        </button>
        <div className="flex flex-col shrink-0 grow-0 justify-start items-center overflow-visible w-[95px] max-h-[560px] hmt-[10px] z-10 transition-transform" style={{ transform: `translateY(-${activeIndex * 16.25}%)` }}>
          {photos.map((style, index) => (
            <button
              data-testid={`${index}thumbnail`}
              className=" border-line z-0 border-2 border-black w-[85px] h-[85px] mt-[2.5px] mb-[2.5px] rounded-md"
              key={index}
              id={index}
              type="button"
              onClick={clickThumbnail}
            >
              <img
                id={index}
                key={index}
                className={(style.url === mainImage)
                  ? 'opacity-100 object-cover w-[83px] h-[81px] rounded-sm'
                  : 'opacity-40 object-cover w-[83px] h-[81px] rounded-sm'}
                src={style.thumbnail_url}
                alt=""
              />
            </button>
          ))}
        </div>
        <button type="button" value={activeIndex} className="h-[50px] w-[95px] z-30 bg-[#EFE1CE]" onClick={changeNext}>
          <FontAwesomeIcon
            icon={faArrowDown}
            onClick={changeNext}
            className="self-center z-40 bg-[#EFE1CE]"
          />
        </button>
      </div>
      <div data-testid="arrowLeft" id="mainImage" className="flex items-center justify-evenly grow-0 w-[1370px] h-[98%]">
        <button type="button" value={activeIndex} className="h-[100%] w-[68px] z-10" onClick={changePrev}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={changePrev}
            className="self-center"
          />
        </button>
        <img data-testid="mainImage" className="object-contain w-[80%] h-[90%]" src={mainImage} alt="" />
        <button data-testid="arrowRight" type="button" value={activeIndex} className="h-[100%] z-10 w-[68px]" onClick={changeNext}>
          <FontAwesomeIcon
            onClick={changeNext}
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
