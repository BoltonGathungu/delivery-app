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
export const logout = async () => {
  return await api
    .post("/auth/logout")
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
export const getUser = async () => {
  try {
    const response = await api.get("/user");
    return response;
  } catch (error) {
    return error.response;
  }
};
export const addCategory = async (data) => {
  try {
    const response = await api.post("/categories", data);
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
export const addMenuItem = async (menuItem) => {
  try {
    const response = await api.post("/menuItems", menuItem);
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
export const deleteMenuItem = async (menuItemId) => {
  try {
    const response = await api.delete(`/menuItems/${menuItemId}`);
    return response;
  } catch (error) {
    return error.response;
  }
};


export const getMenuItem = async (menuItemId) => {
  try {
    const response = await api.get(`/menuItems/${menuItemId}`);
    return response;
  } catch (error) {
    return error.response;
  }
  
};
export const updateMenuItem = async (menuItemId,menuItem) => {
  try {
    const response = await api.patch(`/menuItems/${menuItemId}`,menuItem);
    return response;
  } catch (error) {
    return error.response;
  }
  
};

