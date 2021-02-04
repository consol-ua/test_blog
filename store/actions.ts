import axios from "axios";
import { Dispatch } from "redux";
import { GlobalStateType, PostType } from "./reducers";
import * as type from "./type";
export type ActionsType = SetPostType | SendPostType | AddBodyCommentType | AddTitlePostType | AddBodyPostType | IsSendPosType | RedirectedType | IsLoadedPosType | IsGetPostType | SendBodyCommentType | GetPostType

type AddBodyCommentType = { type: typeof type.ADD_BODY_COMMENT, bodyComment: string }
export const addBodyComment = (bodyComment: string): AddBodyCommentType => ({
  type: type.ADD_BODY_COMMENT,
  bodyComment: bodyComment
});
type SendBodyCommentType = {
  type: typeof type.SEND_BODY_COMMENT
}
export const sendComment = (postId: number, body: string) => (dispatch) => {
  dispatch(isGetPost(true))
  axios
    .post("https://simple-blog-api.crew.red/comments", {
      postId: postId,
      body: body
    })
    .then((response) => {
      if (response.status < 300) {
        console.log("OK");
        dispatch({ type: type.SEND_BODY_COMMENT });
        dispatch(isGetPost(false));
        dispatch(getPost(postId.toString()))
      }
    })
    .catch((error) => {
      if (error.response.status > 399) {
        console.log("ERROR SEND COMMENT API");
      }
    });
};

type AddTitlePostType = { type: typeof type.ADD_TITLE_POST, titlePost: string }
export const addTitlePost = (titlePost: string): AddTitlePostType => ({
  type: type.ADD_TITLE_POST,
  titlePost
});
type AddBodyPostType = { type: typeof type.ADD_BODY_POST, bodyPost: string }

export const addBodyPost = (bodyPost: string): AddBodyPostType => ({
  type: type.ADD_BODY_POST,
  bodyPost
});
type IsSendPosType = { type: typeof type.SEND_POSTED, isPosted: boolean }
export const isSendPos = (isPosted: boolean): IsSendPosType => ({
  type: type.SEND_POSTED,
  isPosted
});
type RedirectedType = { type: typeof type.REDIRECT, redirect: boolean }
export const redirected = (redirect: boolean): RedirectedType => ({
  type: type.REDIRECT,
  redirect
});
type SendPostType = { type: typeof type.SEND_POST }

export const sendPost = (title: string, body: string) => (dispatch: Dispatch<ActionsType>, getState: () => GlobalStateType) => {
  dispatch(isSendPos(true))
  axios
    .post("https://simple-blog-api.crew.red/posts/", {
      title: title,
      body: body
    })
    .then((response) => {
      if (response.status < 300) {
        console.log("OK");
        dispatch({ type: type.SEND_POST });
        dispatch(isSendPos(false))
        dispatch(redirected(true))
      }
    })
    .catch((error) => {
      if (error.response.status > 399) {
        console.log("ERROR SEND POST API");
      }
    });
};
type IsLoadedPosType = { type: typeof type.SET_POST_LOADED, isLoaded: boolean }
export const isLoadedPos = (isLoaded: boolean): IsLoadedPosType => ({
  type: type.SET_POST_LOADED,
  isLoaded
});

type SetPostType = { type: typeof type.SET_POST, posts: Array<PostType> }
export const setPost = () => (dispatch: Dispatch<ActionsType>, getState: () => GlobalStateType) => {
  dispatch(isLoadedPos(true));
  axios
    .get("https://simple-blog-api.crew.red/posts/")
    .then((res) => {
      dispatch({ type: type.SET_POST, posts: res.data });
      dispatch(isLoadedPos(false));
    })
    .catch((error) => {
      console.log("ERROR SET POST API");
    });
};
export const delPost = (id: number) => (dispatch) => {
  dispatch(isLoadedPos(true));
  axios
    .delete(`https://simple-blog-api.crew.red/posts/${id}`)
    .then(() => {
      dispatch(setPost());
    })
    .catch((error) => {
      console.log("ERROR DEL POST API");
    });
};
type IsGetPostType = { type: typeof type.IS_GET_POST, isGetPost: boolean }
export const isGetPost = (isGetPost: boolean): IsGetPostType => ({
  type: type.IS_GET_POST,
  isGetPost
});
type GetPostType = { type: typeof type.GET_POST, data: any }
export const getPost = (id: string | string[]) => (dispatch: Dispatch<ActionsType>, getState: () => GlobalStateType) => {
  dispatch(isGetPost(true));
  axios
    .get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`)
    .then((res) => {
      dispatch({ type: type.GET_POST, data: res.data });
      dispatch(isGetPost(false));
    })
    .catch((error) => {
      console.log("ERROR GET POST API");
    });
};