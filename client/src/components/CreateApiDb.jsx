import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterByCreatedAt } from '../redux/actions/actions';
import '../styles/CreateApiDb.css';
const CreateApiDb = () => {
  const dispatch = useDispatch();

  function handleFilterByCreatedAt(e) {
    e.preventDefault();
    dispatch(filterByCreatedAt(e.target.value));
  }
  useEffect(() => {
    dispatch(filterByCreatedAt);
  });

  return (
    <div className="div-api-db">
      <label>created from: </label>
      <select onChange={(e) => handleFilterByCreatedAt(e)}>
        <option value="api">api</option>
        <option value="database">database</option>
      </select>
    </div>
  );
};

export default CreateApiDb;
