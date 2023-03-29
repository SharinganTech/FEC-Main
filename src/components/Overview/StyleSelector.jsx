import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

function StyleSelector({
  styleID, styles, styleName, changeStyle,
}) {
  const changeName = (e) => {
    e.preventDefault();
    changeStyle(e.target.id);
  };
  return (
    <div className="mb-[15px]">
      <p className="text-[20px] mb-[15px]">
        <span className="font-bold">
          {'Selected Style > '}
        </span>
        <span>
          {styleName}
        </span>
      </p>
      <div className="flex flex-row flex-wrap flex-center min-w-[100%] gap-[15px] ">
        {styles.map((style, index) => {
          const imgUrl = `${style.photos[0].thumbnail_url}`;
          return (
            <div key={index} id={style.style_id}>
              <button key={index} type="button" className="relative w-[4rem] h-[4rem]" onClick={changeName}>
                {(styleID === style.style_id) ? <FontAwesomeIcon key="checkmark" className="absolute text-[20px] top-0 right-0" icon={faCircleCheck} style={{ color: 'white' }} /> : null}
                <img
                  id={style.style_id}
                  className="border-line border-[1px] border-black w-[4rem] h-[4rem] object-cover rounded-full overflow-hidden"
                  src={imgUrl}
                  alt=""
                  key={index}
                />
              </button>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default StyleSelector;
