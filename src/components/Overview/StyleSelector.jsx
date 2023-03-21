import React, { useContext } from 'react';

function StyleSelector({ styles, changeStyle }) {
  console.log('styles: ', styles);
  return (
    <div className="flex flex-row flex-wrap flex-start max-w-[225px] gap-[5px] ">
      {styles.map((style, index) => {
        const imgUrl = `${style.photos[0].thumbnail_url}`;
        return <img className="w-[50px] h-[50px] object-none rounded-full overflow-hidden m-5px" src={imgUrl} alt="" key={index} onClick={changeStyle}/>;
      })}
    </div>
  );
}

export default StyleSelector;
