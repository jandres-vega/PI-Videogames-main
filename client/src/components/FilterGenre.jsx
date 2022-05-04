import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllGenres, filterByGenres } from '../redux/actions/actions';
import '../styles/FilterGenre.css';
const FilterGenre = () => {
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  function handleFilterByGenres(e) {
    dispatch(filterByGenres(e.target.value));
  }

  return (
    <div className="div-genres">
      <label>Genres: </label>
      <select onChange={(e) => handleFilterByGenres(e)}>
        {allGenres?.map((data) => (
          <option key={data.id} value={data.name}>
            {' '}
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterGenre;
