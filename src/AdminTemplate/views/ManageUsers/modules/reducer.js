import {
  ADD_USER_FAILED,
  ADD_USER_SUCCESS,
  DELETE_USER_FAILED,
  EDIT_USER,
  EDIT_USER_FAILED,
  EDIT_USER_LOADING,
  FIND_USER,
  GET_USERS_FAILED,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
} from "./constants";

const initialState = {
  data: null,
  error: null,
  listUsers: null,
  loading: false,
  newUser: null,
  keywords: "",
  editUser: null
};

const ManageUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LOADING: {
      return { ...state, loading: true };
    }

    case GET_USERS_SUCCESS: {
      state.loading = false;
      state.listUsers = action.payload;
      state.newUser = null;
      state.editUser = null
      state.error = null;
      return { ...state };
    }

    case GET_USERS_FAILED: {
      state.loading = false;
      state.listUsers = null;
      state.error = action.payload;
      return { ...state };
    }

    case EDIT_USER_LOADING: {
      return { ...state, loading: true };
    }

    case EDIT_USER_FAILED: {
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }

    case DELETE_USER_FAILED: {
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }

    case ADD_USER_FAILED: {
      state.newUser = action.newUser
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }

    case ADD_USER_SUCCESS: {
      state.loading = false;
      state.newUser = null;
      state.error = null;
      return { ...state };
    }

    case FIND_USER: {
      state.keywords = action.payload
      return { ...state };
    }

    case EDIT_USER: {
      state.editUser = action.payload
      return {...state}
    }

    default:
      return { ...state };
  }
};

export default ManageUsersReducer;
