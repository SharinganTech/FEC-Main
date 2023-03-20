import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import RatingStars from './RatingStars';
import Loading from './Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStar } from '@fortawesome/free-solid-svg-icons';

function CardListEntry({ relatedItem }) {
  const [thumbnail, setThumbNail] = useState('');
  const [rating, setRating] = useState(0);
  const [clicked, setClick] = useState(false);

  useEffect(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedItem.id}/styles`, {
        headers: {
          Authorization: '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',
        },
      })
      .then(({ data }) => {
        const photo = data.results[0].photos[0].thumbnail_url;
        if (photo === null) {
          setThumbNail('/Users/aidan/Programming/HackReactor/FEC/FEC-Main/assets/Image_not_available.png');
        } else {
          setThumbNail(photo);
        }
      })
      .then(() => axios
        .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', {
          headers: {
            Authorization: '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',
          },
          params: {
            product_id: relatedItem.id,
          },
        }))
      .then((results) => {
        const listOfRatings = results.data.results;
        // console.log(listOfRatings);
        const avgRating = (listOfRatings.reduce((acc, curr) => (
          acc + curr.rating
        ), 0)) / listOfRatings.length;
        // console.log(avgRating);
        setRating(avgRating);
      })
      .catch((err) => console.log(`Error ${err} in CardListEntry axios get request`));
  }, []);

  return (
    <div>
      {thumbnail.length === 0 ? <Loading />
        : (
          <div>
            <img src={thumbnail} alt="item default" />
            <div>{relatedItem.category}</div>
            <div>{relatedItem.name}</div>
            <div>{relatedItem.default_price}</div>
            <div>{rating}</div>
            {!clicked
              ? (
                <div
                  onClick={() => {
                    setClick(!clicked);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyPress={() => {
                    setClick(!clicked);
                  }}
                >
                  <FontAwesomeIcon icon={farStar} style={{color: "#000000",}} />
                </div>
              )
              : (
                <div
                  onClick={() => {
                    setClick(!clicked);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyPress={() => {
                    setClick(!clicked);
                  }}
                >
                  <FontAwesomeIcon icon={faStar} style={{color: "#fff700",}} />
                </div>
              )}
            {/* <RatingStars stars={rating} /> */}
          </div>
        )}
    </div>
  );
}

export default CardListEntry;
