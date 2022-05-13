import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllGames, filterByGame } from '../redux/actions/actions';
import '../styles/FilterByGame.css';
const FilterByGame = () => {
  const dispatch = useDispatch();
  const nameGames = useSelector((state) => state.allCopyGames);

  function handleFilterByGame(e) {
    dispatch(filterByGame(e.target.value));
  }

  return (
    <div className="div-games">
      <label>Games: </label>
      <select onChange={(e) => handleFilterByGame(e)}>
        {nameGames?.map((data) => (
          <option key={data.id} value={data.name}>
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterByGame;
