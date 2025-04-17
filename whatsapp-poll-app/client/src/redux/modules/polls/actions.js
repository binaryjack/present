export const CREATE_POLL = 'CREATE_POLL';
export const CREATE_POLL_SUCCESS = 'CREATE_POLL_SUCCESS';
export const CREATE_POLL_FAILURE = 'CREATE_POLL_FAILURE';

export const SUBMIT_VOTE = 'SUBMIT_VOTE';
export const SUBMIT_VOTE_SUCCESS = 'SUBMIT_VOTE_SUCCESS';
export const SUBMIT_VOTE_FAILURE = 'SUBMIT_VOTE_FAILURE';

export const FETCH_POLLS = 'FETCH_POLLS';
export const FETCH_POLLS_SUCCESS = 'FETCH_POLLS_SUCCESS';
export const FETCH_POLLS_FAILURE = 'FETCH_POLLS_FAILURE';

export const fetchPolls = () => ({
    type: FETCH_POLLS,
});

export const fetchPollsSuccess = (polls) => ({
    type: FETCH_POLLS_SUCCESS,
    payload: polls,
});

export const fetchPollsFailure = (error) => ({
    type: FETCH_POLLS_FAILURE,
    payload: error,
});

export const createPoll = (pollData) => ({
    type: CREATE_POLL,
    payload: pollData,
});

export const createPollSuccess = (poll) => ({
    type: CREATE_POLL_SUCCESS,
    payload: poll,
});

export const createPollFailure = (error) => ({
    type: CREATE_POLL_FAILURE,
    payload: error,
});

export const submitVote = (voteData) => ({
    type: SUBMIT_VOTE,
    payload: voteData,
});

export const submitVoteSuccess = () => ({
    type: SUBMIT_VOTE_SUCCESS,
});

export const submitVoteFailure = (error) => ({
    type: SUBMIT_VOTE_FAILURE,
    payload: error,
});