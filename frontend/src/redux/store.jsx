import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
 import thunk from "redux-thunk";
 import { reducer as gamesReducer } from "./Game/reducer";

const rootReducer = combineReducers({

    gamesReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));