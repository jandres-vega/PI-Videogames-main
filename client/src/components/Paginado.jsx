import React from 'react';
import '../styles/Paginado.css';
const Paginado = ({ gameByPage, allGames, paginado }) => {
  const pagNumber = [];
  for (let i = 1; i <= Math.ceil(allGames / gameByPage); i++) {
    pagNumber.push(i);
  }
  return (
    <div className="pag-nav">
      <ul className="paginado">
        {pagNumber &&
          pagNumber.map((number) => (
            <li className="number" key={number}>
              <div className="container-number">
                <a onClick={() => paginado(number)}>{number}</a>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Paginado;
