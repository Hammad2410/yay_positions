import * as types from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    invitations: []
};

const candidate = (state = initialState, action) => {
    switch (action.type) {

        case types.CANDIDATE_LOADING:
            return {
                ...state,
                loading: true,
            }

        case types.CANDIDATE_ERROR:
            return {
                ...state,
                error: action.message,
                loading: false
            }

        case types.CANDIDATE_RESET_ERROR:
            return {
                ...state,
                error: ''
            }

        case types.CANDIDATE_INVITATION_FETCHED:
            return {
                ...state,
                loading: false,
                invitations: action.invitations
            }

        default:
            return state;
    }

}

export default candidate