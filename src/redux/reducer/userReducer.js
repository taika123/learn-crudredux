import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_ERROR,
  CREATE_USERS_REQUEST,
  CREATE_USERS_SUCCESS,
  CREATE_USERS_ERROR,
} from "../action/type";

const INITIAL_STATE = {
  listUsers: [],
  isLoading: false,
  isError: false,
  isDisable: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      console.log("FETCH_USERS_REQUEST", action);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };

    case FETCH_USERS_SUCCESS:
      console.log("FETCH_USERS_SUCCESS", action);
      return {
        ...state,
        listUsers: action.dataUsers,
        isLoading: false,
        isError: false,
      };

    case FETCH_USERS_ERROR:
      console.log("FETCH_USERS_ERROR", action);
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case CREATE_USERS_REQUEST:
      return {
        ...state,
      };

    case CREATE_USERS_SUCCESS:
      return {
        ...state,
      };

    case CREATE_USERS_ERROR:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default userReducer;
