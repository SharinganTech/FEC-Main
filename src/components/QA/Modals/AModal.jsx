import React, { useState } from 'react';

function AModal({ name, question, setOpenA }) {
  const [aMAnswer, setAMAnswer] = useState('');
  const [aMNickname, setAMNickname] = useState('');
  const [aMEmail, setAMEmail] = useState('');
  // const [aMPhotos, setAMPhotos] = useState('');

  function handleAModalClick() {
    setOpenA(false);
    // if (aMAnswer && aMNickname && aMEmail) {
    // } else {
    //   // eslint-disable-next-line no-alert
    //   alert('Please fill out the required fields');
    // }
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
        <div className="text-3xl font-semibold">Submit Your Answer</div>
        <div className="text-xl font-semibold">
          {`Product: ${question} `}
        </div>
        <div className="text-xl font-semibold">
          {`Question: ${question} `}
        </div>
        <div className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer" maxLength="1000" onChange={(e) => setAMAnswer(e.target.value)} />
            Your Answer
            <span id="required">*</span>
          </label>
        </div>
        <div className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-nickname">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer-nickname" placeholder="Example: jack543!" maxLength="60" onChange={(e) => setAMNickname(e.target.value)} />
            What is your nickname
            <span id="required">*</span>
          </label>
          <p className="text-xs">For privacy reasons, do not use your full name or email address</p>
        </div>
        <div className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-email">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer-email" placeholder="Example: jack@email.com" maxLength="60" onChange={(e) => setAMEmail(e.target.value)} />
            Your email
            <span id="required">*</span>
          </label>
          <p className="text-xs">For authentication reasons, you will not be emailed</p>
        </div>
        <div className="relative p-6 flex-auto" id="photo-upload">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-photos">
            <input
              className="block w-full text-sm text-slate-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-pastelGray file:text-white"
              type="file"
              name="answer-photos"
            />
            Upload your photos
          </label>
        </div>
        <div className="flex items-center justify-end p-6">
          <button className="bg-pastelGray text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={handleAModalClick}>Submit Answer</button>
        </div>
      </form>
    </div>
  );
}

export default AModal;
