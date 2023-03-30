import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { generatePartialStar } from './HelperFunctions';

function Stars({ rating, numReviews, color }) {
  // console.log('rating', rating);
  const fullStars = Math.floor(rating);
  // console.log('fullstars', fullStars);
  let halfStars;
  // if the rating minus the fullStars is less then 0.25, there should be no partial stars
  if (rating - fullStars < 0.25) {
    halfStars = 0;
  } else {
    halfStars = 1;
  }
  const emptyStars = 5 - fullStars - halfStars;

  // use conditional rendering to render a quarter, half, and three quarter stars
  return (
    <div data-testid="stars">
      {numReviews > 0 && (
        <div className="relative flex flex-row">
          {[...Array(fullStars)].map((_, index) => (
            <FontAwesomeIcon key={`full-${index + 1}`} icon={faStar} style={{ color: '#000000' }} />
          ))}
          {halfStars === 1 && generatePartialStar(fullStars, rating, color)}
          {[...Array(emptyStars)].map((_, index) => (
            <FontAwesomeIcon key={`empty-${index + 1}`} icon={farStar} style={{ color: '#000000' }} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Stars;
