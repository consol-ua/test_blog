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

export const sendPost = (title, body) => (dispatch) => {
  axios
    .post("https://simple-blog-api.crew.red/posts/", {
      title: title,
      body: body
    })
    .then((response) => {
      if (response.status < 300) {
        console.log("OK");
        dispatch({ type: type.SEND_POST });
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
