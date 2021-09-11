import { combineReducers } from "redux";
import ManageUsersReducer from "../../AdminTemplate/views/ManageUsers/modules/reducer";
import AuthenticationReducer from "../../AdminTemplate/Authentication/modules/reducer";

const rootReducer = combineReducers({
    ManageUsersReducer,
    AuthenticationReducer
});

export default rootReducer;
