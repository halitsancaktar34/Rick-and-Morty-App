import {EPISODES_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {
  FETCH_EPISODES,
  PENDING_EPISODES,
  REJECT_EPISODES,
  RESET_DATA_EPISODES,
} from '../types/characterTypes';

export const getEpisodesList = params => {
  return async dispatch => {
    dispatch({type: PENDING_EPISODES});
    try {
      const response = await getRequest(EPISODES_URL, params);
      dispatch({
        type: FETCH_EPISODES,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: REJECT_EPISODES, error: error});
    }
  };
};
export const loadMoreEpisodes = params => {
  return async dispatch => {
    try {
      const response = await getRequest(EPISODES_URL, params);
      dispatch({
        type: LOAD_MORE_DATA,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: REJECT_EPISODES, error: error});
    }
  };
};
export const resetDataEpisodes = () => {
  return async dispatch => {
    dispatch({type: RESET_DATA_EPISODES});
  };
};