import {CHARACTERS_URL} from '../../service/urls';
import {getRequest} from '../../service/verbs';
import {
  FETCH_CHARACTERS,
  PENDING_CHARACTERS,
  RESET_DATA,
  CHANGE_PARAMS,
  LOAD_MORE_DATA,
  REJECT_CHARACTERS,
  PENDING_SINGLE_CHARACTER,
  FETCH_SINGLE_CHARACTER,
  REJECT_SINGLE_CHARACTER,
} from '../types/characterTypes';

export const getCharacterList = params => {
  return async dispatch => {
    dispatch({type: PENDING_CHARACTERS});
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      dispatch({
        type: FETCH_CHARACTERS,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: REJECT_CHARACTERS, error: error});
    }
  };
};
export const loadMoreCharacters = params => {
  return async dispatch => {
    try {
      const response = await getRequest(CHARACTERS_URL, params);
      dispatch({
        type: LOAD_MORE_DATA,
        payload: response.data.results,
      });
    } catch (error) {
      dispatch({type: REJECT_CHARACTERS, error: error});
    }
  };
};
export const getSingleCharacter = characterID => {
  const url = `${CHARACTERS_URL}/${characterID}`;
  return async dispatch => {
    dispatch({type: PENDING_SINGLE_CHARACTER});
    try {
      const response = await getRequest(url);
      dispatch({
        type: FETCH_SINGLE_CHARACTER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({type: REJECT_SINGLE_CHARACTER, error: error});
    }
  };
};
export const resetData = () => {
  return async dispatch => {
    dispatch({type: RESET_DATA});
  };
};
export const changeParams = params => {
  return async dispatch => {
    dispatch({type: CHANGE_PARAMS, params: params});
  };
};
