import axios from 'axios';

export function getAllGames() {
  return async function (dispatch) {
    let json = await axios.get('http://localhost:3006/videogames');
    return dispatch({
      type: 'GET_GAMES',
      payload: json.data,
    });
  };
}
export function getAllGenres() {
  return async function (dispatch) {
    let allGenres = await axios.get('http://localhost:3006/genres');
    return dispatch({
      type: 'GET_GENRES',
      payload: allGenres.data,
    });
  };
}
export function filterByGenres(value) {
  return {
    type: 'FILTER_GENRES',
    value,
  };
}
export function filterByGame(value) {
  return {
    type: 'FILTER_GAMES',
    value,
  };
}
export function orderByName(value) {
  return {
    type: 'ORDER',
    value,
  };
}
export function orderByRating(value){
  return {
    type: 'ORDER_BY_RATING',
    value
  }
}
export function filterByCreatedAt(value) {
  return {
    type: 'FILTER_CREATED_AT',
    value,
  };
}
export function getGameById(id) {
  return async function (dispatch) {
    let gameId = await axios.get(`http://localhost:3006/videogames/${id}`);
    return dispatch({
      type: 'GET_GAME_ID',
      payload: gameId.data,
    });
  };
}
export function getGameSearch(name) {
  return async function (dispatch) {
    let gameByName = await axios.get(
      `http://localhost:3006/videogames?name=${name}`
    );
    return dispatch({
      type: 'GET_BY_NAME',
      payload: gameByName.data,
    });
  };
}
export function createGame(payload) {
  return async function () {
    return await axios.post('http://localhost:3006/videogame', payload);
  };
}
export function getPlatforms() {
  return async function (dispatch) {
    let allPlatforms = await axios.get('http://localhost:3006/platforms');
    return dispatch({
      type: 'GET_PLATFORM',
      payload: allPlatforms.data,
    });
  };
}
