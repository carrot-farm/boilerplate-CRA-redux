import { put, call, take, fork, select } from "redux-saga/effects";

import {
  setValue,
  SET_NUMBER,
  ADD_TASKS,
  RUN_SAGAS_ACTIONS,
} from "./commonActions";

/* ==========================================
	workers
========================================== */
/** 테스트용 사가 */
function* changeNumberSaga(number) {
  yield put(setValue(["number", number]));
}

/* ==========================================
  watcher
========================================== */
/** task 추가 */
function* watchAddTasks() {
  while (true) {
    const { payload, resolve } = yield take(ADD_TASKS);
    const type = typeof payload;

    if (type === "function") {
      yield fork(payload);
    } else {
      for (const i of payload) {
        yield fork(i);
      }
    }
    // # sync dispatch 로 호출시 resolve 가 있을 경우.
    if (resolve) {
      resolve();
    }
  }
}

/** 외부에서 사가를 직접 호출 */
function* watchRunSagas() {
  while (true) {
    const {
      payload: { sagas, resolve },
    } = yield take(RUN_SAGAS_ACTIONS);
    for (const i of sagas) {
      yield* i.saga(i.payload);
    }
    resolve(yield select());
  }
}

/** 테스트용 워커 */
function* watchChangeNumber() {
  while (true) {
    const { payload: number } = yield take(SET_NUMBER);
    yield call(changeNumberSaga, number);
  }
}

/* ==========================================
  export
========================================== */
export default {
  watchAddTasks,
  watchRunSagas,
  watchChangeNumber,
};
