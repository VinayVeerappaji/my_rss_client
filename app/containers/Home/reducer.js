/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import {
  DEFAULT_ACTION,
  TRIGGER_RSS,
  SUCCESS_RSS,
  FULLFILL_RSS,
  FAIL_RSS,
} from './constants';

export const initialState = {};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case DEFAULT_ACTION:
        break;
      case TRIGGER_RSS:
        console.log('heeelo')
        draft.loadingRss = true;
        break;
      case SUCCESS_RSS:
        draft.rssObject = action.object;
        break;
      case FAIL_RSS:
        draft.error = action.error;
        break;
      case FULLFILL_RSS:
        draft.loadingRss= false;
        break;
    }
  });

export default homeReducer;
