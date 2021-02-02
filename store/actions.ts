import axios from "axios";
import {
  ADD_BODY_COMMENT,
  ADD_TITLE_COMMENT,
  ADD_TITLE_POST,
  ADD_BODY_POST,
  SEND_POST
} from "./type";

export const addTitleComment = (titleComment: string) => ({
  type: ADD_TITLE_COMMENT,
  titleComment
});

export const addBodyComment = (bodyComment: string) => ({
  type: ADD_BODY_COMMENT,
  bodyComment
});

export const addTitlePost = (titlePost: string) => ({
  type: ADD_TITLE_POST,
  titlePost
});

export const addBodyPost = (bodyPost: string) => ({
  type: ADD_BODY_POST,
  bodyPost
});

export const sendPost = (title, body) => (dispatch) => {
  // try {
  //   const response = axios.post("https://simple-blog-api.crew.red/posts", {
  //     title,
  //     body
  //   });
  //   console.log("👉 Returned data:", response);
  // } catch (e) {
  //   console.log(`😱 Axios request failed: ${e}`);
  // }
  let postBody = {
    title: title,
    body: body
  };
  axios
    .post("https://simple-blog-api.crew.red/posts/", postBody)
    .then(function (response) {
      if (response.status < 300) {
        console.log("OK");
        dispatch({ type: SEND_POST });
      }
    })
    .catch(function (error) {
      if (error.response.status > 399) {
        console.log("ERROR API");
      }
    });
};

// // POST Create a comment
// export const sendComment = (titleComment, bodyComment) => {
//   return (dispatch) =>
//     setInterval(() => {
//       dispatch({ type: SEND_COMMENT, payload: { light: true, ts: Date.now() } })
//     }, 1000)
// }
