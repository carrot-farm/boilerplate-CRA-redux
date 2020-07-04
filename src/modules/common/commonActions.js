// ===== 액션 타입
export const SET_VALUE = "common/SET_VALUE"; // `key/value` 형태로 값을 셋팅한다.
export const ADD_TASKS = "common/ADD_TASKS"; // 태스크 동적 추가
export const RUN_SAGAS_ACTIONS = "common/RUN_SAGAS_ACTION"; // 외부에서 사가를 직접 호출
export const SET_NUMBER = "common/SET_NUMBER"; // 테스트용 값을 변경한다.

// ===== 액션 함수
export const setValue = (payload) => ({ type: SET_VALUE, payload });
export const addTasks = (payload) => ({ type: ADD_TASKS, payload });
export const runSagaActions = (payload) => ({
  type: RUN_SAGAS_ACTIONS,
  payload,
});
export const setNumber = (payload) => ({ type: SET_NUMBER, payload });
