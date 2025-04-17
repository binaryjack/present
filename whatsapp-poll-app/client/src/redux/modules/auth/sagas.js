import { call, put, takeLatest } from 'redux-saga/effects';
import { loginSuccess, loginFailure } from './actions';
import { authService } from '../../../services/authService';

function* login(action) {
    try {
        const response = yield call(authService.login, action.payload);
        yield put(loginSuccess(response.data));
    } catch (error) {
        yield put(loginFailure(error.message));
    }
}

export function* watchLogin() {
    yield takeLatest('LOGIN_REQUEST', login);
}

export default function* authSaga() {
    yield watchLogin();
}