import React, { useState } from 'react';

function QModal({ prodInfo, setOpenQModal, axPost }) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  function handleQModalClick(e) {
    e.preventDefault();

    if (body && name && email) {
      axPost({
        body,
        name,
        email,
        product_id: prodInfo.id,
      });
      setOpenQModal(false);
    }
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 shadow-lg outline-none focus:outline-none bg-slate-500/50">
      <form data-testid="qmod-form" className="bg-[#EDF1FF] shadow-md rounded w-[600px]" onSubmit={handleQModalClick}>
        <div data-testid="qmod-title" className="text-3xl text-white font-semibold bg-pastelBlack px-8 pt-6 pb-8">{`About the ${prodInfo.name}`}</div>
        <div className="shadow-inner px-8 pt-6 pb-8 ">
          <div data-testid="qmod-question" className="relative p-6 flex-auto">
            <label className="block text-black text-sm font-bold mb-1" htmlFor="answer">
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer" maxLength="1000" required onChange={(e) => setBody(e.target.value)} />
              Your Question
              <span className="text-red-600" id="required">*</span>
            </label>
          </div>
          <div data-testid="qmod-name" className="relative p-6 flex-auto">
            <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-nickname">
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer-nickname" placeholder="Example: jack543!" maxLength="60" required onChange={(e) => setName(e.target.value)} />
              What is your nickname
              <span className="text-red-600">*</span>
            </label>
            <p className="text-xs">For privacy reasons, do not use your full name or email address</p>
          </div>
          <div data-testid="qmod-email" className="relative p-6 flex-auto">
            <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-email">
              <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="email" name="answer-email" placeholder="Example: jack@email.com" maxLength="60" required onChange={(e) => setEmail(e.target.value)} />
              Your email
              <span className="text-red-600">*</span>
            </label>
            <p className="text-xs">For authentication reasons, you will not be emailed</p>
          </div>
          <div className="flex items-center justify-around pt-6">
            <button data-testid="qmod-cancel-btn" className="text-black border-2 border-black uppercase font-bold py-4 px-4 mr-2 rounded" type="button" onClick={() => setOpenQModal(false)}>Cancel</button>
            <button data-testid="qmod-submit-btn" className="text-black border-2 border-black uppercase font-bold py-4 px-4 mr-2 rounded" type="submit">Submit Question</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default QModal;
