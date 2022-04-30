import React from 'react';
import '../styles/FilterByGame.css'
const FilterByGame = () => {
    return (
        <div className="div-games">
            <label>Games: </label>
            <select>
                <option>Opcion1</option>
                <option>Opcion2</option>
                <option>Opcion3</option>
            </select>
        </div>
    );
};

export default FilterByGame;