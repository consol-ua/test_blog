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

export const sendPost = () => (dispatch) => {
  console.log("send");
  setTimeout(() => {
    dispatch({ type: SEND_POST });
  }, 1000);
};

// // POST Create a comment
// export const sendComment = (titleComment, bodyComment) => {
//   return (dispatch) =>
//     setInterval(() => {
//       dispatch({ type: SEND_COMMENT, payload: { light: true, ts: Date.now() } })
//     }, 1000)
// }
