import { combineReducers } from "redux";
import ManageUsersReducer from "../../AdminTemplate/views/ManageUsers/modules/reducer";
import AuthenticationReducer from "../../AdminTemplate/Authentication/modules/reducer";
import listMovieReducer from "../../HomeTemplate/ListMoviePage/modules/reducer";
import detailMovieReducer from "../../HomeTemplate/DetailMoviePage/modules/reducer"

const rootReducer = combineReducers({
    ManageUsersReducer,
    AuthenticationReducer,
    listMovieReducer,
    detailMovieReducer
});

export default rootReducer;
