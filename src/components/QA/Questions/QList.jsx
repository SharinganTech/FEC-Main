import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QListEntries from './QListEntries';

function QList({ prodId }) {
  const [listOfQs, setListOfQs] = useState([]);

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
      params: {
        product_id: prodId,
        // product_id: 40344,
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
        <QListEntries key={eachQ.question_id} eachQ={eachQ} />
      ))}
    </div>
  );
}

export default QList;
