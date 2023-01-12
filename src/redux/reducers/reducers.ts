import { reducer as postReducer } from "../posts/reducer";
import { combineReducers } from "redux";

const reducer=combineReducers({
    posts:postReducer
})


export default reducer;