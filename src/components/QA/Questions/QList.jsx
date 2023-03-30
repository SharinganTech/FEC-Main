/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QListEntry from './QListEntry';
import QModal from '../Modals/QModal';
import SearchQuestion from '../Search/SearchQuestion';
// import './Questions.css';
// import axiosGet from '../HelperFunctions/axiosGet';

function QList({ prodInfo }) {
  const [listOfQs, setListOfQs] = useState([]);
  const [openQModal, setOpenQModal] = useState(false);
  const [qCap, setQCap] = useState(2);
  const [searchInput, setSearchInput] = useState('');
  const [searchOn, setSearchOn] = useState(false);
  const listView = listOfQs.slice(0, qCap);
  const qLeng = listOfQs.length;

  function axGet() {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${prodInfo.id}&count=100`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        // console.log(response.data.results);
        const sortedData = response.data.results.sort((a, b) => b.helpfulness - a.helpfulness);
        setListOfQs(sortedData);
      })
      .catch((err) => {
        throw new Error('Error getting QA data', err);
      });
  }

  useEffect(() => {
    axGet();
  }, []);

  function axPost(data) {
    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', data, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then(() => {
        axGet();
      });
  }

  function handleMoreQsClick() {
    setQCap((state) => state + 2);
  }

  function renderQList() {
    const filtered = listOfQs.filter((q) => q.question_body.includes(searchInput));
    if (searchOn) {
      return filtered.map((eachQ) => (
        <QListEntry key={eachQ.question_id} eachQ={eachQ} prodInfo={prodInfo} axGet={axGet} />
      ));
    }
    // return listOfQs.map((eachQ) => (
    //   <QListEntry key={eachQ.question_id} eachQ={eachQ} prodInfo={prodInfo} axGet={axGet} />
    // ));
    return listView.map((eachQ, i) => (
      <div data-testid="qlist-entry" key={i}>
        <QListEntry key={eachQ.question_id} eachQ={eachQ} prodInfo={prodInfo} axGet={axGet} />
      </div>
    ));
  }

  return (
    <>
      <div data-testid="q-list" className="text-2xl uppercase py-3">Questions & Answers</div>
      <SearchQuestion
        setSearchOn={setSearchOn}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />
      <div className="flex-col overflow-y-auto max-h-[600px]">
        {renderQList()}
      </div>
      <div data-testid="more-questions-btn" className="flex items-center justify-start space-x-10 p-6">
        {qLeng < qCap ? null
          : (
            <button className="text-black border-2 border-black uppercase font-bold py-4 px-4 mr-2 rounded" type="button" onClick={handleMoreQsClick}>More Answered Questions</button>
          )}
        <button className="text-black border-2 border-black uppercase font-bold py-4 px-4 mr-2 rounded" type="button" onClick={() => setOpenQModal(true)}>Add A Question</button>
      </div>
      {openQModal
        ? (
          <QModal
            prodInfo={prodInfo}
            setOpenQModal={setOpenQModal}
            axPost={axPost}
          />
        ) : null}
    </>
  );
}

export default QList;
