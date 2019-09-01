import axios from 'axios';
import { API_URL } from '../config';

// ACTION NAME CREATOR
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

//ACTION TYPES
export const LOAD_POSTS = createActionName('LOAD_POSTS');

//ACTIONS
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });

//THUNKS
export const loadPostsRequest = () => {
    return async dispatch => {
        try {
          let res = await axios.get(`${API_URL}/posts`);
          dispatch(loadPosts(res.data));
        } catch(e) {
          console.log(e.message);
        }
    };
  };

//INITIAL STATE
const initialState = [];

//REDUCER
export default function ordersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
        return [ ...action.payload ];
    default:
      return state;
  }
}