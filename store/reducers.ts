import { combineReducers } from 'redux'

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
  defaultImg: string
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
  defaultImg: 'https://neilpatel.com/wp-content/uploads/2018/10/blog.jpg'
}

// LAST POST REDUCER
const postReducer = (state = initialPostState, action): PostType => {
  switch (type) {
    case types.INCREMENT:
      return state
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
  switch (type) {
    case types.TICK:
      return state
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
  switch (type) {
    case types.TICK:
      return state
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
