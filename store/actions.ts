
import { ADD_BODY_COMMENT, ADD_TITLE_COMMENT } from "./type"

export const addTitleComment = (titleComment: string) => ({ type: ADD_TITLE_COMMENT, titleComment })

export const addBodyComment = (bodyComment: string) => ({ type: ADD_BODY_COMMENT, bodyComment })

// // POST Create a comment
// export const sendComment = (titleComment, bodyComment) => {
//   return (dispatch) =>
//     setInterval(() => {
//       dispatch({ type: SEND_COMMENT, payload: { light: true, ts: Date.now() } })
//     }, 1000)
// }