import axios from 'axios';
import { API_URL } from '../config';

// ACTION NAME CREATOR
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

//ACTION TYPES
export const LOAD_POSTS = createActionName('LOAD_POSTS');
export const LOAD_SINGLE_POST = createActionName('LOAD_SINGLE_POST');
export const LOAD_RANDOM_POST = createActionName('LOAD_RANDOM_POST');
export const LOAD_POSTS_PAGE = createActionName('LOAD_POSTS_PAGE');
export const START_REQUEST = createActionName('START_REQUEST');
export const END_REQUEST = createActionName('END_REQUEST');
export const ERROR_REQUEST = createActionName('ERROR_REQUEST');
export const RESET_REQUEST = createActionName('RESET_REQUEST');

//ACTIONS
export const loadPosts = payload => ({ payload, type: LOAD_POSTS });
export const loadSinglePost = payload => ({payload, type: LOAD_SINGLE_POST });
export const loadRandomPost = payload => ({payload, type: LOAD_RANDOM_POST });
export const loadPostsByPage = payload => ({ payload, type: LOAD_POSTS_PAGE });
export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });
export const resetRequest = () => ({ type: RESET_REQUEST });

//THUNKS
export const loadPostsRequest = () => {
    return async dispatch => {
     dispatch(startRequest());

      try {
        let res = await axios.get(`${API_URL}/posts`);
        dispatch(endRequest());
        dispatch(loadPosts(res.data));  
      } catch(e) {
        dispatch(errorRequest(e.message));
      }
    };
  };

export const loadSinglePostRequest = (id) => {
  return async dispatch => {
    dispatch(startRequest());

    try {
      let res = await axios.get(`${API_URL}/posts/${id}`);
      await dispatch(loadSinglePost(res.data));  
      dispatch(endRequest());
    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const addPostRequest = (post) => {
  return async dispatch => {
    dispatch(startRequest());

    try {
      let res = await axios.post(`${API_URL}/posts`, post);
      dispatch(endRequest());
    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const editPostRequest = (post, id) => {
  return async dispatch => {
    dispatch(startRequest());

    try {
      let res = await axios.patch(`${API_URL}/posts/${id}`, post);
      dispatch(endRequest());
    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };
};

export const loadPostsByPageRequest = (page, PerPage) => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      const postsPerPage = PerPage;

      const startAt = (page - 1) * postsPerPage;
      const limit = postsPerPage;

      let res = await axios.get(`${API_URL}/posts/range/${startAt}/${limit}`);

      const payload = {
        posts: res.data.posts,
        amount: res.data.amount,
        postsPerPage,
        presentPage: page,
      };

      dispatch(loadPostsByPage(payload));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const getRandomPost = (id) => {
  return async dispatch => {
    dispatch(startRequest());

    try {
      let res = await axios.get(`${API_URL}/posts/random/${id}`);
      await dispatch(loadRandomPost(res.data));

      dispatch(endRequest());
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
  },
  singlePost: {},
  randomPost: {},
  amount: 0,
  postsPerPage: 10,
  presentPage: 1
};

//REDUCER
export default function ordersReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_POSTS:
        return  { ...state, data: action.payload };
    case LOAD_SINGLE_POST:
      return { ...state, singlePost: action.payload };
    case LOAD_RANDOM_POST:
      return { ...state, randomPost: action.payload };
    case LOAD_POSTS_PAGE:
      return {
        ...state,
        postsPerPage: action.payload.postsPerPage,
        presentPage: action.payload.presentPage,
        amount: action.payload.amount,
        data: [...action.payload.posts],
      };
    case START_REQUEST:
      return { ...state, request: { pending: true, error: null, success: null } };
    case END_REQUEST:
      return { ...state, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...state, request: { pending: false, error: action.error, success: false } };
    case RESET_REQUEST:
      return { ...state, request: { pending: false, error: null, success: null } };
    default:
      return state;
  }
}