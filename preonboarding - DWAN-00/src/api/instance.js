import axios from "axios";

const instance = axios.create({
  baseURL: "https://6223bd40-6c4f-41ba-8c43-5a5676241055.mock.pstmn.io",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

export const accessInstance = axios.create({
  baseURL: "https://6223bd40-6c4f-41ba-8c43-5a5676241055.mock.pstmn.io",
  timeout: 180000,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.authorization = `Bearer ${accessToken}`;
      console.log(config.headers.authorization);
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    // 토큰을 저장
    if (response.headers.authorization) {
      const accessToken = response.headers.authorization.replace("Bearer ", "");
      localStorage.setItem("accessToken", accessToken);
    }
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem("refreshToken");
      const res = await instance.post("/auth/refresh", {
        refreshToken: refreshToken,
      });
      if (res.status === 200) {
        localStorage.setItem("accessToken", res.data.accessToken);
        return instance(originalRequest);
      }
    }
    return Promise.reject(error);
  }
);

export default instance;
