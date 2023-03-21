import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QAList from './QAList';

function QAHome({ prodId }) {
  const [qList, setQList] = useState([]);

  // console.log(prodId);
  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      headers: {
        Authorization: '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',
      },
      params: {
        product_id: prodId,
      },
    })
      .then((response) => {
        console.log(response.data.results);
        setQList(response.data.results);
      })
      .catch((err) => console.error('Error getting QA data', err));
  }, []);
  // console.log(qList);

  return (
    <div>
      <QAList qList={qList} />
    </div>
  );
}

export default QAHome;
