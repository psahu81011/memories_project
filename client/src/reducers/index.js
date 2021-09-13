import { combineReducers } from "redux";

import posts from "./posts";
import auth from "./auth";

export default combineReducers({
    posts,
    auth,
}); // posts:posts can be written posts ans both key and value are identical