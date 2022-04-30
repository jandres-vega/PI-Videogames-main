const initialState = {
    allGame: []
}
function rootReducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_GAMES':
            return {
                ...state,
                allGame: action.payload
            }
        default:
            return state;
    }

}
export default rootReducer