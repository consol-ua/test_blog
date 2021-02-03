import axios from "axios";
import * as type from "./type";


export const addBodyComment = (bodyComment: string) => ({
  type: type.ADD_BODY_COMMENT,
  bodyComment
});

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
        dispatch(getPost(postId))
      }
    })
    .catch((error) => {
      if (error.response.status > 399) {
        console.log("ERROR SEND COMMENT API");
      }
    });
};

export const addTitlePost = (titlePost: string) => ({
  type: type.ADD_TITLE_POST,
  titlePost
});

export const addBodyPost = (bodyPost: string) => ({
  type: type.ADD_BODY_POST,
  bodyPost
});
export const isSendPos = (isPosted) => ({
  type: type.SEND_POSTED,
  isPosted
});
export const redirected = (redirect) => ({
  type: type.REDIRECT,
  redirect
});

export const sendPost = (title, body) => (dispatch) => {
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

export const isLoadedPos = (isLoaded) => ({
  type: type.SET_POST_LOADED,
  isLoaded
});
export const setPost = () => (dispatch) => {
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
export const delPost = (id) => (dispatch) => {
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

export const isGetPost = (isGetPost) => ({
  type: type.IS_GET_POST,
  isGetPost
});
export const getPost = (id) => (dispatch) => {
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