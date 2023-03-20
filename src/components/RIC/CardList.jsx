import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardListEntry from './CardListEntry';

function CardList({ prodId }) {
  // set a state for the related items array
  const [relatedItems, setRelatedItems] = useState([]);
  // useEffect to make a get request for the relaed items
  useEffect(() => {
    axios
      .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodId}/related`, {
        headers: {
          Authorization: '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',
        },
      })
      .then(({ data }) => {
        const listOfRelatedItems = data.map((relatedId) => (
          axios
            .get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${relatedId}`, {
              headers: {
                Authorization: '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',
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
    <div>
      {/* map over the related items to create a card for each item */}
      {relatedItems.length === 0
        ? <h1>Loading...</h1>
        : relatedItems.map((relatedItem) => (
          <CardListEntry
            key={relatedItem.id}
            relatedItem={relatedItem}
          />
        ))}
    </div>
  );
}

export default CardList;
