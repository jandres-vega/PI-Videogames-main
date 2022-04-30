import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllGames} from '../redux/actions/actions'
import '../styles/FilterByGame.css'
const FilterByGame = () => {

    const dispatch = useDispatch()
    const nameGames = useSelector((state) => state.allGame)
    useEffect(() => {
        dispatch(getAllGames())
    },[])
    return (
        <div className="div-games">
            <label>Games: </label>
            <select>
                {nameGames?.map(data => (
                    <option key={data.id} value={data.name}> {data.name}</option>
                ))}
            </select>
        </div>
    );
};

export default FilterByGame;