import {
  ADD_MOVIE_FAILED,
  ADD_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILED,
  EDIT_MOVIE,
  EDIT_MOVIE_FAILED,
  EDIT_MOVIE_LOADING,
  FIND_MOVIE,
  GET_MOVIES_FAILED,
  GET_MOVIES_LOADING,
  GET_MOVIES_SUCCESS,
  UPLOAD_IMG_FAILED,
} from "./constants";

const initialState = {
  data: null,
  error: null,
  listMovies: null,
  loading: false,
  newMovie: null,
  keywords: "",
  editMovie: null,
};

const ManageMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_LOADING: {
      return { ...state, loading: true };
    }

    case GET_MOVIES_SUCCESS: {
      state.loading = false;
      state.listMovies = action.payload;
      state.newMovie = null;
      state.editMovie = null;
      state.error = null;
      return { ...state };
    }

    case GET_MOVIES_FAILED: {
      state.loading = false;
      state.listMovies = null;
      state.error = action.payload;
      return { ...state };
    }

    case EDIT_MOVIE_LOADING: {
      return { ...state, loading: true };
    }

    case EDIT_MOVIE_FAILED: {
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }

    case DELETE_MOVIE_FAILED: {
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }

    case ADD_MOVIE_FAILED: {
      state.newMovie = action.newMovie;
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }

    case ADD_MOVIE_SUCCESS: {
      state.loading = false;
      state.newMovie = null;
      state.error = null;
      return { ...state };
    }

    case FIND_MOVIE: {
      state.keywords = action.payload;
      return { ...state };
    }

    case EDIT_MOVIE: {
      state.editMovie = action.payload;
      return { ...state };
    }

    case UPLOAD_IMG_FAILED: {
      state.newMovie = null;
      state.loading = false;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default ManageMoviesReducer;
