import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QListEntry from './QListEntry';
// import AModal from '../Modals/AModal';

function QList({ prodId }) {
  const [listOfQs, setListOfQs] = useState([]);

  useEffect(() => {
    axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${prodId}`, {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
    })
      .then((response) => {
        // console.log(response.data.results);
        setListOfQs(response.data.results);
      })
      .catch((err) => {
        throw new Error('Error getting QA data', err);
      });
  }, []);

  return (
    <div className="flex-col">
      {listOfQs.map((eachQ) => (
        <QListEntry key={eachQ.question_id} eachQ={eachQ} />
      ))}
    </div>
  );
}

export default QList;
