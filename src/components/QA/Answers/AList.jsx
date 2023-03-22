import React, { useState, useEffect } from 'react';
import AListEntry from './AListEntry';

function AList({ eachQ }) {
  const [aData, setAData] = useState([]);
  const [cap, setCap] = useState(2);
  const leng = aData.length;
  const listView = aData.slice(0, cap);

  // const listView = aData;
  // console.log(capRef.current);

  useEffect(() => {
    const listData = Object.values(eachQ.answers);
    listData.sort((a, b) => b.helpfulness - a.helpfulness);
    // console.log(listData);
    setAData(listData);
  }, []);

  function handleMoreAnswersClick() {
    if (cap >= leng) {
      setCap(2);
    } else {
      setCap((state) => state + 2);
    }
  }

  function moreAnswersText() {
    if (leng > 2) {
      if (cap >= leng) {
        return 'Collapse Answers';
      }
      return 'See more answers';
    }
    return null;
  }

  return (
    <div className="flex-col overflow-y-auto max-h-[250px] relative" style={{ border: '1px solid red' }}>
      {listView.map((eachA) => (
        <AListEntry key={eachA.id} eachA={eachA} />
      ))}
      <button type="button" className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-1 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" onClick={handleMoreAnswersClick}>{moreAnswersText()}</button>
    </div>
  );
}

export default AList;
