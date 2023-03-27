import React, { useState } from 'react';

function QModal({ axPost, prodInfo, setOpenQModal }) {
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
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 shadow-lg outline-none focus:outline-none">
      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full outline-none focus:outline-none" onSubmit={handleQModalClick}>
        <div className="text-3xl font-semibold">{`About the ${prodInfo.name}`}</div>
        <div className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer" maxLength="1000" required onChange={(e) => setBody(e.target.value)} />
            Your Question
            <span className="text-red-600" id="required">*</span>
          </label>
        </div>
        <div className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-nickname">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer-nickname" placeholder="Example: jack543!" maxLength="60" required onChange={(e) => setName(e.target.value)} />
            What is your nickname
            <span className="text-red-600">*</span>
          </label>
          <p className="text-xs">For privacy reasons, do not use your full name or email address</p>
        </div>
        <div className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-email">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="email" name="answer-email" placeholder="Example: jack@email.com" maxLength="60" required onChange={(e) => setEmail(e.target.value)} />
            Your email
            <span className="text-red-600">*</span>
          </label>
          <p className="text-xs">For authentication reasons, you will not be emailed</p>
        </div>
        <div className="flex items-center justify-around pt-6">
          <button className="border-[1px] border-slate-600 font-semibold uppercase text-sm p-4 rounded-sm shadow-inner mr-1 mb-1" type="button" onClick={() => setOpenQModal(false)}>Cancel</button>
          <button className="border-[1px] border-slate-600 font-semibold uppercase text-sm p-4 rounded-sm shadow-inner mr-1 mb-1" type="submit">Submit Question</button>
        </div>
      </form>
    </div>
  );
}

export default QModal;
