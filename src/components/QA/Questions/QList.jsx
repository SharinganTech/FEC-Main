import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QListEntry from './QListEntry';
import QModal from '../Modals/QModal';
import SearchQuestion from '../Search/SearchQuestion';

function QList({ prodInfo }) {
  // const [prodName, setProdName] = useState('');
  const [listOfQs, setListOfQs] = useState([]);
  const [openQModal, setOpenQModal] = useState(false);
  const [qCap, setQCap] = useState(2);
  const [searchInput, setSearchInput] = useState('');
  const [searchOn, setSearchOn] = useState(false);
  const qLeng = listOfQs.length;
  // const filtered = listOfQs.filter((q) => q.question_body.includes(searchInput));

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${prodInfo.id}`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        console.log(response.data.results);
        const sortedData = response.data.results.sort((a, b) => b.helpfulness - a.helpfulness);
        setListOfQs(sortedData);
      })
      .catch((err) => {
        throw new Error('Error getting QA data', err);
      });
  }, []);

  function handleMoreQsClick() {
    setQCap((state) => state + 2);
  }

  // function renderFilterList(query) {
  //   const filtered = listOfQs.filter((q) => q.question_body.includes(query));
  //   return filtered.map((eachQ) => (
  //     <QListEntry key={eachQ.question_id} eachQ={eachQ} prodInfo={prodInfo} />
  //   ));
  // }

  function renderQList() {
    const filtered = listOfQs.filter((q) => q.question_body.includes(searchInput));
    if (searchOn) {
      return filtered.map((eachQ) => (
        <QListEntry key={eachQ.question_id} eachQ={eachQ} prodInfo={prodInfo} />
      ));
    }
    return listOfQs.map((eachQ) => (
      <QListEntry key={eachQ.question_id} eachQ={eachQ} prodInfo={prodInfo} />
    ));
  }

  return (
    <>
      <div className="text-2xl uppercase py-3">Questions & Answers</div>
      <SearchQuestion
        setSearchOn={setSearchOn}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="flex-col overflow-y-auto max-h-[600px]">
        {renderQList()}
      </div>
      <div className="flex items-center justify-start space-x-10 p-6">
        {qLeng < qCap ? null
          : (
            <button className="bg-pastelGray text-white font-bold uppercase text-sm px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={handleMoreQsClick}>More Answered Questions</button>
          )}
        <button className="bg-pastelGray text-white font-bold uppercase text-sm px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setOpenQModal(true)}>Add A Question</button>
      </div>
      {openQModal ? <QModal prodInfo={prodInfo} setOpenQModal={setOpenQModal} /> : null}
    </>
  );
}

export default QList;
