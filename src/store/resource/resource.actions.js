import {ResourceActionTypes} from "./resource.types";

export const fetchResources = () => (dispatch, getState) => {
    dispatch({type: ResourceActionTypes.FETCH_RESOURCE_START})

    try {
        let data = fetch('/api/v1/resources', { method: 'GET' })
        data = data.json()
        dispatch({
            type: ResourceActionTypes.FETCH_RESOURCE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ResourceActionTypes.FETCH_RESOURCE_FAIL,
            payload: error
        })
    }
}