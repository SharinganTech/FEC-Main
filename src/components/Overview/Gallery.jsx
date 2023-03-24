import React from 'react';

function Gallery({ stylePhotos, mainImage, changeMain }) {
  const clickThumbnail = (e) => {
    e.preventDefault();
    const newURL = stylePhotos.filter((style) => (
      style.thumbnail_url === e.target.src
    ));
    changeMain(newURL[0].url);
  };
  return (
    <div className="flex flex-row bg-white justify-evenly">
      <div className="flex flex-col justify-center">
        {stylePhotos.map((style, index) => {
          return (
            <img
              key={index}
              className="object-scale opacity-50 w-[75px] h-[75px] object-contain m-[10px]"
              src={style.thumbnail_url}
              alt=""
              onClick={clickThumbnail}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center h-[42rem] w-[42rem]">
        <img className="absoulte object-contain max-h-[90%] max-w-[90%]" src={mainImage} alt="" />
      </div>
    </div>

  );
}

export default Gallery;
