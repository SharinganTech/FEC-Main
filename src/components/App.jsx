import React from 'react';
import Overview from './Overview';
import RatingsAndReviews from './RR';
import QA from './QA';
import RelatedItemsAndComparison from './RIC';

function App() {
  return (
    <div className="text-red-600">
      <Overview />
      <RatingsAndReviews />
      <QA />
      <RelatedItemsAndComparison />
    </div>
  );
}

export default App;
