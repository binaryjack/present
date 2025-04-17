export const initialState = {
    votes: [],
    loading: false,
    error: null,
};

const whatsappReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_VOTES_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'FETCH_VOTES_SUCCESS':
            return {
                ...state,
                loading: false,
                votes: action.payload,
            };
        case 'FETCH_VOTES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case 'SUBMIT_VOTE_REQUEST':
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'SUBMIT_VOTE_SUCCESS':
            return {
                ...state,
                loading: false,
                votes: [...state.votes, action.payload],
            };
        case 'SUBMIT_VOTE_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default whatsappReducer;