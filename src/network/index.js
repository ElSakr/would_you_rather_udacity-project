import axios from "axios";
import qs from "qs";

const apiEndpoints = {
  staging: "",
  production: "", //TODO: use prod endpoint
};

export const axiosInstance = axios.create({
  baseURL: apiEndpoints[process.env.REACT_APP_STAGE],
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    //TODO: Add Authorization with the token
  },
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: "comma" });
  },
});
