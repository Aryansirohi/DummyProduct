import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../actions/productActions';

const ProductList = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);

  React.useEffect(() => {
    const fetchProductsBatch = async () => {
      const response = await dispatch(fetchProducts(pageNumber, 10));
      setPageNumber((prevPageNumber) => prevPageNumber + 1);
    };
    fetchProductsBatch();
  }, [dispatch, pageNumber]);

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
