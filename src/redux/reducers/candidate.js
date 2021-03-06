import * as types from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    invitations: [],
    jobs: [],
    savedJobs: [],
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

        case types.CANDIDATE_JOBS_FETCHED:
            return {
                ...state,
                jobs: action.jobs
            }

        case types.CANDIDATE_SAVED_JOBS_FETCHED:
            return {
                ...state,
                savedJobs: [...action.jobs]
            }

        case types.CANDIDATE_EDUCATION_ADDED:
            return {
                ...state,
                loading: false,
                error: action.message
            }

        case types.CANDIDATE_JOB_ADDED:
            return {
                ...state,
                loading: false,
                error: action.message
            }

        default:
            return state;
    }

}

export default candidate