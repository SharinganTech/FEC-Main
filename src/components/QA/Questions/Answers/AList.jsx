import React, { useState, useEffect } from 'react';
import AListEntries from './AListEntries';

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
    console.log(listData);
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
    <div className="flex-col overflow-y-auto max-h-[250px] max-w-[800px]" style={{ border: '1px solid red' }}>
      {listView.map((eachA) => (
        <AListEntries key={eachA.id} eachA={eachA} />
      ))}
      <button type="button" className="flex text-blue-600" onClick={handleMoreAnswersClick}>{moreAnswersText()}</button>
    </div>
  );
}

export default AList;
