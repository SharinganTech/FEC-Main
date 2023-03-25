import React, { useState } from 'react';
import Stars from '../../../RIC/Stars';
import CharacterInput from './CharacterInput';
import Modal from '../Modal';

function ReviewForm({ reviewsMeta }) {
  const [stars, setStars] = useState(0);
  const [reviewImages, setReviewImages] = useState([]);

  function handleUploadClick(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    console.log('file', file);

    reader.onloadend = () => {
      setReviewImages((prev) => [...prev, { ...file, url: reader.result }]);
    };

    reader.readAsDataURL(file);
  }

  return (
    <form className="flex flex-col">
      <div className="text-[#798EA4] text-2xl ml-3 my-2">
        <Stars rating={stars} numReviews={1} />
      </div>
      <div className="flex flex-row">
        <div>Do you recommend this product?</div>
        <div className="flex items-center mb-4">
          <label className="ml-2 text-sm font-medium text-gray-900" htmlFor="yes">
            <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" type="radio" name="recommended" value="yes" defaultChecked />
            Yes
          </label>
        </div>
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
        <div className="w-[85%] ml-[7.5%]">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="summary">
            Summary:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="summary" maxLength="60" placeholder="Example: Best Purchase ever!" defaultValue="" />
          </label>
          {/* <p className="text-red-500 text-xs italic">
          cond render:Please fill out this field.</p> */}
        </div>
        <div className="w-[85%] ml-[7.5%]">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="body">
            Review:
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="body" maxLength="1000" rows="5" placeholder="Why did you like the product or not?" defaultValue="" />
          </label>
        </div>

        <label className="block text-black text-sm font-bold mb-1" htmlFor="review-photos">
          {reviewImages.length < 5 && (
            <button type="button">
              <input
                className="block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-pastelGray file:text-white"
                type="file"
                name="review-photos"
                accept="image/*"
                multiple
                onChange={handleUploadClick}
              />
            </button>
          )}
          Upload your photos (max 5)
          <div className="flex gap-x-4">
            {reviewImages.map(({ name, url }, i) => <img className="w-[100px] h-[100px] aspect-auto" alt="Review" key={`${i + 1}-${name}`} src={url} />)}
          </div>
        </label>
        {/* <button onClick={() => setShowImageUpload(true)} className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded" type="button">Upload Photo</button> */}

        <div className="w-[85%] ml-[7.5%]">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nickname">
            Nickname:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="nickname" maxLength="60" placeholder="Example: jackson11!" defaultValue="" />
          </label>
          <p className="text-xs italic">For privacy reasons, do not use your full name or email address</p>
        </div>
        <div className="w-[85%] ml-[7.5%]">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="email" maxLength="60" placeholder="Example: jackson11@email.com" defaultValue="" />
          </label>
          <p className="text-xs italic">For authentication reasons, you will not be emailed</p>
        </div>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button onClick={() => setShowModal(false)} className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded" type="button">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;

{/* <div className="w-[85%] ml-[7.5%]">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="imageUrl">
    Image url:
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="imageUrl" maxLength="60" placeholder="Example: https://res.cloudinary.com/cloverhong/image/upload/v1649959865/vrxnynrz7wwvbmoybntc.jpg" defaultValue="" />
  </label>
  <p className="text-xs italic">Nothing here rn</p>
</div> */}