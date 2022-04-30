import React from 'react';
import '../styles/FilterGenre.css'
const FilterGenre = () => {
    return (
        <div className="div-genres">
            <label>Generos: </label>
            <select>
                <option>Opcion1</option>
                <option>Opcion2</option>
                <option>Opcion3</option>
            </select>
        </div>
    );
};

export default FilterGenre;