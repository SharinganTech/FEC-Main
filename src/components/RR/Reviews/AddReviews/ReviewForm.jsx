import React, { useState } from 'react';
import Stars from '../../Stars';
import CharacterInput from './CharacterInput';

function ReviewForm({ reviewsMeta }) {
  const [stars, setStars] = useState(0);

  return (
    <form>
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
      <div>characteristics section</div>
      {Object.keys(reviewsMeta.characteristics).map((key) => (
        <CharacterInput
          key={reviewsMeta.characteristics[key].id}
          characteristic={key}
        />
      ))}
    </form>
  );
}

export default ReviewForm;
