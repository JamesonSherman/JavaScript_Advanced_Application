/*
 * HomeConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
/*
    dispatch(changeFileUrl(fileURL));
      dispatch(changeFileType(fileUpload.type));
      dispatch(changeFile(fileUpload));


      dispatch(submitFileUrl());
 */
export const CHANGE_USERNAME = 'boilerplate/Home/CHANGE_USERNAME';
export const CHANGE_FILE_URL = 'boilerplate/Home/CHANGE_FILE_URL';
export const CHANGE_FILE_TYPE = 'boilerplate/Home/CHANGE_FILE_TYPE';
export const CHANGE_FILE = 'boilerplate/Home/CHANGE_FILE';
export const SUBMIT_FILE_URL = 'boilerplate/Home/SUBMIT_FILE_URL';
