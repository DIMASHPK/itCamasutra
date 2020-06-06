import {api} from "../api/api";

const ADD_POST = "ADD_POST";
const CHANGE_POST = "CHANGE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const IS_FETCHING = "IS_FETCHING";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, post: "Hi, how are you?", like: 3 },
    { id: 1, post: "It's my first post", like: 32 }
  ],
  src:
    "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350",
  profile: {},
  isFetching: false,
  status: null
};

const profileReducer = (state = initialState, {type, post, profile, isFetching, status, id}) => {
  switch (type) {
    case ADD_POST:
      return post
        ? {
            ...state,
            posts: [
              ...state.posts,
              {
                id: state.posts.length,
                post,
                like: 3
              }
            ],
            newPost: ""
          }
        : { ...state };
    case DELETE_POST: return {
      ...state, posts: state.posts.filter(item => item.id != id)
    }
    case SET_USER_PROFILE:
      return { ...state, profile };
    case IS_FETCHING:
      return { ...state, isFetching };
    case SET_STATUS:
      return { ...state, status };
    default:
      return { ...state };
  }
};

export const addPostActionCreater = (post) => ({ type: ADD_POST, post });

export const deletePostActionCreater = (id) => ({type: DELETE_POST, id})

export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export const fetchingData = isFetching =>  ({ type: IS_FETCHING, isFetching });

export const setProfileStatus = status =>  ({ type: SET_STATUS, status });

export const getUserThunkCreater = (userId) => (dispatch) => {
  dispatch(fetchingData(true));
  api.getUser(userId)
      .then(res => dispatch(setUserProfile(res.data)))
      .then(() => dispatch(fetchingData(false)));
}

export const getStatusThunkCreater = (userId) => (dispatch) => {
  dispatch(fetchingData(true));
  api.getStatus(userId)
      .then(res => dispatch(setProfileStatus (res.data)))
      .then(() => dispatch(fetchingData(false)));
}

export const updateStatusThunkCreater = (status) => (dispatch) => {
  api.updateStatus(status)
      .then(res => dispatch(setProfileStatus(status)))
}

export default profileReducer;
