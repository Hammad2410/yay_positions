import * as types from '../actionTypes';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';

export const login = (email, password) => {
    return (dispatch) => {
        dispatch({ type: types.AUTH_LOADING })

        axios.post(BASE_URL + 'token', {
            username: email,
            password: password,
            grant_type: 'password'
        }).then((response) => {
            dispatch({ type: types.AUTH_LOGGED_IN, token: response.data.access_token })
        }).
            catch((error) => {
                dispatch({ type: types.AUTH_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.AUTH_RESET_ERROR }), 5000)
            })
    }
}