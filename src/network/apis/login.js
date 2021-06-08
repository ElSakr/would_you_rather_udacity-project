import { axiosInstance } from "../index";

const login = async (credentials) => {
  return await axiosInstance.post("", { credentials });
};

const logout = async () => {
  return await axiosInstance.get("");
};

export default { login, logout };
