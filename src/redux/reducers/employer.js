import * as types from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    candidates: [],
    jobs: [],
    favorites: [],
    candidateProfile: null,
    candidateId: null,
    hired: [],
    applied: [],
    filteredCandidates: [],
};

const employer = (state = initialState, action) => {
    switch (action.type) {

        case types.EMPLOYER_LOADING:
            return {
                ...state,
                loading: true,
            }

        case types.EMPLOYER_ERROR:
            return {
                ...state,
                error: action.message,
                loading: false
            }

        case types.EMPLOYER_RESET_ERROR:
            return {
                ...state,
                error: ''
            }

        case types.EMPLOYER_CANDIDATES_FETCHED:
            return {
                ...state,
                loading: false,
                candidates: action.candidates,
                filteredCandidates: action.candidates,
            }

        case types.EMPLOYER_JOBS_FETCHED:
            return {
                ...state,
                loading: false,
                jobs: action.jobs
            }

        case types.EMPLOYER_FAVORITES_FETCHED:
            return {
                ...state,
                loading: false,
                favorites: [...action.favorites]
            }

        case types.EMPLOYER_CANDIDATE_PROFILE_FETCHED:
            return {
                ...state,
                loading: false,
                candidateProfile: action.profile
            }

        case types.EMPLOYER_SET_CANDIDATE_ID:
            return {
                ...state,
                candidateProfile: null,
                candidateId: action.id
            }

        case types.EMPLOYER_JOB_CREATED:
            return {
                ...state,
                error: action.message,
                loading: false
            }

        case types.EMPLOYER_HIRED_CANDIDATES_FETCHED:
            return {
                ...state,
                hired: action.hired,
                loading: false
            }

        case types.EMPLOYER_APPLIED_CANDIDATES_FETCHED:
            return {
                ...state,
                loading: false,
                applied: action.applied
            }

        case types.EMPLOYER_APPLY_CANDIDATE_FILTER:
            return {
                ...state,
                filteredCandidates: action.candidates
            }

        default:
            return state;
    }

}

export default employer