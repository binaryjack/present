import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPolls, submitVote } from '../../../services/pollService';
import { 
    FETCH_POLLS_REQUEST, 
    FETCH_POLLS_SUCCESS, 
    FETCH_POLLS_FAILURE, 
    SUBMIT_VOTE_REQUEST, 
    SUBMIT_VOTE_SUCCESS, 
    SUBMIT_VOTE_FAILURE 
} from './actions';

function* fetchPollsSaga() {
    try {
        const polls = yield call(fetchPolls);
        yield put({ type: FETCH_POLLS_SUCCESS, payload: polls });
    } catch (error) {
        yield put({ type: FETCH_POLLS_FAILURE, payload: error.message });
    }
}

function* submitVoteSaga(action) {
    try {
        const response = yield call(submitVote, action.payload);
        yield put({ type: SUBMIT_VOTE_SUCCESS, payload: response });
    } catch (error) {
        yield put({ type: SUBMIT_VOTE_FAILURE, payload: error.message });
    }
}

export default function* pollsSaga() {
    yield takeEvery(FETCH_POLLS_REQUEST, fetchPollsSaga);
    yield takeEvery(SUBMIT_VOTE_REQUEST, submitVoteSaga);
}