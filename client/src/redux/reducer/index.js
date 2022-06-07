const initialState = {
  allGame: [],
  allGenres: [],
  allCopyGames: [],
  game: [],
  platforms: [],
};
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GAMES':
      return {
        ...state,
        allGame: action.payload,
        allCopyGames: action.payload,
      };
    case 'GET_GENRES':
      return {
        ...state,
        allGenres: action.payload,
      };
    case 'FILTER_GENRES':
      let arrayGenres = state.allCopyGames.filter((data) => {
        if (!data.genres) return undefined;
        return data.genres && data.genres.includes(action.value);
      });
      return {
        ...state,
        allGame: arrayGenres,
      };
    case 'FILTER_GAMES':
      let arrayGames = state.allCopyGames.filter((data) => {
        if (!data.name) return undefined;
        return data.name === action.value;
      });
      return {
        ...state,
        allGame: arrayGames,
      };
    case 'ORDER':
      const order =
        action.value === 'asen'
          ? state.allGame.sort(function (a, b) {
              if (a.name > b.name) return 1;
              if (b.name > a.name) return -1;
              return 0;
            })
          : state.allGame.sort(function (a, b) {
              if (a.name < b.name) return 1;
              if (b.name < a.name) return -1;
              return 0;
            });
      return {
        ...state,
        allGame: order,
      };
    case 'ORDER_BY_RATING'  :
      const orderRating = action.value === 'min-max' ?
          state.allGame.sort(function (a,b) {
            return a.rating - b.rating;
          }):
          state.allGame.sort(function (a,b) {
            return b.rating - a.rating;
          })

      return {
        ...state,
        allGame: orderRating
      }
    case 'FILTER_CREATED_AT':
      const createdApiDb =
        action.value === 'database'
          ? state.allCopyGames.filter((data) => data.createDateBase)
          : state.allCopyGames.filter((data) => !data.createDateBase);
      return {
        ...state,
        allGame: createdApiDb,
      };
    case 'GET_GAME_ID':
      return {
        ...state,
        game: action.payload,
      };
    case 'GET_BY_NAME':
      return {
        ...state,
        allGame: action.payload,
      };
    case 'POST_GAME':
      return {
        ...state,
      };
    case 'GET_PLATFORM':
      return {
        ...state,
        platforms: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
