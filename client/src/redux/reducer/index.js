const initialState = {
    allGame: [],
    allGenres: []
}
function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_GAMES':
            return {
                ...state,
                allGame: action.payload
            }
        case 'GET_GENRES':
            return {
                ...state,
                allGenres: action.payload

            }
        default:
            return state;
    }

}
export default rootReducer