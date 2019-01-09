import { put, takeEvery, all, call } from "redux-saga/effects";

function* fetchWelcome() {
  const json = yield fetch("http://localhost:3001/welcome/").then(response =>
    response.json()
  );

  yield put({ type: "NEWS_RECEIVED", json: json });
}

function getUser(username, password) {
  const url = `http://localhost:3001/signin/`;
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    },
    body: JSON.stringify({
      email: username,
      password: password
    })
  }).then(response => response.json());
}

function* fetchUser({ username, password, resolve, reject }) {
  const json = yield call(getUser, username, password);
  // console.log(json);
  if (json.success === true) {
    yield put({ type: "USER_RECEIVED", json });
    yield call(resolve);
  } else {
    yield put({ type: "USER_RECEIVED", json });
    yield call(reject, { user: "No data" });
  }
}

function* actionWatcher() {
  yield takeEvery("GET_NEWS", fetchWelcome);
  yield takeEvery("GET_USER", fetchUser);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
