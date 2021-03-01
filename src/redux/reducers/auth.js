import * as types from '../actionTypes';

const initialState = {
    loading: false,
    error: '',
    token: null,
    userRegistered: false
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

        case types.AUTH_USER_REGISTERED:
            return {
                ...state,
                loading: false,
                userRegistered: true
            }

        case types.AUTH_RESET_USER_REGISTERED:
            return {
                ...state,
                userRegistered: false
            }


        default:
            return state;
    }

}

export default auth