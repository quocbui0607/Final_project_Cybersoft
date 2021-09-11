import {
  EDIT_USER_FAILED,
  EDIT_USER_LOADING,
  EDIT_USER_SUCCESS,
  GET_USERS_FAILED,
  GET_USERS_LOADING,
  GET_USERS_SUCCESS,
} from "./constants";

const initialState = {
  data: null,
  error: null,
  listUsers: null,
  editUser: null,
  loading: false,
};

const ManageUsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_LOADING: {
      return { ...state, loading: true };
    }

    case GET_USERS_SUCCESS: {
      state.loading = false;
      state.listUsers = action.payload;
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

    case EDIT_USER_SUCCESS: {
      state.loading = false;
      state.editUser = action.payload;
      state.error = null;
      return { ...state };
    }

    case EDIT_USER_FAILED: {
      state.loading = false;
      state.editUser = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default ManageUsersReducer;
