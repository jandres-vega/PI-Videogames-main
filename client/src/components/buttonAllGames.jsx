import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllGames } from '../redux/actions/actions';
import '../styles/ButtonAllGames.css';
const ButtonAllGames = () => {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getAllGames());
  }
  return (
    <div className="div-all">
      <button onClick={(e) => handleSubmit(e)}>All Games</button>
    </div>
  );
};

export default ButtonAllGames;
