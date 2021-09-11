import { AUTH_CLEAR_DATA, AUTH_FAILED, AUTH_REQUEST, AUTH_SUCCESS } from "./constants";

const initialState = {
    loading: false,
    data: null,
    error: null,
  };

const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST: {
          state.loading = true;
          state.data = null;
          state.error = null;
          return { ...state };
        }
    
        case AUTH_SUCCESS: {
          state.loading = false;
          state.data = action.payload;
          state.error = null;
          return { ...state };
        }
    
        case AUTH_FAILED: {
          state.loading = false;
          state.data = null;
          state.error = action.payload;
          return { ...state };
        }
    
        case AUTH_CLEAR_DATA: {
          state.loading = false;
          state.data = null;
          state.error = action.payload;
          return { ...state };
        }
        
        default:
          return {...state};
      }
}

export default AuthenticationReducer;