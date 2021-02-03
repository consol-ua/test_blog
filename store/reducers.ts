import { combineReducers } from "redux";
import { ActionsType } from "./actions";
import * as type from "./type";

type CommentType = {
  id: number;
  postId: number;
  body: string;
};
export type PostType = {
  id: number
  title: string
  body: string
  comments?: Array<CommentType>
  newBodyComment?: string
  isGetPost?: boolean
};

// POST STATE
const initialPostState: PostType = {
  id: 0,
  title: "",
  body: "",
  comments: [
    {
      id: 0,
      postId: 0,
      body: ""
    }
  ],
  newBodyComment: "",
  isGetPost: false
};

// POST REDUCER
const postReducer = (state = initialPostState, action: ActionsType): PostType => {
  switch (action.type) {
    case type.GET_POST:
      return { ...state, ...action.data, comments: [...action.data.comments] };
    case type.IS_GET_POST:
      return { ...state, isGetPost: action.isGetPost };
    case type.ADD_BODY_COMMENT:
      return { ...state, newBodyComment: action.bodyComment };
    case type.SEND_BODY_COMMENT:
      return { ...state, newBodyComment: '' }
    default:
      return state;
  }
};

export type AllPostsType = {
  allPosts: Array<PostType>;
  isLoaded: boolean;
};

// ALL POSTS STATE
const initialAllPostsState: AllPostsType = {
  allPosts: [],
  isLoaded: false
};

// ALL POSTS REDUCER
const allPostsReducer = (
  state = initialAllPostsState,
  action: ActionsType
): AllPostsType => {
  switch (action.type) {
    case type.SET_POST:
      return {
        ...state,
        allPosts: [...action.posts.reverse()]
      };
    case type.SET_POST_LOADED:
      return {
        ...state,
        isLoaded: action.isLoaded
      };
    default:
      return state;
  }
};

// CREATE POST STATE
const initialCreatePostState = {
  title: "Test title",
  body: "Test Body",
  isPosted: false,
  redirect: false
};

type CreatePostType = typeof initialCreatePostState;
// CREATE POST REDUCER
const createPostReducer = (
  state = initialCreatePostState,
  action: ActionsType
): CreatePostType => {
  switch (action.type) {
    case type.ADD_TITLE_POST:
      return { ...state, title: action.titlePost };
    case type.ADD_BODY_POST:
      return { ...state, body: action.bodyPost };
    case type.SEND_POST:
      return { ...state, body: "", title: "" };
    case type.SEND_POSTED:
      return { ...state, isPosted: action.isPosted };
    case type.REDIRECT:
      return { ...state, redirect: action.redirect };
    default:
      return state;
  }
};

// COMBINED REDUCERS
const reducers = combineReducers({
  post: postReducer,
  createPost: createPostReducer,
  allPost: allPostsReducer
});

export type GlobalStateType = ReturnType<typeof reducers>;
export default reducers;
