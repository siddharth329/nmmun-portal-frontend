import {combineReducers} from "redux";

import {resourceReducers} from "./resource/resource.reducers";

export const rootReducer = combineReducers({
    resourceReducer: resourceReducers
})
