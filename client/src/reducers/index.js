import { GET_STORIES_DATA_START,GET_STORIES_DATA_SUCCESS, GET_STORIES_DATA_FAILURE, 
    GET_STORIES_PENDING_DATA_START,GET_STORIES_PENDING_DATA_SUCCESS,GET_STORIES_PENDING_DATA_FAILURE,
        } from '../actions'

const initialState = {
    stories: [],
    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_STORIES_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_STORIES_DATA_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isLoading: false
            }
        case GET_STORIES_DATA_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case GET_STORIES_PENDING_DATA_START:
            return {
                ...state,
                isLoading: true
            }
        case GET_STORIES_PENDING_DATA_SUCCESS:
            return {
                ...state,
                stories: action.payload,
                isLoading: false
                    }
        case GET_STORIES_PENDING_DATA_FAILURE:
                return {
                    ...state,
                    isLoading: false,
                    error: action.payload
                }

         default:
            return state
    }
}