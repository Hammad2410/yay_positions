import * as types from '../actionTypes';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';

export const login = (email, password) => {
    return (dispatch) => {
        dispatch({ type: types.AUTH_LOADING })

        axios.post(BASE_URL + 'token', JSON.stringify({
            username: email,
            password: password,
            grant_type: 'password'
        }), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            dispatch({ type: types.AUTH_LOGGED_IN, token: response.data.access_token })
        }).
            catch((error) => {
                console.log("Error: ", error.toString())
                dispatch({ type: types.AUTH_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.AUTH_RESET_ERROR }), 5000)
            })
    }
}

export const register = (email, name, country, role, password, confirmPassword) => {
    return (dispatch) => {
        dispatch({ type: types.AUTH_LOADING })

        axios.post(BASE_URL + 'api/account/register', {
            Email: email,
            Name: name,
            Country: country,
            Role: role,
            Password: password,
            ConfirmPassword: confirmPassword
        }).then((response) => {
            dispatch({ type: types.AUTH_USER_REGISTERED })
        }).
            catch((error) => {


                dispatch({ type: types.AUTH_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.AUTH_RESET_ERROR }), 5000)
            })
    }
}

export const resetUserRegistered = () => {
    return (dispatch) => {
        dispatch({ type: types.AUTH_RESET_USER_REGISTERED })
    }
}