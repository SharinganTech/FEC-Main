import React, { useState } from 'react';

function Style({ style }) {
  console.log('thumbnail: ', style);

  return (
    <div>
      {style.photos.map((pic) => {
        const imgUrl = `${pic.thumbnail_url}`;
        return <img class="w-[68px] h-[68px] object-fit rounded-full overflow-hidden" src={imgUrl} alt="" />;
      })}
    </div>
  );
}

export default Style;
