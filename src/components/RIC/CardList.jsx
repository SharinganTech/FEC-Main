import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CardListEntry from './CardListEntry';

function CardList({ prodId }) {
  const [activeIndex, setActiveIndex] = useState(0);
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

  const updateIndex = (newIndex) => {
    let index = newIndex;
    if (index < 0) {
      index = 0;
    } else if (index >= (relatedItems.length / 4)) {
      index = 0;
    }

    setActiveIndex(index);
  };

  return (
    <div className="h-[28rem] relative flex flex-row space-x-5 w-full h-64">
      {/* map over the related items to create a card for each item */}
      <div className="absolute left-0 flex h-[28rem] w-24 z-50 bg-gradient-to-r from-[#EDF1FF] to-transparent">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="absolute left-0 self-center ml-5"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        />
      </div>
      <div className="absolute right-0 flex h-[28rem] w-24 z-50 bg-gradient-to-l from-[#EDF1FF] to-transparent">
        <FontAwesomeIcon
          icon={faArrowRight}
          className="absolute right-0 self-center mr-5"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        />
      </div>
      {relatedItems.length === 0
        ? <h1> Loading... </h1>
        : (
          <div className="relative flex flex-row whitespace-nowrap space-x-5 w-full h-full">
            {relatedItems.map((relatedItem) => (
              <CardListEntry
                key={relatedItem.id}
                relatedItem={relatedItem}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        )}
    </div>
  );
}

export default CardList;
