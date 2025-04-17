import { CREATE_POLL, VOTE_POLL, FETCH_POLLS, FETCH_POLL_SUCCESS, FETCH_POLL_FAILURE } from './actions';

const initialState = {
    polls: [],
    loading: false,
    error: null,
};

const pollsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_POLLS:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_POLL_SUCCESS:
            return {
                ...state,
                loading: false,
                polls: action.payload,
            };
        case FETCH_POLL_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CREATE_POLL:
            return {
                ...state,
                polls: [...state.polls, action.payload],
            };
        case VOTE_POLL:
            return {
                ...state,
                polls: state.polls.map(poll =>
                    poll.id === action.payload.pollId
                        ? { ...poll, votes: [...poll.votes, action.payload.vote] }
                        : poll
                ),
            };
        default:
            return state;
    }
};

export default pollsReducer;