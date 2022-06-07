import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { getGameSearch } from '../redux/actions/actions';
import '../styles/SearchGames.css';
const SearchGames = () => {
  const [game, setGame] = useState('');

  const allGames = useSelector(state => state.allGame)
  const dispatch = useDispatch();
  function handleInputSearch(e) {
    e.preventDefault();
    setGame(e.target.value);
  }
  function handleSubmitSearch(e) {
    e.preventDefault();
    if (game === '') {
      alert("ingrese un nombre de juego")
    }
    if (game) {
      dispatch(getGameSearch(game));
      setGame('');
    }

  }

  return (
    <div className="btn-search">
      <button onClick={(e) => handleSubmitSearch(e)}>Search</button>
      <input type="text" value={game} onChange={(e) => handleInputSearch(e)} />
    </div>
  );
};

export default SearchGames;
