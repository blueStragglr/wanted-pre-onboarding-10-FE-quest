import axios from "axios";

// const AUTHORIZATION = "Authorization";
const SERVER_URL = "https://64f732e69d775408495348ae.mockapi.io/";

const createAPIInstance = (config) => {
  const instance = axios.create({
    ...config,
  });
  return instance;
};

const APIInstance = createAPIInstance({
  baseURL: SERVER_URL + "api/v1/",
});

const AuthAPIInstance = createAPIInstance({
  baseURL: SERVER_URL + "api/v1/authmock",
  widtCredentials: true,
});

export { APIInstance, AuthAPIInstance };
