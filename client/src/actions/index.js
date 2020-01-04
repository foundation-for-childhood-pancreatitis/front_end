import api from '../utils/api'

export const GET_STORIES_DATA_START = 'GET_STORIES_DATA_START'
export const GET_STORIES_DATA_SUCCESS = 'GET_STORIES_DATA_SUCCESS'
export const GET_STORIES_DATA_FAILURE = 'GET_STORIES_DATA_FAILURE'

export function fetchStoriesData() {
    return dispatch => {
        dispatch({ type: GET_STORIES_DATA_START })
        api()
        .get('/story')
        .then(res => {console.log("RES STORIES", res)
            dispatch({ type:GET_STORIES_DATA_SUCCESS, payload: res.data.data.filter(item => item.approved === true) })})
        .catch(err => {
            dispatch({ type: GET_STORIES_DATA_FAILURE, payload: err.response})
        })
    }
}

export const GET_STORIES_PENDING_DATA_START = 'GET_STORIES_DATA_START'
export const GET_STORIES_PENDING_DATA_SUCCESS = 'GET_STORIES_DATA_SUCCESS'
export const GET_STORIES_PENDING_DATA_FAILURE = 'GET_STORIES_DATA_FAILURE'

export function fetchStoriesPendingData() {
    return dispatch => {
        dispatch({ type: GET_STORIES_PENDING_DATA_START })
        api()
        .get('/story')
        .then(res => {console.log("RES PENDING STORIES", res)
            dispatch({ type:GET_STORIES_PENDING_DATA_SUCCESS, payload: res.data.data.filter(item => item.approved === false) })})
        .catch(err => {
            dispatch({ type: GET_STORIES_PENDING_DATA_FAILURE, payload: err.response})
        })
    }
}

