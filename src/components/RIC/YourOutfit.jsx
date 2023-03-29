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

  const handleNext = () => {
    if (activeIndex === yourOutfit.length - 1) {
      setActiveIndex(0); // set index back to first element
    } else {
      setActiveIndex(activeIndex + 1); // increment index
    }
  };

  const handlePrev = () => {
    if (activeIndex === 0) {
      setActiveIndex(yourOutfit.length - 1); // set index to last element
    } else {
      setActiveIndex(activeIndex - 1); // decrement index
    }
  };

  return (
    <div className="relative flex h-[28rem] left-3">
      {/* map over the related items to create a card for each item */}
      <div
        data-testid="yourOutfitCard"
        role="button"
        className="relative left-4 shrink-0 bg-[#EFE1CE] grid rounded-lg shadow-lg hover:shadow-[#926AA6] h-96 w-48 content-center text-center text-3xl text-[#798EA4] border border-[#798EA4] border-dashed"
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
      <div className="relative flex flex-row space-x-5 w-[896px] h-100 overflow-hidden">
        <div className="absolute right-0 flex h-[28rem] w-24 z-10 bg-gradient-to-l from-[#EDF1FF] to-transparent">
          {/* if there are less than 4 cards, don't show the right arrow */}
          <FontAwesomeIcon
            data-testid="yo-right-arrow"
            icon={faArrowRight}
            className="absolute right-0 self-center mr-5"
            onClick={() => {
              handleNext();
            }}
          />
        </div>
        {activeIndex === 0
          ? <div />
          : (
            <div className="absolute left-0 flex h-[28rem] w-24 z-10 bg-gradient-to-r from-[#EDF1FF] to-transparent">
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="absolute left-0 self-center ml-5"
                onClick={() => {
                  handlePrev();
                }}
              />
            </div>
          )}
        <div className="relative flex flex-row whitespace-nowrap space-x-5 w-[full] h-full left-[50px] z-0 overflow-hidden" data-testid="yourOutfitList">
          {yourOutfit.map((relatedItem) => (
            <CardListEntry
              key={relatedItem.id}
              relatedItem={relatedItem}
              removeCard={removeCard}
              activeIndex={activeIndex}
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
