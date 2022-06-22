export const APP_SET_PEOPLE = 'APP_SET_PEOPLE';
export const APP_SET_CHANGE = 'APP_SET_CHANGE';

export const setPeopleToList = (payload = []) => ({ type: APP_SET_PEOPLE, payload });
export const setChange = (payload = '') => ({ type: APP_SET_CHANGE, payload });
