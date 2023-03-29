/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';

function AModal({
  prodInfo, question, setOpenA, axPostAnswer,
}) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoUploads, setPhotoUploads] = useState([]);

  function handleAModalClick(e) {
    e.preventDefault();

    if (body && name && email) {
      axPostAnswer({
        body, name, email, photos: [''],
      });
      setOpenA(false);
    }
  }

  // console.log(photoUploads);
  function handleUploadClick(e) {
    const file = e.target.files[0];
    const currFiles = [...photoUploads];

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoUploads((prev) => {
        if (currFiles.findIndex((photo) => photo.url === reader.result) < 0) {
          return [...prev, { ...file, url: reader.result }];
        }
        return [...prev];
      });
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <form data-testid="amod-form" className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full" onSubmit={handleAModalClick}>
        <div data-testid="amod-main-title" className="text-3xl font-semibold">Submit Your Answer</div>
        <div data-testid="amod-p-title" className="text-xl font-semibold">
          {`Product: ${prodInfo.name} `}
        </div>
        <div data-testid="amod-q-title" className="text-xl font-semibold">
          {`Question: ${question} `}
        </div>
        <div data-testid="amod-answer" className="relative p-6 flex-auto">
          <label id="amod-answer" className="block text-black text-sm font-bold mb-1" htmlFor="answer">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer" maxLength="1000" required onChange={(e) => setBody(e.target.value)} />
            Your Answer
            <span className="text-red-600" id="required">*</span>
          </label>
        </div>
        <div data-testid="amod-name" className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-nickname">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="text" name="answer-nickname" placeholder="Example: jack543!" maxLength="60" required onChange={(e) => setName(e.target.value)} />
            What is your nickname
            <span className="text-red-600" id="required">*</span>
          </label>
          <p className="text-xs">For privacy reasons, do not use your full name or email address</p>
        </div>
        <div data-testid="amod-email" className="relative p-6 flex-auto">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-email">
            <input className="shadow appearance-none border rounded w-full py-2 px-1 text-black" type="email" name="answer-email" placeholder="Example: jack@email.com" maxLength="60" required onChange={(e) => setEmail(e.target.value)} />
            Your email
            <span className="text-red-600" id="required">*</span>
          </label>
          <p className="text-xs">For authentication reasons, you will not be emailed</p>
        </div>
        <div data-testid="amod-photos" className="relative p-6 flex-auto" id="photo-upload">
          <label className="block text-black text-sm font-bold mb-1" htmlFor="answer-photos">
            {photoUploads.length < 5 && (
              <input
                className="block w-full text-sm
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-pastelGray file:text-white"
                type="file"
                name="answer-photos"
                accept="image/*"
                // multiple
                onChange={handleUploadClick}
              />
            )}
            Upload your photos (max 5)
            <div className="flex gap-x-4">
              {photoUploads.map(({ name, url }, i) => <img className="w-[100px] h-[100px] aspect-auto" alt={name} key={`${name}-${i}`} src={url} />)}
            </div>
          </label>
        </div>
        <div className="flex items-center justify-around pt-6">
          <button data-testid="amod-cancel-btn" className="border-[1px] border-slate-600 font-semibold uppercase text-sm py-4 px-6 rounded-sm shadow-inner mr-1 mb-1" type="button" onClick={() => setOpenA(false)}>Cancel</button>
          <button data-testid="amod-submit-btn" className="border-[1px] border-slate-600 font-semibold uppercase text-sm p-4 rounded-sm shadow-inner mr-1 mb-1" type="submit">Submit Answer</button>
        </div>
      </form>
    </div>
  );
}

export default AModal;
