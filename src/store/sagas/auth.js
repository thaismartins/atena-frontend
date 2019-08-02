import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { login } from "../../services/auth";
import { decrypt } from "../../services/crypto";

import { Creators as AuthActions } from "../ducks/auth";

export function* signIn(data) {
  const { user, password } = data.payload;
  try {
    const response = yield call(api.post, "auth", { user, password });
    const data = yield call(decrypt, response.data.token);
    yield put(
      AuthActions.signInSuccess({
        token: response.data.token,
        isCoreTeam: data.isCoreTeam
      })
    );
  } catch (err) {
    yield put(AuthActions.signInFailure(err));
  }
}

export function* signInLinkedin(data) {
  const { code } = data.payload;
  try {
    const response = yield call(api.post, "auth/linkedin", { code });
    const data = yield call(decrypt, response.data.token);
    yield put(
      AuthActions.signInSuccess({
        token: response.data.token,
        isCoreTeam: data.isCoreTeam
      })
    );
  } catch (err) {
    yield put(AuthActions.signInFailure(err));
  }
}

export function signInFailure(data) {
  const { type, message } = data.payload;
  // TODO: send alert error
  console.log("Erro ao logar", type, message);
}

export function signInSuccess(data) {
  const { token } = data.payload;
  login(token);
  window.location.reload();
}

export function* logout() {
  localStorage.removeItem("@at:atpin");
  yield put(window.location.reload());
}
