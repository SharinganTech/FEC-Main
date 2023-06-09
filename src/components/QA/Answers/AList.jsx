import React, { useState, useEffect } from 'react';
import AListEntry from './AListEntry';
import '../../RatingsAndReviews/RR.css';

function AList({ eachQ }) {
  const [aData, setAData] = useState([]);
  const [cap, setCap] = useState(2);
  const leng = aData.length;
  const listView = aData.slice(0, cap);

  useEffect(() => {
    const listData = Object.values(eachQ.answers);
    listData.sort((a, b) => b.helpfulness - a.helpfulness);
    setAData(listData);
  }, [eachQ]);

  function handleMoreAnswersClick() {
    if (cap > 2) {
      setCap(2);
    } else {
      setCap(leng);
    }
  }

  return (
    <div data-testid="answers-list" className="flex-col overflow-y-auto scrollbar-hide max-h-[400px] relative">
      {listView.map((eachA) => (
        <AListEntry key={eachA.id} eachA={eachA} />
      ))}
      {/* {aData.map((eachA) => (
        <AListEntry key={eachA.id} eachA={eachA} />
      ))} */}
      <div className="py-3">
        {(leng > 2) ? <button data-testid="more-answers-btn" type="button" className="uppercase text-black border-2 border-black font-bold py-2 px-4 mr-2 rounded" onClick={handleMoreAnswersClick}>{cap < leng ? 'See more answers' : 'Collapse Answers'}</button> : null}
      </div>
    </div>
  );
}

export default AList;
