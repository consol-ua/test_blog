// REDUX ACTION TYPES
const ADD_TITLE_COMMENT = 'ADD_TITLE_COMMENT'
const ADD_BODY_COMMENT = 'ADD_BODY_COMMENT'
const SEND_COMMENT = 'SEND_COMMENT'

export const addTitleComment = (titleComment) => ({ type: ADD_TITLE_COMMENT, titleComment })
export const addBodyComment = (bodyComment) => ({ type: ADD_BODY_COMMENT, bodyComment })

// POST Create a comment
export const sendComment = (titleComment, bodyComment) => {
  return (dispatch) =>
    setInterval(() => {
      dispatch({ type: SEND_COMMENT, payload: { light: true, ts: Date.now() } })
    }, 1000)
}