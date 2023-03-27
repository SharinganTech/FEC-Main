import React, { useEffect, useState } from 'react';

function ZoomedImage({ mainImage, zoomImage }) {
  const [leftPosition, setTop] = useState('0px');
  const [topPosition, setLeft] = useState('0px');
  const trackMouse = (e) => {
    const img = document.getElementById('img');
    const bounds = img.getBoundingClientRect();
    console.log('bounds: ', bounds);
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const x = e.screenX - bounds.left;
    const y = e.screenY - bounds.top;
    console.log('e: ', e);


    setLeft(`-${(e.pageX)}px`);
    setTop(`-${x}px`);
  };

  return (
    <div className="flex">
      <img
        id="img"
        className="absolute"
        src={mainImage}
        alt=""
        style={{ top: 0, left: leftPosition }}
      />
      <div
        className="col-start-3 col-end-6 w-[600px] h-[600px] border-line border-[4px] border-black inset-x-[500px] z-50"
        onMouseMove={trackMouse}
      />
    </div>
  );
}

export default ZoomedImage;
