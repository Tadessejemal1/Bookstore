import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus } from '../redux/Categories/categories';

const Categories = () => {
  const status = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const checkCategoryStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <section className="category-container">
      <h2>Categories</h2>
      <p>{status}</p>
      <button type="button" onClick={() => checkCategoryStatus()}>Check Status</button>
    </section>
  );
};
export default Categories;
