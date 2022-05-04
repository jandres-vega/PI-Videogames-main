import React from 'react';
import '../styles/CardGame.css';
const CardGame = ({ name, image, genre }) => {
  return (
    <div className="div-card-game">
      <h3>{name}</h3>
      <img src={image} alt="imagen game" />
      <div className="div-gen">
        {genre?.map((e) => (
          <p key={e}>*{e}</p>
        ))}
      </div>
    </div>
  );
};

export default CardGame;
