import axios from 'axios';
import { API_URL } from '../config';

// ACTION NAME CREATOR
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

//ACTION TYPES
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');

//ACTIONS
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

//THUNKS
export const loadPostsRequest = () => {
    return async dispatch => {
     dispatch(startRequest());

      try {
        let res = await axios.get(`${API_URL}/posts`);
        await new Promise((resolve, reject) => setTimeout(resolve, 2000));
        dispatch(endRequest());
        dispatch(loadPosts(res.data));  
      } catch(e) {
        dispatch(errorRequest(e.message));
      }
    };
  };

//INITIAL STATE
const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null
  }
};

//REDUCER
export default function ordersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
        return  { ...state, data: action.payload };
    case START_REQUEST:
      return { ...state, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...state, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...state, request: { pending: false, error: action.error, success: false } };
    default:
      return state;
  }
}