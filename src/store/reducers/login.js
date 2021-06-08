import { LOGIN_ACTION_TYPES } from './../types/login';
const INITIAL_STATE = {
  user: {},
  users: []
};

const login = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_ACTION_TYPES.login:
      return {
        ...state,
        user: { ...action.payload }
      };

    case LOGIN_ACTION_TYPES.setUsers:
      return {
        ...state,
        users: { ...action.payload }
      };
    default:
      return state;
  }
};

export default login;
