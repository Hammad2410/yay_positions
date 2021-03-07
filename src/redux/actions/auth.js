import * as types from '../actionTypes';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';
import qs from 'qs';
export const login = (email, password) => {
    return (dispatch) => {
        dispatch({ type: types.AUTH_LOADING })


        var formData = new FormData()
        formData.append("username", email)
        formData.append("password", password)
        formData.append("grant_type", 'password')

        axios.post(BASE_URL + 'token', qs.stringify({
            username: email,
            password: password,
            grant_type: 'password'
        }), {
            // axios.post(BASE_URL + 'token', formData, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then((response) => {
            // console.log("Response : " + response.data.role)
            dispatch({ type: types.AUTH_LOGGED_IN, token: response.data.access_token, role: response.data.role })
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
                console.log("Error : ", error.message)

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

export const resetUserLoggedIn = () => {
    return (dispatch) => {
        dispatch({ type: types.AUTH_RESET_LOGIN })
    }
}