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


    setLeft(`${x}px`);
    setTop(`${y}px`);
  };

  return (
    <div>
      <img
        id="img"
        className="relative"
        src={mainImage}
        alt=""
        style={{ top: topPosition, left: leftPosition }}
      />
      <div
        className="col-start-3 col-end-6 w-[600px] h-[600px] border-line border-[4px] border-black z-50"
        onMouseMove={trackMouse}
      />
    </div>
  );
}

export default ZoomedImage;
