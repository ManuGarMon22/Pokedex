import * as acitons from "../actions";

const initialState = {
  pokemons: {},
  types: {},
  created: [],
  searched: {},
  byType: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case acitons.GET_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
      };
    case acitons.GET_ORDER_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case acitons.GET_ORDER_TYPE:
      return {
        ...state,
        pokemons: action.payload,
      };
    case acitons.GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case acitons.CREATE_POKEMON:
      return {
        ...state,
        created: [...state.created, action.payload],
      };
    case acitons.GET_BY_NAME:
      return {
        ...state,
        searched: action.payload,
      };
    case acitons.GET_BY_TYPE:
      return {
        ...state,
        byType: action.payload,
      };
    default:
      return state;
  }
};
