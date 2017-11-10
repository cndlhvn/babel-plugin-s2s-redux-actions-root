import { createAction } from "redux-actions";

export const getCommentRequest = createAction("GET_COMMENT_REQUEST");
export const getCommentSuccess = createAction("GET_COMMENT_SUCCESS");
export const getCommentFailure = createAction("GET_COMMENT_FAILURE");
