import React, { useState } from 'react';
import Stars from '../../Stars';
import CharacterInput from './CharacterInput';
import Modal from '../Modal';

function ReviewForm({ reviewsMeta }) {
  // const [stars, setStars] = useState(0);
  const [showImageUpload, setShowImageUpload] = useState(false);
  const [reviewImages, setReviewImages] = useState([]);

  const imageUpload = (
    <button onClick={() => setShowImageUpload(false)} className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded" type="button">Complete upload</button>
  );

  return (
    <form className="flex flex-col">
      <Stars />
      <div className="flex flex-row">
        <div>Do you recommend this product?</div>
        <label className="mx-2" htmlFor="yes">
          <input type="radio" name="recommended" value="yes" defaultChecked />
          Yes
        </label>
        <label className="mx-2" htmlFor="no">
          <input type="radio" name="recommended" value="no" />
          No
        </label>
      </div>
      <div className={`grid grid-rows-${reviewsMeta.characteristics.length}`}>
        {Object.keys(reviewsMeta.characteristics).map((key) => (
          <CharacterInput
            key={reviewsMeta.characteristics[key].id}
            characteristic={key}
          />
        ))}
      </div>
      <div className="flex flex-wrap -mx-3 mb-4">
        <div className="w-3/4 ml-[12.5%]">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="summary">
            Summary:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="summary" maxLength="60" placeholder="Example: Best Purchase ever!" defaultValue="" />
          </label>
          <p className="text-red-500 text-xs italic">cond render:Please fill out this field.</p>
        </div>
        <div className="w-3/4 ml-[12.5%]">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="body">
            Review:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="body" maxLength="1000" placeholder="Why did you like the product or not?" defaultValue="" />
          </label>
          <p className="text-red-500 text-xs italic">cond render:Please fill out this field.</p>
        </div>
        <button onClick={() => setShowImageUpload(true)} className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded" type="button">Upload Photo</button>
        {showImageUpload ? <Modal modalContent={imageUpload} /> : null}
        <div className="w-3/4 ml-[12.5%]">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nickname">
            Nickname:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="nickname" maxLength="60" placeholder="Example: jackson11!" defaultValue="" />
          </label>
          <p className="text-xs italic">For privacy reasons, do not use your full name or email address</p>
        </div>
        <div className="w-3/4 ml-[12.5%]">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" defaultValue="" />
          </label>
          <p className="text-xs italic">For authentication reasons, you will not be emailed</p>
        </div>
      </div>
    </form>
  );
}

export default ReviewForm;
