import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getAllGenres} from '../redux/actions/actions'
import '../styles/FilterGenre.css'
const FilterGenre = () => {
    const dispatch = useDispatch()
    const allGenres = useSelector((state) => state.allGenres)

    useEffect(() => {
        dispatch(getAllGenres())
    },[])

    return (
        <div className="div-genres">
            <label>Genres: </label>
            <select>
                {allGenres?.map(data => (
                    <option key={data.id} value={data.name}> {data.name}</option>
                ))}
            </select>
        </div>
    );
};

export default FilterGenre;