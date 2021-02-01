import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'


type InitialStateType = {
  lastPostId: number
  allPosts: Array<PostType>
  currentPagePath: string
  newPostTitle: string | null
  newPostBody: string | null
  isLoaded: boolean
}

const initialState: InitialStateType = {
,
  currentPagePath: '',
  newPostBody: null,
  newPostTitle: null,
  isLoaded: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case value:

      break;

    default:
      return state;
  }
}