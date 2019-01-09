import React from "react";
import createSagaMiddleware from "redux-saga";
import { render } from "react-dom";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { Provider } from "react-redux";
import { logger } from "redux-logger";
import userReducer from "./reducers/index";
import welcomeReducer from "./reducers/welcomeReducer";
import App from "./components/App";
import rootSaga from "./sagas";
import { reducer as formReducer } from "redux-form";

const sagaMiddleware = createSagaMiddleware();

const defaultState = {};

/*
  Combine all reducers to one object
*/
const rootReducer = combineReducers({
  form: formReducer,
  user: userReducer,
  welcome: welcomeReducer
});

const store = createStore(
  rootReducer,
  defaultState,
  applyMiddleware(sagaMiddleware, logger)
);

sagaMiddleware.run(rootSaga);

// console.log(store.getState());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
