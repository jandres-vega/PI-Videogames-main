import React from 'react';
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import imagenTitulo from '../assets/imagenes/videoGame.png';
import FilterGenre from '../components/FilterGenre';
import FilterByGame from '../components/FilterByGame';
import OrderRating from '../components/buttonAllGames';
import CreateApiDb from '../components/CreateApiDb';
import SearchGames from '../components/SearchGames';
import ButtonAllGames from '../components/buttonAllGames';
const Header = () => {
  return (
    <div>
      <div className="div-button-create">
        <Link to="/form">
          <button>Create Game</button>
        </Link>
      </div>
      <div className="div-button-back">
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
      <nav className="header">
        <div className="logo-tittle">
          <img src={imagenTitulo} alt="titulo home" />
        </div>
      </nav>
      <div className="div-h3-filter">
        <h3>FILTRAR POR: </h3>
      </div>
      <div className="div-Filter-genero">
        <ButtonAllGames />
        <FilterGenre />
        <FilterByGame />
        <CreateApiDb />
      </div>
      <div className="div-search-header">
        <SearchGames />
      </div>
    </div>
  );
};

export default Header;
