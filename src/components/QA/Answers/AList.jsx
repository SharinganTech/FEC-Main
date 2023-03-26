import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AListEntry from './AListEntry';

function AList({ eachQ }) {
  const [aData, setAData] = useState([]);
  const [cap, setCap] = useState(2);
  const leng = aData.length;
  const listView = aData.slice(0, cap);

  // const listView = aData;
  // console.log(capRef.current);

  // console.log(eachQ, aData);
  useEffect(() => {
    // console.log('listData: ', listData);
    // if (eachQ.) {
    const listData = Object.values(eachQ.answers);
    listData.sort((a, b) => b.helpfulness - a.helpfulness);
    setAData(listData);
    // }
  }, [eachQ]);

  function handleMoreAnswersClick() {
    if (cap >= leng) {
      setCap(2);
    } else {
      setCap((state) => state + 2);
    }
  }

  return (
    <div className="flex-col overflow-y-auto max-h-[300px] relative">
      {listView.map((eachA) => (
        <AListEntry key={eachA.id} eachA={eachA} />
      ))}
      {/* {aData.map((eachA) => (
        <AListEntry key={eachA.id} eachA={eachA} />
      ))} */}
      <div className="py-3">
        {(aData.length < 1 || leng <= 2) ? null : <button type="button" className="bg-pastelGray text-white font-bold uppercase text-sm px-2 py-1 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleMoreAnswersClick}>{cap >= leng ? 'Collapse Answers' : 'See more answers'}</button>}
      </div>
    </div>
  );
}

export default AList;
