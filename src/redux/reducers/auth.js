import * as types from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    token: null,
};

const auth = (state = initialState, action) => {
    switch (action.type) {

        case types.AUTH_LOADING:
            return {
                ...state,
                loading: true,
            }

        case types.AUTH_ERROR:
            return {
                ...state,
                error: action.message,
                loading: false
            }

        case types.AUTH_LOGGED_IN:
            return {
                ...state,
                loading: false,
                token: action.token
            }

        case types.AUTH_RESET_ERROR:
            return {
                ...state,
                error: ''
            }


        default:
            return state;
    }

}

export default auth