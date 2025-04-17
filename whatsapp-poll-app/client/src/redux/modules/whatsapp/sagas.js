import { call, put, takeEvery } from 'redux-saga/effects';
import { sendVote, fetchPolls } from '../../../services/api';
import { 
    SEND_VOTE_REQUEST, 
    SEND_VOTE_SUCCESS, 
    SEND_VOTE_FAILURE, 
    FETCH_POLLS_REQUEST, 
    FETCH_POLLS_SUCCESS, 
    FETCH_POLLS_FAILURE 
} from './actions';

function* sendVoteSaga(action) {
    try {
        const response = yield call(sendVote, action.payload);
        yield put({ type: SEND_VOTE_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: SEND_VOTE_FAILURE, payload: error.message });
    }
}

function* fetchPollsSaga() {
    try {
        const response = yield call(fetchPolls);
        yield put({ type: FETCH_POLLS_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: FETCH_POLLS_FAILURE, payload: error.message });
    }
}

export default function* whatsappSaga() {
    yield takeEvery(SEND_VOTE_REQUEST, sendVoteSaga);
    yield takeEvery(FETCH_POLLS_REQUEST, fetchPollsSaga);
}