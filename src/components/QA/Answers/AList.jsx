import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AListEntry from './AListEntry';

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
    <div data-testid="answers-list" className="flex-col overflow-y-auto scrollbar-none max-h-[300px] relative">
      {listView.map((eachA) => (
        <AListEntry key={eachA.id} eachA={eachA} />
      ))}
      {/* {aData.map((eachA) => (
        <AListEntry key={eachA.id} eachA={eachA} />
      ))} */}
      <div className="py-3">
        {(leng > 2) ? <button data-testid="more-answer-btn" type="button" className="border-[1px] border-slate-600 font-semibold uppercase text-sm p-4 rounded-sm shadow-inner m-4" onClick={handleMoreAnswersClick}>{cap < leng ? 'See more answers' : 'Collapse Answers'}</button> : null}
      </div>
    </div>
  );
}

export default AList;
