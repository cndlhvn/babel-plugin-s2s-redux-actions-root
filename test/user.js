import { createAction } from "redux-actions";

export const getUserRequest = createAction("GET_USER_REQUEST");
export const getUserSuccess = createAction("GET_USER_SUCCESS");
export const getUserFailure = createAction("GET_USER_FAILURE");
