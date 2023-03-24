import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck as farCheck, faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function StyleSelector({ styleID, styles, styleName, changeStyle }) {
  // console.log(styleID)
  const changeName = (e) => {
    e.preventDefault();
    changeStyle(e.target.id);
  };
  return (
    <div className="mb-[15px]">
      <p className="text-[20px] mb-[15px]">
        <span className="font-bold">
          Selected Style >&nbsp;
        </span>
        <span>
          {styleName}
        </span>
      </p>
      <div className="flex flex-row flex-wrap flex-start max-w-[325px] gap-[15px] ">
        {styles.map((style, index) => {
          const imgUrl = `${style.photos[0].thumbnail_url}`;
          return (
            <div id={style.style_id}>
              <button className="relative" onClick={changeName}>
              {(styleID === style.style_id) ? <FontAwesomeIcon className="absolute text-[20px] top-0 right-0" icon={faCircleCheck} style={{color: "white",}} /> : null}
                <img
                  id={style.style_id}
                  className="border-line border-[1px] border-black w-[4rem] h-[4rem] object-none rounded-full overflow-hidden m-5px"
                  src={imgUrl}
                  alt=""
                  key={index}
                />
              </button>

            </div>
          )
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
