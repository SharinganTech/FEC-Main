import React from 'react';
import QAListEntry from './QAListEntry';

function QAList({ qList }) {
  // const [qList, setQList] = useState([]);
  // console.log(qList)

  function qListRender(list) {
    return list.map((eachQ) => (
      <QAListEntry key={eachQ.question_id} eachQ={eachQ} />
    ));
  }

  return (
    <div>
      {qListRender(qList)}
    </div>
  );
}

export default QAList;
