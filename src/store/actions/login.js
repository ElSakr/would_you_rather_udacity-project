import { LOGIN_ACTION_TYPES } from './../types/login';

export const login = payload => ({
  type: LOGIN_ACTION_TYPES.login,
  payload
});

export const logout = () => ({
  type: LOGIN_ACTION_TYPES.logout
});

export const set_users = payload => ({
  type: LOGIN_ACTION_TYPES.setUsers,
  payload
});
