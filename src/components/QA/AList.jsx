import React, { useState, useEffect, useRef } from 'react';
import AListEntry from './AListEntry';

function AList({ eachQ }) {
  const [aData, setAData] = useState([]);
  const [aListView, setAListView] = useState([]);
  const [isInitial, setIsInitial] = useState(true);
  const capRef = useRef(2);
  console.log(capRef.current);

  useEffect(() => {
    const listData = Object.values(eachQ.answers);
    listData.sort((a, b) => b.helpfulness - a.helpfulness);
    setAData(listData.slice(0, capRef.current));
  }, []);

  function aListRender() {
    // const listView = aData.slice(0, capRef.current);
    return aData.map((eachA) => (
      <AListEntry key={eachA.id} eachA={eachA} />
    ));
  }

  function handleMoreAnswersClick() {
    capRef.current += 2;
    aListRender(capRef.current);
    console.log(capRef.current);
  }

  // function aListPostRender() {
  //   const listView = aData.slice(0, capRef.current);
  //   return listView.map((eachA) => (
  //     <AListEntry key={eachA.id} eachA={eachA} />
  //   ));
  // }

  return (
    <div>
      {aListRender()}
      <button type="button" onClick={handleMoreAnswersClick}>See more answers</button>
    </div>
  );
}

export default AList;
