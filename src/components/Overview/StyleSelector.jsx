import React, { useState } from 'react';

function StyleSelector({ styles, styleName, changeStyle }) {
  const changeName = (e) => {
    e.preventDefault();
    changeStyle(e.target.id);
  };
  return (
    <div>
      <p>
        <span className="font-bold">Selected Style</span>
        <span>{styleName}</span>
      </p>
      <div className="flex flex-row flex-wrap flex-start max-w-[225px] gap-[5px] ">
        {styles.map((style, index) => {
          const imgUrl = `${style.photos[0].thumbnail_url}`;
          return <img id={style.style_id} className="w-[50px] h-[50px] object-none rounded-full overflow-hidden m-5px" src={imgUrl} alt="" key={index} onClick={changeName} />;
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
