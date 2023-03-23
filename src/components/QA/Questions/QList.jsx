import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QListEntry from './QListEntry';
import QModal from '../Modals/QModal';

function QList({ prodId }) {
  const [prodName, setProdName] = useState('');
  const [listOfQs, setListOfQs] = useState([]);
  const [openQModal, setOpenQModal] = useState(false);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${prodId}`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        console.log(response.data.results);
        setListOfQs(response.data.results);
      })
      .catch((err) => {
        throw new Error('Error getting QA data', err);
      });

    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        setProdName(response.data[2].name);
      })
      .catch((err) => {
        throw new Error('Error getting Product name', err);
      });
  }, []);

  return (
    <>
      <div className="text-2xl uppercase py-3">Questions & Answers</div>
      <div className="flex-col">
        {listOfQs.map((eachQ) => (
          <QListEntry key={eachQ.question_id} eachQ={eachQ} prodName={prodName} />
        ))}
      </div>
      <div className="flex items-center justify-start space-x-10 p-6">
        <button className="bg-pastelGray text-white font-bold uppercase text-sm px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">More Answered Questions</button>
        <button className="bg-pastelGray text-white font-bold uppercase text-sm px-4 py-2 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={() => setOpenQModal(true)}>Add A Question</button>
      </div>
      {openQModal ? <QModal prodName={prodName} setOpenQModal={setOpenQModal} /> : null}
    </>
  );
}

export default QList;
