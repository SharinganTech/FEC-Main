import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QListEntries from './QListEntries';

function QList({ prodId }) {
  const [listOfQs, setListOfQs] = useState([]);

  // console.log(prodId);
  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions', {
      headers: {
        Authorization: process.env.AUTH_TOKEN,
      },
      params: {
        product_id: prodId,
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
  // console.log(listOfQs);

  return (
    <div className="flex">
      {listOfQs.map((eachQ) => (
        <QListEntries key={eachQ.question_id} eachQ={eachQ} />
      ))}
    </div>
  );
}

export default QList;

// import React from 'react';
// import QAListEntry from './QAListEntry';

// function QAList({ qList }) {
//   // const [qList, setQList] = useState([]);
//   // console.log(qList)

//   function qListRender(list) {
//     return list.map((eachQ) => (
//       <QAListEntry key={eachQ.question_id} eachQ={eachQ} />
//     ));
//   }

//   return (
//     <div className="flex">
//       {qListRender(qList)}
//     </div>
//   );
// }

// export default QAList;
