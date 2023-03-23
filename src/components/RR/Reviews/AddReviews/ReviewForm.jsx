import React, { useState } from 'react';
import Stars from '../../Stars';
import CharacterInput from './CharacterInput';

function ReviewForm({ reviewsMeta }) {
  // const [stars, setStars] = useState(0);

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
      <label htmlFor="summary">
        Summary:
        <input className="ml-1" name="summary" maxLength="60" placeholder="Example: Best Purchase ever!" defaultValue="" />
      </label>
      <label htmlFor="body">
        Review:
        <input className="ml-1" name="body" maxLength="1000" placeholder="Why did you like the product or not?" defaultValue="" />
      </label>
      <button className="text-black border-2 border-black font-bold py-4 px-4 mr-2 rounded" type="button">Upload Photo</button>
      <label htmlFor="nickname">
        Nickname:
        <input className="ml-1" name="nickname" maxLength="60" placeholder="Example: jackson11!" defaultValue="" />
      </label>
      <div>For privacy reasons, do not use your full name or email address</div>
      <label htmlFor="email">
        Email:
        <input className="ml-1" name="email" maxLength="60" placeholder="Example: jackson11@email.com" defaultValue="" />
      </label>
      <div>For authentication reasons, you will not be emailed</div>
    </form>
  );
}

export default ReviewForm;
