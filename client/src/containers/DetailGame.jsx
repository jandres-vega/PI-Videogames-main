import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/DetailGame.css';
import { useEffect } from 'react';
import { getGameById } from '../redux/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const DetailGame = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const gameDetail = useSelector((state) => state.game);

  let cont = 0;
  useEffect(() => {
    dispatch(getGameById(param.id));
  }, []);

  return (
    <div>
      <div className="div-fondo-detail">
        {gameDetail?.map((data) => (
          <div className="div-detail" key={data.id}>
            <h1 key={cont++}>{data.name}</h1>
            <img src={data.background_image} alt="imagen game" />
            <h4 id="h4-created">{`CREATED: ${data.released}`}</h4>
            <div className="div-genres-p">
              <p id="p-genres">GENRES</p>
              <ul>
                {data.genres?.map((data) => (
                  <li key={cont++}>{data}</li>
                ))}
              </ul>
            </div>
            <div className="div-platform">
              <p>PLATFORMS</p>
              <ul>
                {data.platform?.map((data) => (
                  <li key={cont++}>{data}</li>
                ))}
              </ul>
            </div>
            <div className="div-description">
              <h3>DESCRIPTION</h3>
              <p key={cont++}>{data.description}</p>
            </div>
            <div className="div-botton-back">
              <Link to="/home">
                <button>VOLVER</button>
              </Link>
            </div>
            <div className="div-puntuation">
              <h5>PUNCTUATION: </h5>
              <p key={cont++}>{data.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailGame;
