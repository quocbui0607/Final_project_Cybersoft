import { combineReducers } from "redux";
import ManageUsersReducer from "../../AdminTemplate/views/ManageUsers/modules/reducer";
import ManageMoviesReducer from "../../AdminTemplate/views/ManageMovies/modules/reducer";
import AuthenticationReducer from "../../AdminTemplate/Authentication/modules/reducer";

const rootReducer = combineReducers({
    ManageUsersReducer,
    AuthenticationReducer,
    ManageMoviesReducer
});

export default rootReducer;
