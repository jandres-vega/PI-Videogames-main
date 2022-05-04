import React from 'react';
import {Link} from "react-router-dom";
import '../styles/DetailGame.css';
import {useEffect} from "react";
import {getGameById} from '../redux/actions/actions'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
const DetailGame = () => {
    const dispatch = useDispatch()
    const param = useParams()
    const gameDetail = useSelector(state => state.game)

    useEffect(() => {
        dispatch(getGameById(param.id))
    },[dispatch])

    return (
        <div>
            <div className="div-fondo-detail">
                <div className="div-detail">
                    <h1>{gameDetail.name}</h1>
                    <img src={gameDetail.background_image} alt="imagen game" />
                    <h4 id="h4-created">{`CREATED: ${gameDetail.release_date}`}</h4>
                    <div className="div-genres-p">
                        <p id="p-genres">GENRES</p>
                        <ul>
                            {gameDetail.gender ?.map((data) => (
                                <li>{data}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="div-platform">
                        <p>PLATFORMS</p>
                        <ul>
                            {gameDetail.platform ?.map((data) => (
                                <li>{data}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="div-description">
                        <h3>DESCRIPTION</h3>
                        <p>{gameDetail.description}</p>
                    </div>
                    <div className="div-botton-back">
                        <Link to="/home">
                            <button>VOLVER</button>
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default DetailGame;