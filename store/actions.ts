import axios from "axios";
import * as type from "./type";

export const addTitleComment = (titleComment: string) => ({
  type: type.ADD_TITLE_COMMENT,
  titleComment
});

export const addBodyComment = (bodyComment: string) => ({
  type: type.ADD_BODY_COMMENT,
  bodyComment
});

export const addTitlePost = (titlePost: string) => ({
  type: type.ADD_TITLE_POST,
  titlePost
});

export const addBodyPost = (bodyPost: string) => ({
  type: type.ADD_BODY_POST,
  bodyPost
});
export const isSendPos = (isPosted) => ({
  type: type.SET_POST_LOADED,
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
      console.log("ERROR SET POST API");
    });
};
