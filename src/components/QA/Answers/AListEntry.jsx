import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { format, parseISO } from 'date-fns';
import axios from 'axios';

function AListEntry({ eachA }) {
  const [aHelpful, setAHelpful] = useState(eachA.helpfulness);
  const [helpfulClicked, setHelpfulClicked] = useState(false);

  function axPutA(data) {
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/answers/${eachA.id}/helpful`, data, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    });
  }

  function handleAHelpfulClick() {
    if (!helpfulClicked) {
      axPutA({ helpfulness: aHelpful + 1 });
      setAHelpful((state) => state + 1);
      setHelpfulClicked(true);
    }
  }

  function renderImages() {
    const photoURLs = eachA.photos;
    if (photoURLs.length) {
      return photoURLs.map((p, i) => (
        <img key={i} className="w-[100px] h-[100px] apsect-auto" alt="" src={p} />
      ));
    }
    return null;
  }

  return (
    <div className="px-1 py-3">
      <div>
        <b data-testid="answers-body" className="text-xl">
          {'A: '}
        </b>
        <span className="break-all text-lg">
          {`${eachA.body}`}
        </span>
      </div>
      <div className="flex pl-4 gap-x-6">
        {renderImages()}
      </div>
      <div className="flex justify-between items-center">
        <div className="flex text-sm justify-start space-x-3">
          {eachA.answerer_name.includes('Seller') ? <div className="font-bold">Seller</div> : <div>{`by ${eachA.answerer_name} `}</div>}
          <div>{format(parseISO(eachA.date), 'MMMM dd, yyyy')}</div>
        </div>
        <div className="flex text-xs space-x-2">
          <input data-testid="increment-btn" className="text-blue-600" type="button" onClick={handleAHelpfulClick} value="Helpful?" />
          <span className="underline" data-testid="helpful-span">{`Yes (${aHelpful})`}</span>
        </div>
      </div>
    </div>
  );
}

export default AListEntry;
