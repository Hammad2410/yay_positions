import * as types from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    candidates: [],
    jobs: [],
    favorites: []
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
                candidates: action.candidates
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
                favorites: action.favorites
            }


        default:
            return state;
    }

}

export default employer