import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar, faStarHalfStroke } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Stars({ rating, numReviews }) {
  // console.log('rating', rating);
  const fullStars = Math.floor(rating);
  // console.log('fullstars', fullStars);
  const halfStars = Math.ceil(rating - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <div>
      {numReviews > 0 && (
        <div className="star-rating">
          {[...Array(fullStars)].map((_, index) => (
            <FontAwesomeIcon key={`full-${index + 1}`} icon={faStar} style={{ color: '#000000' }} />
          ))}
          {[...Array(halfStars)].map((_, index) => (
            <FontAwesomeIcon key={`half-${index + 1}`} icon={faStarHalfStroke} style={{ color: '#000000' }} />
          ))}
          {[...Array(emptyStars)].map((_, index) => (
            <FontAwesomeIcon key={`empty-${index + 1}`} icon={farStar} style={{ color: '#000000' }} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Stars;
