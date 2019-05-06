/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_USERNAME,
  CHANGE_FILE,
  CHANGE_FILE_TYPE,
  CHANGE_FILE_URL,
  SUBMIT_FILE_URL,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeUsername(name) {
  return {
    type: CHANGE_USERNAME,
    name,
  };
}

export function changeFile(file) {
  // console.log(file);
  return {
    type: CHANGE_FILE,
    file,
  };
}

export function changeFileType(filetype) {
  console.log(`FileTYPE ACTIONS ${filetype}`);
  return {
    type: CHANGE_FILE_TYPE,
    filetype,
  };
}

export function changeFileUrl(fileURL) {
  // console.log(fileURL);
  return {
    type: CHANGE_FILE_URL,
    fileURL,
  };
}

export function submitFileUrl(submitfileurl) {
  return {
    type: SUBMIT_FILE_URL,
    submitfileurl,
  };
}
