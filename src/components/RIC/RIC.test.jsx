import React from 'react';
import 'react-dom';
import { act, render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import '@testing-library/jest-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmarkSquare, faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import ProductContext from '../../contexts/ProductContext';
import RelatedItemsAndComparison from './RelatedItemsAndComparison';
import {
  generateAverage, includesFeature, overviewContains,
  featureValue, doesItInclude, generatePartialStar,
} from './HelperFunctions';
import CardList from './CardList';
import Modal from './Modal';

jest.mock('axios');

describe('CardList', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('renders loading message before related items are fetched', async () => {
    const prod = { id: 123 };
    axios.get.mockResolvedValueOnce({ data: [] });
    const { getByTestId } = render(<CardList prod={prod} />);
    expect(getByTestId('riLoading')).toBeInTheDocument();
    await waitFor(() => expect(axios.get).toHaveBeenCalledTimes(1));
  });

  it('renders the related items when they are fetched', async () => {
    const product = 40346;
    const prod = { id: 123 };
    const relatedItems = [
      { id: 456, name: 'Related Item 1', category: 'Basketball Shoes' },
    ];
    const results = {
      results: [
        {
          sale_price: '250',
          photos: [
            {
              thumbnail_url: null,
            },
          ],
        },
      ],
    };
    const reviews = {
      ratings: {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1,
      },
    };
    const features = {
      features: [
        {
          feature: 'Sole',
          value: 'Rubber',
        },
        {
          feature: 'Material',
          value: 'FullControlSkin',
        }],
    };

    await axios.get.mockResolvedValueOnce({ data: [456] });
    await axios.get.mockResolvedValueOnce({ data: relatedItems[0] });
    await act(async () => {
      await axios.get.mockResolvedValueOnce({ data: results });
    });
    await act(async () => {
      await axios.get.mockResolvedValueOnce({ data: reviews });
    });
    await act(async () => {
      await axios.get.mockResolvedValueOnce({ data: features });
    });

    await act(async () => {
      await render(
        <ProductContext.Provider value={product}>
          <RelatedItemsAndComparison />
        </ProductContext.Provider>,
      );
    });

    await waitFor(() => expect(screen.getByTestId('cardList')).toBeInTheDocument());

    expect(screen.getByTestId('card-name')).toHaveTextContent('Related Item 1');
    expect(screen.getByTestId('card-category')).toHaveTextContent('Basketball Shoes');
    expect(screen.getByTestId('card-price')).toHaveTextContent('250');
    expect(screen.getByTestId('compare-button')).toHaveTextContent('Compare');

    const addCard = await screen.getByTestId('yourOutfitCard');
    const rightArrow = await screen.getByTestId('yo-right-arrow');
    const yoList = await screen.getByTestId('yourOutfitList');

    expect(addCard).toHaveTextContent('Add Current Item to Your Outfit');
    expect(rightArrow).toBeInTheDocument();
    expect(yoList).toBeInTheDocument();

    // const loading = await screen.getByTestId('riLoading');
    const clRightArrow = await screen.getByTestId('clRightArrow');
    const container = await screen.getByTestId('clContainer');
    const raContainer = await screen.getByTestId('clRAContainer');

    // expect(loading).toHaveTextContent('Loading...');
    expect(clRightArrow).toBeInTheDocument();
    expect(container).toBeInTheDocument();
    expect(raContainer).toBeInTheDocument();
  });
});

describe('Modal', () => {
  const testItem = {
    name: 'Related Item 1',
    features: [
      {
        feature: 'Sole',
        value: 'Foam',
      },
    ],
  };
  const prodItem = {
    name: 'Overview Item',
  };
  const features = [
    {
      feature: 'Sole',
      value: 'Rubber',
    }
  ];

  test('Modal has correct headers', () => {
    render(<Modal relatedItem={testItem} prod={prodItem} prodFeatures={features} />);

    expect(screen.getByTestId('modal')).toBeInTheDocument();
    expect(screen.getByTestId('related-name')).toHaveTextContent('Related Item 1');
    expect(screen.getByTestId('prod-name')).toHaveTextContent('Overview Item');
    expect(screen.getByTestId('comparison')).toBeInTheDocument();
    expect(screen.getByTestId('close-button')).toBeInTheDocument();
    expect(screen.getByTestId('product-feature')).toHaveTextContent('Foam');
  });
})

