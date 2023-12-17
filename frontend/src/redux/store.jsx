import { legacy_createStore, applyMiddleware, combineReducers } from "redux";

import {thunk} from "redux-thunk";
import { reducer as gamesReducer } from "./Game/reducer";
import { reducer as authReducer } from "./Authentication/reducer";
import {reducer as usersReducer} from "./User/reducer";

 const rootReducer = combineReducers({
    gamesReducer,
   usersReducer,
    authReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));