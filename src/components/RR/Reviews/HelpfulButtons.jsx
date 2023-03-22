import React from 'react';
import axios from 'axios';

function HelpfulButtons({ reviewID, helpfulness }) {
  console.log(reviewID);
  const handleClick = () => {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewID}/helpful`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then(() => {
        console.log('success!');
      });
  };

  return (
    <div className="flex flex-row">
      <div>Helpful?</div>
      <button className="underline mx-1" onClick={() => handleClick()} type="button">Yes</button>
      (
      {helpfulness}
      )
    </div>
  );
}

export default HelpfulButtons;
