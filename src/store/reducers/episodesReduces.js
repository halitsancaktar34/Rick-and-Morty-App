import {
  CHANGE_PARAMS,
  FETCH_EPISODES,
  FETCH_SINGLE_EPISODE,
  LOAD_MORE_DATA,
  PENDING_EPISODES,
  PENDING_SINGLE_EPISODE,
  REJECT_EPISODES,
  REJECT_SINGLE_EPISODE,
  RESET_DATA_EPISODES,
} from '../types/characterTypes';

const initialState = {
  pending: false,
  episodesList: [],
  error: null,
  pendingSingleEpisode: true,
  singleEpisode: {},
  errorSingleEpisode: null,
  params: {
    page: 1,
  },
};

const episodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_EPISODES:
      return {
        ...state,
        episodesList: action.payload,
        pending: false,
      };
    case PENDING_EPISODES:
      return {
        ...state,
        pending: true,
      };
    case REJECT_EPISODES:
      return {
        ...state,
        pending: false,
        error: action.error,
      };
    case PENDING_SINGLE_EPISODE:
      return {
        ...state,
        pendingSingleEpisode: true,
      };
    case FETCH_SINGLE_EPISODE:
      return {
        ...state,
        singleEpisode: action.payload,
        pendingSingleEpisode: false,
      };
    case REJECT_SINGLE_EPISODE:
      return {
        ...state,
        pendingSingleEpisode: false,
        errorSingleEpisode: action.error,
      };
    case CHANGE_PARAMS:
      return {
        ...state,
        params: {
          ...state.params,
          ...action.params,
        },
      };
    case LOAD_MORE_DATA:
      return {
        ...state,
        episodesList: [...state.episodesList, ...action.payload],
      };
    case RESET_DATA_EPISODES:
      return {
        ...state,
        pendingSingleCharacter: false,
        errorSingleCharacter: null,
        episodesList: [],
      };
    default:
      return state;
  }
};

export default episodeReducer;
