/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_USERNAME,
  CHANGE_FILE,
  CHANGE_FILE_TYPE,
  CHANGE_FILE_URL,
} from './constants';

// The initial state of the App
export const initialState = fromJS({
  username: '',
  fileURL: '',
  fileType: '',
  file: null,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USERNAME:
      // Delete prefixed '@' from the github username
      return state.set('username', action.name.replace(/@/gi, ''));
    case CHANGE_FILE:
      return state.set('file', action.file);
    case CHANGE_FILE_TYPE:
      return state.set('fileType', action.filetype);
    case CHANGE_FILE_URL:
      return state.set('fileURL', action.fileURL);
    default:
      return state;
  }
}

export default homeReducer;
