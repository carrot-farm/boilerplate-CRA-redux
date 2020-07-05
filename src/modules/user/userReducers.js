import { handleActions } from "redux-actions";
import produce from "immer";

import { SET_VALUE } from "./userActions";

// ===== 초기 상태
export const initialState = {
  number: 0,
};

// ===== 리듀서
export default handleActions(
  {
    // # key/value 형태로 값을 셋팅한다.
    [SET_VALUE]: (state, { payload: [key, value] }) =>
      produce(state, (draft) => {
        draft[key] = value;
      }),
  },
  initialState
);
