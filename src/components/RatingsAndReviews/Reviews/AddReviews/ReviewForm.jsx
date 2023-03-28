import React, { useState, useContext } from 'react';
import axios from 'axios';
import AddReviewStars from './AddReviewStars';
import CharacterInput from './CharacterInput';
import ProductContext from '../../../../contexts/ProductContext';

function ReviewForm({ reviewsMeta, setShowModal }) {
  const product = useContext(ProductContext);
  const prodDes = { product };
  const prod = prodDes.product;
  const [stars, setStars] = useState(0);
  const [reviewImages, setReviewImages] = useState([]);
  const [showStarWarning, setShowStarWarning] = useState(false);
  const [bodyCharacters, setBodyCharacters] = useState(0);
  const [showBodyWarning, setShowBodyWarning] = useState(false);

  function handleUploadClick(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setReviewImages((prev) => [...prev, { ...file, url: reader.result }]);
    };
    reader.readAsDataURL(file);
  }

  function validateForm(e) {
    e.preventDefault();
    if (stars === 0 && bodyCharacters < 50) {
      setShowStarWarning(true);
      setShowBodyWarning(true);
    } else if (stars === 0) {
      setShowBodyWarning(true);
    } else if (bodyCharacters < 50) {
      setShowBodyWarning(true);
    } else {
      const form = e.target;
      // const formData = new FormData(form);
      const recommend = form.recommended.value === 'yes';
      const characteristics = {};
      Object.keys(reviewsMeta.characteristics).forEach((factor) => {
        const charID = reviewsMeta.characteristics[factor].id;
        const char = factor.toLowerCase();
        characteristics[charID] = Number(form[char].value);
      });
      axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', {
        product_id: prod.id,
        rating: stars,
        summary: form.summary.value,
        body: form.body.value,
        recommend,
        name: form.nickname.value,
        email: form.email.value,
        photos: [],
        characteristics,
      }, {
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
      })
        .then((res) => {
          console.log('success:', res);
        })
        .catch((err) => {
          throw new Error('Error getting review data', err);
        });
      setShowModal(false);
    }
  }

  return (
    <form className="flex flex-col w-[85%] ml-[7.5%]" onSubmit={(e) => validateForm(e)}>
      <div className="text-2xl my-2">
        <AddReviewStars
          rating={stars}
          setStars={setStars}
          setShowStarWarning={setShowStarWarning}
        />
        {showStarWarning ? (
          <p className="text-red-500 text-xs italic">Please select a star rating.</p>
        ) : null}
      </div>
      <div className="flex flex-row">
        <div>Do you recommend this product?</div>
        <div className="flex items-center">
          <label className="m-2 text-sm font-medium" htmlFor="yes">
            <input className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" type="radio" name="recommended" value="yes" required />
            Yes
          </label>
        </div>
        <label className="m-2 text-sm font-medium" htmlFor="no">
          <input className="w-3 h-3 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2" type="radio" name="recommended" value="no" required />
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
      <div className="flex flex-col -mx-3 mb-4">
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="summary">
            Summary:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="summary" maxLength="60" placeholder="Example: Best Purchase ever!" defaultValue="" />
          </label>
        </div>
        <div className="mb-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="body">
            Review:
            <textarea onChange={(e) => setBodyCharacters(e.target.value.length)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="body" maxLength="1000" rows="5" placeholder="Why did you like the product or not?" required defaultValue="" />
          </label>
          {bodyCharacters <= 50 ? (
            <p className={`text-xs italic ${showBodyWarning ? 'text-red-500' : null}`}>
              Minimum required characters left:
              {' '}
              {50 - bodyCharacters}
            </p>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-bold mb-1 mr-2" htmlFor="review-photos">
            Upload your photos (max 5)
            {reviewImages.length < 5 && (
              <button type="button">
                <input
                  className="ml-2 block w-full text-sm text-slate-500
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
            <div className="flex gap-x-4 my-4">
              {reviewImages.map(({ name, url }, i) => <img className="w-[100px] h-[100px] aspect-auto" alt="Review" key={`${i + 1}-${name}`} src={url} />)}
            </div>
          </label>
        </div>
        {/* <button className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded"
        type="button">Upload Photo</button> */}

        <div className="mb-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nickname">
            Nickname:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="nickname" maxLength="60" placeholder="Example: jackson11!" required defaultValue="" />
          </label>
          <p className="text-xs italic">For privacy reasons, do not use your full name or email address</p>
        </div>
        <div>
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            Email:
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="email" name="email" maxLength="60" placeholder="Example: jackson11@email.com" required defaultValue="" />
          </label>
          <p className="text-xs italic">For authentication reasons, you will not be emailed</p>
        </div>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        {showStarWarning ? (
          <div className="text-red-500 text-s italic mr-6">Star rating required above</div>
        ) : null}
        {showBodyWarning && bodyCharacters < 50 ? (
          <div className="text-red-500 text-s italic mr-6">Review body must contain at least 50 characters</div>
        ) : null}
        <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;

/* <div className="">
  <label className="block uppercase tracking-wide text-gray-700
  text-xs font-bold mb-2" htmlFor="imageUrl">
    Image url:
    <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" name="imageUrl" maxLength="60" placeholder="Example: https://res.cloudinary.com/cloverhong/image/upload/v1649959865/vrxnynrz7wwvbmoybntc.jpg" defaultValue="" />
  </label>
  <p className="text-xs italic">Nothing here rn</p>
</div> */
