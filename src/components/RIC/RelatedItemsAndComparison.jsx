import React, { useContext } from 'react';
import CardList from './CardList';
import Loading from './Loading';
import ProductContext from '../../contexts/ProductContext';

function RelatedItemsAndComparison() {
  const product = useContext(ProductContext);
  const prodDes = { product };
  const prod = prodDes.product;
  // console.log(prodId);
  // const [outfit, setOutfit] = useState([]);

  return (
    <div>
      {prod.id === undefined
        ? <Loading />
        : (
          <div>
            <CardList prodId={prod.id} />
            {/* <CardList outfit={outfit} /> */}
          </div>
        )}
    </div>
  );
}

export default RelatedItemsAndComparison;
