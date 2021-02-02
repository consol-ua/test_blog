import { combineReducers } from "redux";
import * as type from "./type";

type CommentType = {
  id: number;
  postId: number;
  body: string;
};
type PostType = {
  id: number;
  title: string;
  body: string;
  comments?: Array<CommentType>;
  newTitleComment?: string;
  newBodyComment?: string;
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
  newTitleComment: ""
};

// POST REDUCER
const postReducer = (state = initialPostState, action): PostType => {
  switch (action.type) {
    // case type.ADD_TITLE_COMMENT:
    //   return { ...state, newTitleComment: action.titleComment };
    // case type.ADD_BODY_COMMENT:
    //   return { ...state, newBodyComment: action.bodyComment };
    default:
      return state;
  }
};

type AllPostsType = {
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
  action
): AllPostsType => {
  // debugger
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
  isPosted: false
};

type CreatePostType = typeof initialCreatePostState;
// CREATE POST REDUCER
const createPostReducer = (
  state = initialCreatePostState,
  action
): CreatePostType => {
  switch (action.type) {
    case type.ADD_TITLE_POST:
      return { ...state, title: action.titlePost };
    case type.ADD_BODY_POST:
      return { ...state, body: action.bodyPost };
    case type.SEND_POST:
      return { ...state, body: "", title: "" };
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
