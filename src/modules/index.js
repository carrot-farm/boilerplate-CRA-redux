import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import { createRootSaga } from "../utils/reduxSagaUtils";
import { createReducerManager } from "../utils/reduxUtils";
import commonSagas from "./common/commonSagas";
import commonReducers from "./common/commonReducers";
import userSagas from "./user/userSagas";
import userReducers from "./user/userReducers";

// ===== rootSaga 생성
const rootSaga = createRootSaga(commonSagas, userSagas);

// ===== reducers
const reducers = {
  common: commonReducers,
  user: userReducers,
};

// ===== 스토어 생성
const makeStore = (initialState) => {
  // # 리듀서 매니저 생성
  const reducerManager = createReducerManager(reducers, combineReducers);

  // # 미들웨어 생성
  const sagaMiddleware = createSagaMiddleware();

  // # 미들웨어 합치기
  const middlewares = applyMiddleware(sagaMiddleware);

  // # 스토어 생성
  const store = createStore(
    // combineReducers(reducers),
    reducerManager.reduce,
    initialState,
    process.env.NODE_ENV === "development" && composeWithDevTools(middlewares)
  );

  // # 리덕스 매니저 셋팅
  store.reducerManager = reducerManager;

  // # 사가 실행
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

const store = makeStore();

export default store;
