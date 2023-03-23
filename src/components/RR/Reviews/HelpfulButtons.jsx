import React, { useState } from 'react';
import axios from 'axios';

function HelpfulButtons({ reviewID, helpfulness, makeGetRequest }) {
  const [clickedHelpful, setClickedHelpful] = useState(false);

  const handleClick = (updateType) => {
    if (updateType === 'report' || !clickedHelpful) {
      axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${reviewID}/${updateType}`, null, {
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
      })
        .then(() => {
          makeGetRequest();
          setClickedHelpful(true);
        });
    }
  };

  return (
    <div className="flex flex-row text-s my-2">
      <div className="mr-1">Helpful?</div>
      <button className="underline mx-1" onClick={() => handleClick('helpful')} type="button">Yes</button>
      <div className="mr-3">
        (
        {helpfulness}
        )
      </div>
      <div>|</div>
      <button className="underline ml-3" onClick={() => handleClick('report')} type="button">Report</button>
    </div>
  );
}

export default HelpfulButtons;
