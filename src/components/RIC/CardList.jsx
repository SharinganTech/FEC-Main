import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CardListEntry from './CardListEntry';

function CardList({ prodId }) {
  // set a state for the related items array
  const [relatedItems, setRelatedItems] = useState([]);
  // useEffect to make a get request for the relaed items
  useEffect(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodId}/related`, {
        headers: {
          Authorization: process.env.AUTH_TOKEN,
        },
      })
      .then(({ data }) => {
        const listOfRelatedItems = data.map((relatedId) => (
          axios
            .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedId}`, {
              headers: {
                Authorization: process.env.AUTH_TOKEN,
              },
            })
            .then((results) => results.data)
            .catch((err) => console.log(`Error ${err} when retrieving related items`))
        ));
        Promise.all(listOfRelatedItems)
          .then((result) => {
            console.log(result);
            setRelatedItems(result);
          });
      });
  }, []);

  return (
    <div className="flex">
      {/* map over the related items to create a card for each item */}
      {relatedItems.length === 0
        ? <h1>Loading...</h1>
        : (
          <div className="flex flex-row space-x-5 w-full h-64">
            <FontAwesomeIcon icon={faArrowLeft} className="self-center ml-2" />
            {relatedItems.map((relatedItem) => (
              <CardListEntry
                key={relatedItem.id}
                relatedItem={relatedItem}
              />
            ))}
            <FontAwesomeIcon icon={faArrowRight} className="absolute right-0 self-center mr-2" />
          </div>
        )}
    </div>
  );
}

export default CardList;
