import {
  put,
  call,
  take,
  fork,
  select,
  delay,
  cancel,
  cancelled,
} from "redux-saga/effects";

import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  loginSuccess,
  loginFailure,
} from "./userActions";

/* ==========================================
	workers
========================================== */
function* authorize(id, password) {
  try {
    // # api 리퀘스트 후 토큰을 받아온다.
    const token = "api call request token";

    // # 에러시
    // throw new Error("login failure");

    yield delay(1000);

    // # 로그인 성공 처리
    yield put(loginSuccess(token));

    // # 스토리지에 토큰 저장.
  } catch (e) {
    yield put(loginFailure(e)); // 로그인 실패 처리
  } finally {
    // # 태스크가 취소되었을 경우 실행
    if (yield cancelled()) {
      console.log("> task cancled");
      // 여기서 pending progress bar등을 처리 할 수 있다.
    }
  }
}

/* ==========================================
  watcher
========================================== */
function* watchLoginFlow() {
  while (true) {
    // # 로그인 감시
    const {
      payload: { user, password },
    } = yield take(LOGIN);

    // # 블럭되지 않게 fork로 태스크 실행
    const loginApiTask = yield fork(authorize, user, password);

    // # 로그아웃과 로그인 실패 호출 대기
    const { type } = yield take([LOGOUT, LOGIN_FAILURE]);
    console.log("> ", type, loginApiTask);

    // # 로그아웃일 경우 `LOGIN_SUCCESS`, `LOGIN_FAILURE`와 엇갈리지 않게 태스크를 api task를 취소
    if (type === LOGOUT) {
      console.log("> 로그인 api task 취소");
      yield cancel(loginApiTask);
    }

    // # 스토리지에서 데이터 삭제해서 다음 `LOGIN`시 로그인 정보가 없다는 것을 보장.
  }
}

// ===== 로그인 성공 처리
function* watchLoginSuccess() {
  while (true) {
    yield take(LOGIN_SUCCESS);
    console.log("> login success");
  }
}

/* ==========================================
  export
========================================== */
export default { watchLoginFlow, watchLoginSuccess };
