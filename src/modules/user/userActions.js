// ===== 액션 타입
export const SET_VALUE = "user/SET_VALUE"; // `key/value` 형태로 값을 셋팅한다.
export const LOGIN = "user/LOGIN";
export const LOGIN_SUCCESS = "user/LOGIN_SUCCESS";
export const LOGIN_FAILURE = "user/LOGIN_FAILURE";
export const LOGOUT = "user/LOGOUT";

// ===== 액션 함수
export const setValue = (payload) => ({ type: SET_VALUE, payload });
export const login = (payload) => ({ type: LOGIN, payload });
export const loginSuccess = (payload) => ({ type: LOGIN_SUCCESS, payload });
export const loginFailure = (payload) => ({ type: LOGIN_FAILURE, payload });
export const logout = (payload) => ({ type: LOGOUT, payload });
