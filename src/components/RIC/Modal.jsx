import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { includesFeature, overviewContains, featureValue } from './HelperFunctions';

function Modal({
  relatedItem, modal, setModal, prodFeatures, prod, outfit, setOutfit,
}) {
  // console.log('relatedItem', relatedItem.features);
  // console.log('overview item', prodFeatures);

  return (
    <div data-testid="modal" className="transform-none flex fixed inset-0 z-50 justify-center items-center outline-none focus:outline-none bg-slate-500/50">
      {outfit === undefined
        ? (
          <div className="relative flex flex-col rounded-lg self-center bg-gradient-to-r from-violet-600/95 to-gray-400/95 shadow-2xl text-black h-80 w-fit">
            <div className="h-1/6 grid grid-rows-1 grid-cols-3 border-b border-black bg-[#EFE1CE] rounded-t-lg">
              <div data-testid="related-name" className="grid col-start-1 col-span-1 row-start-1 text-center content-center">
                {relatedItem.name}
              </div>
              <h1 className="grid col-start-2 col-span-1 row-start-1 text-center content-center">Feature</h1>
              <div data-testid="prod-name" className="grid col-start-3 col-span-1 row-start-1 text-center content-center">
                {prod.name}
              </div>
            </div>
            <div data-testid="comparison" className="grid h-5/6 overflow-x-auto bg-[#EDF1FF] shadow-inner">
              {prodFeatures.map((obj) => (
                <div key={obj.feature} className="grid grid-rows-1 grid-cols-3 content-center h-12 border-b">
                  <div data-testid="product-feature" className="grid col-start-1 col-span-1 row-start-1 text-center content-center">
                    {includesFeature(obj, relatedItem.features)}
                  </div>
                  <div className="grid col-start-2 col-span-1 row-start-1 text-center content-center">
                    {obj.feature}
                  </div>
                  <div className="grid col-start-3 col-span-1 row-start-1 text-center justify-center content-center">
                    { featureValue(obj.value) }
                  </div>
                </div>
              ))}
              {relatedItem.features.map((obj) => (
                overviewContains(obj, prodFeatures) === false
                && (
                  <div key={obj.feature} className="grid grid-rows-1 grid-cols-3 content-center h-12 border-b">
                    <div className="grid col-start-1 col-span-1 row-start-1 text-center justify-center content-center">
                      { featureValue(obj.value) }
                    </div>
                    <div className="grid col-start-2 col-span-1 row-start-1 text-center content-center">
                      {obj.feature}
                    </div>
                    <div className="grid col-start-3 col-span-1 row-start-1 text-center content-center">
                      {includesFeature(obj, prodFeatures)}
                    </div>
                  </div>
                )
              ))}
            </div>
            <button
              data-testId="close-button"
              className="bg-[#EDF1FF] rounded-b-lg"
              type="button"
              onClick={() => {
                setModal(!modal);
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} className="relative top-0 right-0" />
            </button>
          </div>
        )
        : (
          <div className="relative flex flex-col rounded-lg self-center bg-[#EDF1FF] shadow-inner shadow-2xl text-[#363945] border-1 border-black p-1">
            This item is already in your outfit!
            <button
              type="button"
              onClick={() => {
                setOutfit(false);
              }}
            >
              <FontAwesomeIcon icon={faCircleXmark} className="relative top-0 right-0" />
            </button>
          </div>
        )}
    </div>
  );
}

export default Modal;
