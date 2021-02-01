import { combineReducers } from 'redux'
import { ADD_BODY_COMMENT, ADD_TITLE_COMMENT } from './type'

type CommentType = {
  id: number
  postId: number
  body: string
}
type PostType = {
  postId: number
  postTitle: string
  postBody: string
  comments?: Array<CommentType>
  newTitleComment?: string
  newBodyComment?: string

}

// POST STATE
const initialPostState: PostType = {
  postId: 0,
  postTitle: '',
  postBody: '',
  comments: [
    {
      id: 0,
      postId: 0,
      body: ''
    }
  ],
  newBodyComment: '',
  newTitleComment: ''
}

// LAST POST REDUCER
const postReducer = (state = initialPostState, action): PostType => {
  switch (action.type) {
    case ADD_TITLE_COMMENT:
      return { ...state, newTitleComment: action.titleComment }
    case ADD_BODY_COMMENT:
      return { ...state, newBodyComment: action.bodyComment }
    default:
      return state
  }
}

type AllPostsType = {
  allPosts: Array<PostType>
}

// ALL POSTS STATE
const initialAllPostsState: AllPostsType = {
  allPosts: [
    {
      postId: 0,
      postTitle: '',
      postBody: '',
    }
  ]
}

// ALL POSTS REDUCER
const allPostsReducer = (state = initialAllPostsState, action): AllPostsType => {
  switch (action.type) {

    default:
      return state
  }
}

// CREATE POST STATE
const initialCreatePostState = {
  title: '',
  body: '',
}

type CreatePostType = typeof initialCreatePostState
// CREATE POST REDUCER
const createPostReducer = (state = initialCreatePostState, action): CreatePostType => {
  switch (action.type) {

    default:
      return state
  }
}

// COMBINED REDUCERS
const reducers = combineReducers({
  post: postReducer,
  createPost: createPostReducer,
  allPost: allPostsReducer
})

export type GlobalStateType = ReturnType<typeof reducers>
export default reducers
