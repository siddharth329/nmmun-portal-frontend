import {ResourceActionTypes} from "./resource.types";

const initialState = {}

export const resourceReducers = (state=initialState, action) => {
    switch (action.type) {
        case ResourceActionTypes.FETCH_RESOURCE_START:
            return {loading: true}
        case ResourceActionTypes.FETCH_RESOURCE_SUCCESS:
            return {loading: false, resources: action.payload}
        case ResourceActionTypes.FETCH_RESOURCE_FAIL:
            return {loading: false, error: action.payload}
        default: return state
    }
}