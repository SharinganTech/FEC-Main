import React from 'react';

function QModal({ setOpenQModal }) {
  function handleQModalClick() {
    setOpenQModal(false);
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
        <div className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer" maxLength="1000" required />
            Your Question
            <span id="required">*</span>
          </label>
        </div>
        <div className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-nickname">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer-nickname" placeholder="Example: jack543!" maxLength="60" required />
            What is your nickname
            <span id="required">*</span>
          </label>
        </div>
        <div className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-email">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer-email" placeholder="Example: jack@email.com" maxLength="60" required />
            Your email
            <span id="required">*</span>
          </label>
        </div>
        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
          <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={handleQModalClick}>Submit Question</button>
        </div>
      </form>
    </div>
  );
}

export default QModal;
