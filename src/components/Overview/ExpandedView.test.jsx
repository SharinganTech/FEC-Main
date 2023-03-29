import React, { useState } from 'react';
import 'react-dom';
import { render, screen, fireEvent, act } from '@testing-library/react';
import { expect, jest, test } from '@jest/globals';
import '@testing-library/jest-dom';
import ExpandedView from './ExpandedView';

const stylePhotos = [
  {
    thumbail_url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  },
  {
    thumbail_url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    url: 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
  },
];

const mainImage = 'https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80';

function changeMain(newMainURL) {
  // setMainImage(newMainURL);
}

function changeView() {
  // setNormalView(!normalView);
}

test('Renders a button with Favorite text', async () => {
  render(
    <ExpandedView
      stylePhotos={stylePhotos}
      mainImage={mainImage}
      changeMain={changeMain}
      changeView={changeView}
    />,
  );

  const body = await screen.getByTestId('arrowRight');

  expect(body).toBeDefined();
});

test('Right arrow privides a URL', async () => {
  await act(async () => {
    render(
      <ExpandedView
        stylePhotos={stylePhotos}
        mainImage={mainImage}
        changeMain={changeMain}
        changeView={changeView}
      />,
    );
  });

  await act(
    async () => {
      fireEvent.click(
        screen.getByTestId('arrowRight'),
      );
    },
  );
  const myImage = await screen.getByTestId('mainImage');

  await expect(myImage.src).toEqual('https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
});

test('Left arrow provides a URL', async () => {
  await act(async () => {
    render(
      <ExpandedView
        stylePhotos={stylePhotos}
        mainImage={mainImage}
        changeMain={changeMain}
        changeView={changeView}
      />,
    );
  });

  await act(
    async () => {
      fireEvent.click(
        screen.getByTestId('arrowLeft'),
      );
    },
  );
  const myImage = await screen.getByTestId('mainImage');

  await expect(myImage.src).toEqual('https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
});

test('Up arrow provides a URL', async () => {
  await act(async () => {
    render(
      <ExpandedView
        stylePhotos={stylePhotos}
        mainImage={mainImage}
        changeMain={changeMain}
        changeView={changeView}
      />,
    );
  });

  await act(
    async () => {
      fireEvent.click(
        screen.getByTestId('1thumbnail'),
      );
    },
  );
  const myImage = await screen.getByTestId('mainImage');

  await expect(myImage.src).toEqual('https://images.unsplash.com/photo-1544441892-794166f1e3be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80');
});
