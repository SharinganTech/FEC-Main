import React, { useContext } from 'react';
import ProductContext from '../../../../contexts/ProductContext';
import ReviewForm from './ReviewForm';
import Modal from '../Modal';

function WriteReviewModal({ setShowModal, reviewsMeta }) {
  const product = useContext(ProductContext);
  const prodDes = { product };
  const prodName = prodDes.product.name;

  const componentToRender = (
    <div>
      <div className="flex flex-col justify-between p-4 border-b border-solid border-slate-200 rounded-t">
        <div className="flex flex-row">
          <h3 className="text-xl font-bold">Write Your Review</h3>
          <button
            onClick={() => setShowModal(false)}
            className="ml-auto text-4xl font-bold"
            type="button"
          >
            X
          </button>
        </div>
        <h6 className="text-m">
          About the
          {' '}
          {prodName}
        </h6>
      </div>
      <div className="relative p-4 flex-auto">
        <ReviewForm reviewsMeta={reviewsMeta} />
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
        <button onClick={() => setShowModal(false)} className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded" type="button">Submit</button>
      </div>
    </div>
  );

  return <Modal componentToRender={componentToRender} />;
}

export default WriteReviewModal;

// const [productName, setProductName] = useState('');
// useEffect(() => {
//   axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prod}`, {
//     headers: {
//       Authorization: process.env.AUTH_TOKEN,
//     },
//   })
//     .then((response) => {
//       setProductName(response.data.name);
//     });
// }, []);
// return productName !== '' ? (
//   <Modal componentToRender={componentToRender} />
// ) : null;
