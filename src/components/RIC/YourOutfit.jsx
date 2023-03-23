import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CardListEntry from './CardListEntry';
import Modal from './Modal';
import { doesItInclude } from './HelperFunctions';

function YourOutfit({ prod, yourOutfit, setYourOutfit }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [outfit, setOutfit] = useState(false);
  const noModal = true;

  const removeCard = (card) => {
    const removedList = yourOutfit.filter((favorite) => favorite.id !== card.id);
    setYourOutfit(removedList);
  };

  const updateIndex = (newIndex) => {
    let index = newIndex;
    if (index < 0) {
      index = 0;
    } else if (index >= outfit.length) {
      index = outfit.length - 1;
    }

    setActiveIndex(index);
  };

  return (
    <div className="flex overflow-hidden h-[28rem]">
      {/* map over the related items to create a card for each item */}
      <div className="relative flex flex-row space-x-5 w-full h-64">
        <div className="absolute right-0 flex h-[28rem] w-24 z-50 bg-gradient-to-l from-[#EDF1FF] to-transparent z-0">
          <FontAwesomeIcon
            icon={faArrowRight}
            className="absolute right-0 self-center mr-5"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          />
        </div>
        <div
          role="button"
          className="shrink-0 bg-[#EFE1CE] grid rounded-lg shadow-xl hover:shadow-indigo-500/40 h-96 w-48 content-center text-center text-3xl text-[#798EA4] border border-[#798EA4] border-dashed"
          onClick={() => {
            if (!doesItInclude(prod, yourOutfit)) {
              const newOutfit = [prod, ...yourOutfit];
              setYourOutfit(newOutfit);
            } else {
              setOutfit(true);
            }
          }}
          tabIndex={0}
          onKeyPress={() => {
            if (!doesItInclude(prod, yourOutfit)) {
              const newOutfit = [prod, ...yourOutfit];
              setYourOutfit(newOutfit);
            } else {
              setOutfit(true);
            }
          }}
        >
          Add Current Item to Your Outfit
        </div>
        <div className="flex h-[28rem] w-24 z-50 bg-gradient-to-r from-[#EDF1FF] to-transparent z-0">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="self-center ml-5"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          />
        </div>
        <div className="relative flex flex-row space-x-5 w-full h-64 transition-transform" style={{ transform: `translateX(-${activeIndex * 50}%)` }}>
          {yourOutfit.map((relatedItem) => (
            <CardListEntry
              key={relatedItem.id}
              relatedItem={relatedItem}
              removeCard={removeCard}
              noModal={noModal}
            />
          ))}
        </div>
      </div>
      {outfit && <Modal outfit={outfit} setOutfit={setOutfit} />}
    </div>
  );
}

export default YourOutfit;
