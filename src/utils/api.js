import axios from "axios";
import Cookies from "js-cookie";

// import { getToken, gotoLogin } from "@/utils/auth";

const api = axios.create({
  baseURL: "/api",
  timeout: 60 * 1000 * 10
});

api.interceptors.request.use(
  config => {
    let token = Cookies.get("token");
    console.warn("token");
    console.log(token);
    
    console.log("\n");
    if(token) config.headers.Authorization = token;
    config.params = {
      ...config.params,
    //   access_token: getToken()
    };
    
    return config;
  },

  error => {
    // Do something with request error
    console.log(error); // for debug
    Promise.reject(error);
  }
);

api.interceptors.response.use(
  res => {
    return res;
  },

  error => {
    console.log("api err", error);
    // if (error.response.status === 401) {
    //   gotoLogin();
    // }
    return Promise.reject(error);
  }
);

export default api;
