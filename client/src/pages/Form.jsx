import React from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {useForm} from '../hooks/useForm'
import {getPlatforms, getAllGenres} from '../redux/actions/actions'
import { Link } from 'react-router-dom';
import '../styles/Form.css';


const initialForm = {
  name:'',
  released:'',
  background_image:'',
  rating:'',
  description:'',
  genres:[],
  platforms:[]
}

const validationForm = (form) => {
  let errors = {}
  if (!form.name){errors.name = "the name of game is required"}
  if (!form.released){errors.released = "the release date of game is required"}
  if (!form.background_image){errors.background_image = "the image of game is required"}
  if (!form.rating){errors.rating = "the rating of game is required"}
  if (!form.description){errors.description = "the description of game is required"}
  return  errors;
}

const Form = () => {
  let cont=0
  const dispatch = useDispatch();
  const allGenres = useSelector((state) => state.allGenres);
  const allPlatforms = useSelector(state => state.platforms)

  const {form,
    errors,
    handleSelectGenres,
    handleSelectPlatforms,
    handleChange,
    handleSubmit}= useForm(initialForm, validationForm)

  useEffect(() => {
    dispatch(getPlatforms())
    dispatch(getAllGenres())
  },[])

  console.log(errors.name)

  return (
    <div className="div-fondo-form">
      <div className="container-form">
        <form className="form">
          <div className="div-name">
            <label htmlFor="name">Name: </label>
            <input type="text"
                   placeholder="Name Game"
                   name="name"
                   id="input"
                   value={form.name}
                   onChange={(e) =>handleChange(e)}/>
          </div>
          <div className="errors">{errors.name && <p id="err"> {errors.name} </p>}</div>
          <div className="div-release">
            <label htmlFor="name">Release Date: </label>
            <input type="text"
                   placeholder="Release Date"
                   name="released"
                   id="input"
                   value={form.released}
                   onChange={(e) =>handleChange(e)}/>
          </div>
          <div className="errors">{errors.released && <p id="err"> {errors.released} </p>}</div>
          <div className="div-imagen">
            <label htmlFor="name">Imagen: </label>
            <input type="text"
                   placeholder="url imagen"
                   name="background_image"
                   id="input"
                   value={form.background_image}
                   onChange={(e) =>handleChange(e)}/>
          </div>
          <div className="errors">{errors.background_image && <p id="err"> {errors.background_image} </p>}</div>
          <div className="div-rating">
            <label htmlFor="name" >Rating: </label>
            <input type="text"
                   placeholder="Rating"
                   name="rating"
                   id="input"
                   value={form.rating}
                   onChange={(e) =>handleChange(e)}/>
          </div>
          <div className="errors">{errors.rating && <p id="err"> {errors.rating} </p>}</div>
          <div className="div-desc">
            <label htmlFor="name" id="des">Description: </label>
            <textarea name="description"
                      rows="5"
                      cols="50"
                      value={form.description}
                      onChange={(e) =>handleChange(e)}/>
          </div>
          <div className="errors-des">{errors.description && <p id="err"> {errors.description} </p>}</div>
          <div className="div-genre">
            <label>Genres: </label>
            <select onChange={(e) => handleSelectGenres(e)}>
              {allGenres?.map(data => (
                  <option key={data.id}>{data.name}</option>
              ))}
            </select>
          </div>
          <div className="div-platforms">
            <label>Platforms: </label>
            <select onChange={(e) => handleSelectPlatforms(e)}>
              {allPlatforms?.map(data => (
                  <option key={cont++}>{data.name}</option>
              ))}
            </select>
          </div>
          <div className="div-btn-back-send ">
            <div className="div-back-home">
              <Link to="/home">
                <button>Back</button>
              </Link>
            </div>
            <div className="div-save">
              <button onClick={(e) => handleSubmit(e)}>Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
