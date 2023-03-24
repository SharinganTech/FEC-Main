import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmarkSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar} from '@fortawesome/free-regular-svg-icons';
import '../RR/Stars.css';

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

// export function stars(rating) {
//   if (Object.keys(rating).length > 0) {
//     const avgRating = generateAverage(rating);
//     const fill = (avgRating * 100) / 5;
//     console.log(fill, '%');
//     return (
//       <div className="star-rating">
//         {[...Array(5)].map(() => (
//           <FontAwesomeIcon icon={farStar} style={{ color: '#000000' }} className="bg-white" />
//         ))}
//         {/* <div className={`stars-inner w-[0%]`} /> */}
//         {/* {avgRating} */}
//       </div>
//     );
//   }
//   return (
//     <div className="stars-outer">
//       <div className="stars-inner w-[0%]" />
//     </div>
//   );
// }
