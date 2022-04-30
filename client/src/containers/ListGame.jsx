import React from 'react';
import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getAllGames} from "../redux/actions/actions"
import CardGame from "../components/CardGame";
import Paginado from "../components/Paginado";
import '../styles/ListGame.css'
const ListGame = () => {
    const dispatch = useDispatch()
    const allGames = useSelector((state) => state.allGame);
    const [currenPage, setCurrenPage] = useState(1)
    const [gameByPage, setGameByPage] = useState(15)
    const indexLastGame = currenPage * gameByPage;
    const indexPrimarGame = indexLastGame - gameByPage;
    const currenGames = allGames.slice(indexPrimarGame, indexLastGame);


    const paginado = (pageNumber) => {
        setCurrenPage(pageNumber);
    };

    useEffect(() => {
        dispatch(getAllGames())
    },[])

    return (
        <div className="div-home">
            <Paginado
                gameByPage={gameByPage}
                allGames={allGames.length}
                paginado={paginado}
            />
            <div className="div-cards">
                {currenGames?.map((data) => (
                    <CardGame name={data.name} image={data.background_image} genre={data.genres.map(e =>{
                        return e
                    })} key={data.id}/>
                ))}

            </div>
        </div>

    );
};

export default ListGame;