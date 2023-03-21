import React, { useState, useEffect } from 'react';
import AListEntries from './AListEntries';

function AList({ eachQ }) {
  const [aData, setAData] = useState([]);
  const [cap, setCap] = useState(2);
  // console.log(capRef.current);

  useEffect(() => {
    const listData = Object.values(eachQ.answers);
    listData.sort((a, b) => b.helpfulness - a.helpfulness);
    // console.log(listData);
    setAData(listData);
  }, []);

  function handleMoreAnswersClick() {
    setCap((state) => state + 2);
  }

  const listView = aData.slice(0, cap);

  return (
    <div className="flex-col">
      {listView.map((eachA) => (
        <AListEntries key={eachA.id} eachA={eachA} />
      ))}
      <button className="flex text-blue-600" type="button" onClick={handleMoreAnswersClick}>See more answers</button>
    </div>
  );
}

export default AList;
