import {
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  RESET_DATA,
  CHANGE_PARAMS,
  LOAD_MORE_DATA,
  REJECT_CHARACTERS,
  FETCH_SINGLE_CHARACTER,
  PENDING_SINGLE_CHARACTER,
  REJECT_SINGLE_CHARACTER,
} from '../types/characterTypes';

const initialState = {
  pending: false,
  characterList: [],
  error: null,
  pendingSingleCharacter: true,
  singleCharacter: {},
  errorSingleCharacter: null,
  params: {
    page: 1,
    status: null,
    gender: null,
    name: null
  },
};

const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS:
      return {
        ...state,
        characterList: action.payload,
        pending: false,
      };
    case LOAD_MORE_DATA:
      return {
        ...state,
        characterList: [...state.characterList, ...action.payload],
      };
    case PENDING_CHARACTERS:
      return {
        ...state,
        pending: true,
      };
    case REJECT_CHARACTERS:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case FETCH_SINGLE_CHARACTER:
      return {
        ...state,
        singleCharacter: action.payload,
        pendingSingleCharacter: false,
      };
    case PENDING_SINGLE_CHARACTER:
      return {
        ...state,
        pendingSingleCharacter: true,
      };
    case REJECT_SINGLE_CHARACTER:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: action.error,
      };
    case RESET_DATA:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: null,
        singleCharacter: {},
      };
    case CHANGE_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params
        },
      };
    default:
      return state;
  }
};

export default characterReducer;
