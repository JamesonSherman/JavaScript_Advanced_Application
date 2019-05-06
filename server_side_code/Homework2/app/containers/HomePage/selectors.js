/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.get('home', initialState);

const makeSelectUsername = () =>
  createSelector(selectHome, homeState => homeState.get('username'));

const makeInputFileUrl = () =>
  createSelector(selectHome, homeState => homeState.get('fileURL'));

const makeInputFileType = () =>
  createSelector(selectHome, homeState => homeState.get('fileType'));

const makeInputFile = () =>
  createSelector(selectHome, homeState => homeState.get('file'));

export {
  selectHome,
  makeSelectUsername,
  makeInputFileUrl,
  makeInputFileType,
  makeInputFile,
};
