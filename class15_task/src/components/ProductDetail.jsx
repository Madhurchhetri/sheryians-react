import React, { useContext } from 'react'
import { ProductDataContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const {productData} = useContext(ProductDataContext);
  const { prodId } = useParams();

  const selectedProduct = productData.find(
    (item) => item.id === Number(prodId)
  );

  if (!selectedProduct) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <h2>{selectedProduct.title}</h2>
      <img src={selectedProduct.image} alt={selectedProduct.title} />
    </div>
  );
};

export default ProductDetail;
