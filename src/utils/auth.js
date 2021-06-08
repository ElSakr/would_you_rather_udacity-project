import { LocalStorageKeys } from "./localStorage";

export const Auth = {
  signOut() {
    localStorage.removeItem(LocalStorageKeys.TOKEN);
  },
  isAuth() {
    return localStorage.getItem(LocalStorageKeys.TOKEN);
  },
};
