import React, { useState } from 'react';

function StyleSelector({ styles, styleName, changeStyle }) {
  const changeName = (e) => {
    e.preventDefault();
    changeStyle(e.target.id)
  }
  return (
    <div className="mb-[15px]">
      <p className="text-[20px] mb-[15px]">
        <span className="font-bold">Selected Style >&nbsp;</span>
        <span>{styleName}</span>
      </p>
      <div className="flex flex-row flex-wrap flex-start max-w-[325px] gap-[15px] ">
        {styles.map((style, index) => {
          const imgUrl = `${style.photos[0].thumbnail_url}`;
          return <img id={style.style_id} className="border-line border-[2px] border-black w-[65px] h-[65px] object-none rounded-full overflow-hidden m-5px" src={imgUrl} alt="" key={index} onClick={changeName}/>;
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
