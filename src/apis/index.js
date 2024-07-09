import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": process.env.REACT_APP_BASE_URL,
  },
  withCredentials: true,
});

export const register = async (data) => {
  return await api
    .post("/auth/register",data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    })};
export const login = async (data) => {
  return await api
    .post("/auth/login",data)
    .then((response) => response)
    .catch((error) => {
      return error.response;
    })};


// export const login = async (logindata) => {
//   try {
//     const response = await api.post("/auth/login", logindata);
//     return response;
//   } catch (error) {
//     return error.response;
//   }
// };
export const getCategories = async () => {
  try {
    const response = await api.get("/categories");
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getMenuItems = async () => {
  try {
    const response = await api.get("/menuItems");
    return response;
  } catch (error) {
    return error.response;
  }
};
export const getMenuItemsByCategoryId = async (categoryId) => {
  try {
    const response = await api.get(`/menuItems/category/${categoryId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};
export const searchMenuItem = async (menuKeyword) => {
  try {
    const response = await api.get(`/search/menuItems?keyword=${menuKeyword}`);
    return response;
  } catch (error) {
    return error.response;
  }
};




