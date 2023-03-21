import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../styles.css';
// import RatingStars from './RatingStars';
import Loading from './Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStar } from '@fortawesome/free-solid-svg-icons';
import generateAverage from './HelperFunctions';

function CardListEntry({ relatedItem }) {
  const [thumbnail, setThumbNail] = useState('');
  const [rating, setRating] = useState('');
  const [clicked, setClick] = useState(false);
  const [onSale, setSale] = useState(null);

  useEffect(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedItem.id}/styles`, {
        headers: {
          Authorization: '',
        },
      })
      .then(({ data }) => {
        // console.log(data.results);
        const sale = data.results[0].sale_price;
        if (sale !== null) {
          setSale(sale);
        }
        const photo = data.results[0].photos[0].thumbnail_url;
        if (photo === null) {
          setThumbNail('/Users/aidan/Programming/HackReactor/FEC/FEC-Main/assets/Image_not_available.png');
        } else {
          setThumbNail(photo);
        }
      })
      .then(() => axios
        .get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta', {
          headers: {
            Authorization: '',
          },
          params: {
            product_id: relatedItem.id,
          },
        }))
      .then((results) => {
        console.log(results.data.ratings);
        const avgRating = generateAverage(results.data.ratings);
        setRating(avgRating);
      })
      .catch((err) => console.log(`Error ${err} in CardListEntry axios get request`));
  }, []);

  return (
    <div>
      {thumbnail.length === 0 || rating.length === 0 ? <Loading />
        : (
          <div>
            <img src={thumbnail} alt="item default" />
            <div>{relatedItem.category}</div>
            <div>{relatedItem.name}</div>
            {onSale === null
              ? <div className="text-red-500 line-through">{relatedItem.default_price}</div>
              : (
                <div>
                  <div className="text-red-500 line-through">{relatedItem.default_price}</div>
                  <div>{onSale}</div>
                </div>
              )}
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
