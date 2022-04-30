import React from 'react';
import {Link} from "react-router-dom";
import '../styles/Form.css'
const Form = () => {
    return (
        <div className="fondo">
            <div className="container-form">
                <form className="form">
                    <div className="div-name">
                        <label htmlFor="name">Name: </label>
                        <input type="text" placeholder="Name Game" id="input"/>
                    </div>
                    <div className="div-release">
                        <label htmlFor="name">Release Date: </label>
                        <input type="text" placeholder="Release Date" id="input"/>
                    </div>
                    <div className="div-imagen">
                        <label htmlFor="name">Imagen: </label>
                        <input type="text" placeholder="url imagen" id="input"/>
                    </div>
                    <div className="div-rating">
                        <label htmlFor="name">Rating: </label>
                        <input type="text" placeholder="Rating" id="input"/>
                    </div>
                    <div className="div-description">
                        <label htmlFor="name">Description: </label>
                        <textarea name="textarea" rows="5" cols="50"/>
                    </div>
                    <div className="div-genre">
                        <label>Genres: </label>
                        <select>
                            <option>Opcion 1</option>
                            <option>Opcion 2</option>
                            <option>Opcion 3</option>
                        </select>
                    </div>
                    <div className="div-platforms">
                        <label>Platforms: </label>
                        <select>
                            <option>Opcion 1</option>
                            <option>Opcion 2</option>
                            <option>Opcion 3</option>                    </select>
                    </div>
                    <div className="div-back-home">
                        <Link to="/home">
                            <button>Back</button>
                        </Link>
                    </div>
                    <div className="div-save">
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;