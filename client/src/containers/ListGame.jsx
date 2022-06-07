import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { orderByName, getAllGames, orderByRating } from '../redux/actions/actions';
import CardGame from '../components/CardGame';
import Paginado from '../components/Paginado';
import '../styles/ListGame.css';
const ListGame = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.allGame);
  const [order, setOrder] = useState('');
  const [currenPage, setCurrenPage] = useState(1);
  const [gameByPage, setGameByPage] = useState(15);
  const indexLastGame = currenPage * gameByPage;
  const indexPrimarGame = indexLastGame - gameByPage;
  const currenGames = allGames.slice(indexPrimarGame, indexLastGame);

  useEffect(() => {
    dispatch(getAllGames());
  }, [dispatch]);

  function handleOrderRating(e) {
      e.preventDefault();
      dispatch(orderByRating(e.target.value))
      setOrder(`Ordenado ${e.target.value}`);
  }

  // function handleOrder(e) {
  //   e.preventDefault();
  //   dispatch(orderByName(e.target.value));
  //   setOrder(`Ordenado ${e.target.value}`);
  // }

  const paginado = (pageNumber) => {
    setCurrenPage(pageNumber);
  };

  return (
    <div className="div-home">
      <Paginado
        gameByPage={gameByPage}
        allGames={allGames.length}
        paginado={paginado}
      />
      <div className="div-order">
        <label>Order BY: </label>
        <select onChange={(e) => handleOrder(e)}>
          <option value="asen">A - Z</option>
          <option value="desc">Z - A</option>
        </select>
      </div>
      <div className="div-cards">
        {currenGames?.map((data) => (
          <Link
            to={`/videogames/${data.id}`}
            style={{ textDecoration: 'none', color: 'black' }}
            key={data.id}
          >
            <CardGame
              name={data.name}
              image={data.background_image}
              genre={data.genres.map((e) => {
                return e;
              })}
              key={data.id}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListGame;
