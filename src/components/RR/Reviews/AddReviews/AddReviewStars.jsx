import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Stars({ rating, setStars, setShowWarning }) {
  const fullStars = rating;
  const emptyStars = 5 - fullStars;

  const ratingMeanings = ['1 star - “Poor”',
    '2 stars - “Fair”',
    '3 stars - “Average”',
    '4 stars - “Good”',
    '5 stars - “Great”',
  ];

  return (
    <div className="flex flex-row">
      <div className="star-rating">
        {[...Array(fullStars)].map((_, index) => (
          <FontAwesomeIcon
            onClick={() => {
              setStars(index + 1);
              setShowWarning(false);
            }}
            key={`full-${index + 1}`}
            icon={faStar}
            style={{ color: '#000000' }}
          />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FontAwesomeIcon
            onClick={() => {
              setStars(index + 1 + rating);
              setShowWarning(false);
            }}
            key={`empty-${index + 1}`}
            icon={farStar}
            style={{ color: '#000000' }}
          />
        ))}
      </div>
      <div className="text-base ml-4 mt-1 text-black">{rating !== 0 ? ratingMeanings[rating - 1] : '*Required'}</div>
    </div>
  );
}

export default Stars;
