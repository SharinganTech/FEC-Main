import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmarkSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

export function generateAverage(ratings) {
  let totalScore = 0;
  let totalRatings = 0;
  Object.keys(ratings).forEach((key) => {
    totalScore += (Number(key) * Number(ratings[key]));
    totalRatings += Number(ratings[key]);
  });
  return [(Math.round((totalScore / totalRatings) * 4) / 4).toFixed(2), totalRatings];
}

export function includesFeature(overviewFeat, selectedItem) {
  // overviewFeat is an object {feature: , value: };
  // selectedItem is an array of feature objects [{}, {}]
  // loop through the selectedItem
  for (let i = 0; i < selectedItem.length; i += 1) {
    // if the current object feature value equals the overviewFeat feature value return the value
    if (selectedItem[i].feature === overviewFeat.feature) {
      return selectedItem[i].value;
    }
  }
  return 'N/A';
}

export function overviewContains(selectedItemFeat, overviewFeats) {
  for (let i = 0; i < overviewFeats.length; i += 1) {
    if (overviewFeats[i].feature === selectedItemFeat.feature) {
      return true;
    }
  }
  return false;
}

export function featureValue(value) {
  if (!value) {
    return (<FontAwesomeIcon icon={faXmarkSquare} />);
  }
  if (value === true) {
    return (<FontAwesomeIcon icon={faCheck} />);
  }
  return value;
}

export function doesItInclude(prod, yourOutfit) {
  if (yourOutfit.length > 0) {
    // loop through the yourOutfit array
    for (let i = 0; i < yourOutfit.length; i += 1) {
      // check if the id matches the product id
      if (yourOutfit[i].id === prod.id) {
        // return true if there's a match
        return true;
      }
    }
    // return false after the loop
    return false;
  }
  return false;
}

export function generatePartialStar(fullStars, rating, color) {
  const partialStar = rating - fullStars;
  let fill;
  if (partialStar < 0.5) {
    fill = 50;
  } else if (partialStar < 0.75) {
    fill = 35;
  } else if (partialStar <= 0.99) {
    fill = 25;
  }
  return (
    <div className="relative flex flex-row w-[16px]">
      <FontAwesomeIcon key={`full-${fill}`} icon={faStar} style={{ color: '#000000' }} className="star-fill absolute content-center z-10 right-0" />
      <div className={`bg-[#${color}] absolute content-center z-10 right-0.5`} style={{ width: `${fill}%` }}>&nbsp;</div>
      <FontAwesomeIcon key={`empty-${fill}`} icon={farStar} style={{ color: '#000000' }} className="star-outline absolute content-center z-20 right-0" />
    </div>
  );
}

// export function getRatings() {

// };
