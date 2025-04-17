import { all } from 'redux-saga/effects';
import authSaga from './modules/auth/sagas';
import pollsSaga from './modules/polls/sagas';
import whatsappSaga from './modules/whatsapp/sagas';

export default function* rootSaga() {
  yield all([
    authSaga(),
    pollsSaga(),
    whatsappSaga(),
  ]);
}