describe('Helper Functions', () => {
  test('calcultes the correct average', () => {
    const ratings = {
      1: 1,
      2: 1,
      3: 1,
      4: 1,
      5: 1,
    };
    expect(generateAverage(ratings)[0]).toBe('3.00');
    expect(generateAverage(ratings)[1]).toBe(5);
    expect(generateAverage(ratings)[0]).not.toBe('0');
  });

  test('includesFeature should return the correct value. overViewContains should return a boolean', () => {
    const feature = { feature: 'example', value: 'value' };
    const featArray = [{ feature: 'notIt', value: 'tryNext' }, { feature: 'example', value: 'matchingValue' }];
    const failingArray = [{ feature: 'notIt', value: 'tryNext' }, { feature: 'null', value: 'matchingValue' }];

    expect(includesFeature(feature, featArray)).toBe('matchingValue');
    expect(includesFeature(feature, failingArray)).toBe('N/A');
    expect(overviewContains(feature, featArray)).toBe(true);
    expect(overviewContains(featArray, feature)).toBe(false);
  });

  test('featureValue should return a checkmark', () => {
    expect(featureValue(true)).toEqual(<FontAwesomeIcon icon={faCheck} />);
    expect(featureValue(false)).toEqual(<FontAwesomeIcon icon={faXmarkSquare} />);
    expect(featureValue('value')).toEqual('value');
  });

  test('doesItInclude should return a boolean', () => {
    const testProduct = { id: 1 };
    const testOutfit = [{ id: 2 }, { id: 1 }];
    const testFalse = [{ id: 3 }];

    expect(doesItInclude(testProduct, testOutfit)).toBe(true);
    expect(doesItInclude(testProduct, testFalse)).toBe(false);
    expect(doesItInclude(testProduct, [])).toBe(false);
  });

  test('generatePartialStar should return a star fill with the correct rating', () => {
    expect(generatePartialStar(3, 3.9, '000000')).toEqual(
      <div className="relative flex flex-row w-[16px]">
        <FontAwesomeIcon key={`full-${25}`} icon={faStar} style={{ color: '#000000' }} className="star-fill absolute content-center z-10 right-0" />
        <div className={`bg-[#${'000000'}] absolute content-center z-10 right-0.5`} style={{ width: `${25}%` }}>&nbsp;</div>
        <FontAwesomeIcon key={`empty-${25}`} icon={farStar} style={{ color: '#000000' }} className="star-outline absolute content-center z-20 right-0" />
      </div>,
    );

    expect(generatePartialStar(3, 3.5, '000000')).toEqual(
      <div className="relative flex flex-row w-[16px]">
        <FontAwesomeIcon key={`full-${35}`} icon={faStar} style={{ color: '#000000' }} className="star-fill absolute content-center z-10 right-0" />
        <div className={`bg-[#${'000000'}] absolute content-center z-10 right-0.5`} style={{ width: `${35}%` }}>&nbsp;</div>
        <FontAwesomeIcon key={`empty-${35}`} icon={farStar} style={{ color: '#000000' }} className="star-outline absolute content-center z-20 right-0" />
      </div>,
    );

    expect(generatePartialStar(3, 3.3, '000000')).toEqual(
      <div className="relative flex flex-row w-[16px]">
        <FontAwesomeIcon key={`full-${50}`} icon={faStar} style={{ color: '#000000' }} className="star-fill absolute content-center z-10 right-0" />
        <div className={`bg-[#${'000000'}] absolute content-center z-10 right-0.5`} style={{ width: `${50}%` }}>&nbsp;</div>
        <FontAwesomeIcon key={`empty-${50}`} icon={farStar} style={{ color: '#000000' }} className="star-outline absolute content-center z-20 right-0" />
      </div>,
    );
  });
});
