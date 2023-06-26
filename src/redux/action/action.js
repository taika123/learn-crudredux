import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  CREATE_USERS_ERROR,
  DELETE_USERS_REQUEST,
  DELETE_USERS_SUCCESS,
  DELETE_USERS_ERROR,
} from "./type";

// start doing fishish

//fetch all data with server API
export const fetchAllDataUsers = () => {
  //middleware redux thunk
  return async (dispatch, getState) => {
    dispatch(fetchUsersRequest());
    try {
      const res = await axios.get("http://localhost:8080/users/all");
      const data = res && res.data ? res.data : [];
      dispatch(fetchUsersSuccess(data));
      // console.log(data);
    } catch (error) {
      console.log(error, "Error");
      dispatch(fetchUsersError());
    }
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};
export const fetchUsersSuccess = (data) => {
  return {
    type: FETCH_USERS_SUCCESS,
    dataUsers: data,
  };
};
export const fetchUsersError = () => {
  return {
    type: FETCH_USERS_ERROR,
  };
};

export const createUsersRequest = () => {
  return {
    type: CREATE_USERS_REQUEST,
  };
};
export const createUsersSuccess = () => {
  return {
    type: CREATE_USERS_SUCCESS,
  };
};
export const createUsersError = () => {
  return {
    type: CREATE_USERS_ERROR,
  };
};

export const createNewUsers = (email, password, username) => {
  return async (dispatch, getState) => {
    dispatch(createUsersRequest());
    try {
      const res = await axios.post("http://localhost:8080/users/create", {
        email,
        password,
        username,
      });
      if (res && res.data.errCode === 0) {
        dispatch(createUsersSuccess());
        dispatch(fetchAllDataUsers());
      }
      console.log(data);
    } catch (error) {
      console.log(error, "Error");
      dispatch(createUsersError());
    }
  };
};
export const deleteUsersRequest = () => {
  return {
    type: DELETE_USERS_REQUEST,
  };
};
export const deleteUsersSuccess = () => {
  return {
    type: DELETE_USERS_SUCCESS,
  };
};
export const deleteUsersError = () => {
  return {
    type: DELETE_USERS_ERROR,
  };
};

export const deleteUserById = (id) => {
  return async (dispatch, getState) => {
    dispatch(deleteUsersRequest());
    try {
      const res = await axios.post(`http://localhost:8080/users/delete/${id}`);
      if (res && res.data.errCode === 0) {
        dispatch(deleteUsersSuccess());
        dispatch(fetchAllDataUsers());
      }
      console.log(data);
    } catch (error) {
      console.log(error, "Error");
      dispatch(deleteUsersError());
    }
  };
};
