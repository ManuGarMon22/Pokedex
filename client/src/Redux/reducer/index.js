import * as acitons from "../actions";

const initialState = {
  pokemons: [],
  types: [],
  searched: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case acitons.CREATE_POKEMON:
      if (action.payload.pokemon) {
        return {
          ...state,
          pokemons: [...state.pokemons, action.payload.pokemon],
        };
      } else {
        return state;
      }
    case acitons.GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case acitons.GET_TYPES:
      return {
        ...state,
        types: [...action.payload],
      };

    case acitons.GET_BY_NAME:
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          pokemons: [...action.payload],
        };
      }
      return {
        ...state,
        pokemons: [action.payload],
      };
    case acitons.GET_BY_ID:
      return {
        ...state,
        pokemons: [action.payload],
      };
    case acitons.FILTER:
      return {
        ...state,
        pokemons: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
