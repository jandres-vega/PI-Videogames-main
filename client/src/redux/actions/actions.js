import axios from "axios";

export function getAllGames() {
    return async function (dispatch) {
        let allGames = await axios.get('http://localhost:3006/videogames');
        return dispatch({
            type: 'GET_GAMES',
            payload: allGames.data,
        })
    }

}