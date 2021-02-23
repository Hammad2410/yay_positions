import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { CometChat } from '@cometchat-pro/react-native-chat';
//const axios = require('axios');

export const registerUser = (
  ipAddress,
  macAddress,
  email,
  password,
  deviceType,
  timeZone,
) => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    let user = {
      ipAddress: ipAddress,
      macAddress: macAddress,
      countryCode: store().signUp.countryCode,
      email: email,
      password: password,
      phone: store().signUp.phone,
      deviceType: deviceType,
      timeZone: timeZone,
    };
    axios
      .post(BASE_URL + 'registration/createUserWithEmailAndPassword', user)
      .then(response => {
        //  = res.JSON()
        if (response.data.success) {
          user.id = response.data.id
          user.token = response.data.token
          dispatch({ type: types.USER_REGISTERED, user: user });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
        // dispatch({type: types.USER_REGISTRATION_ERROR })
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error.message });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const verifyUser = code => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    axios
      .post(BASE_URL + 'registration/verifyCode', {
        phone: store().signUp.user.phone,
        code: code,
      })
      .then(response => {
        if (response.data.success) {
          dispatch({ type: types.USER_VERIFIED, user: response.data.userData });
          AsyncStorage.setItem('LOGGED_IN', 'true');
          AsyncStorage.setItem('USER', JSON.stringify(response.data.userData));
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
        // dispatch({type: types.USER_REGISTRATION_ERROR })
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const userLogin = (email, password) => {
  return dispatch => {
    dispatch({ type: types.LOADING_SIGN_UP });

    axios
      .post(BASE_URL + 'registration/signin', {
        email: email,
        password: password,
      })
      .then(response => {
        if (response.data.success) {
          dispatch({ type: types.USER_LOGGED_IN, user: response.data.user });
          AsyncStorage.setItem('LOGGED_IN', 'true');
          AsyncStorage.setItem('USER', JSON.stringify(response.data.user));
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error.message });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const getUser = user => {
  return dispatch => {
    let config = {
      headers: { Authorization: 'Bearer ' + user.token },
    };
    axios
      .post(
        BASE_URL + 'profile/getUser',
        {
          id: user.id,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          dispatch({ type: types.USER_FETCHED, user: response.data.user });
        } else {
          // alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const getUserByPhone = phone => {
  return dispatch => {
    axios
      .post(BASE_URL + 'profile/getUser', {
        phone: phone,
      })
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          dispatch({ type: types.USER_FETCHED_BY_PHONE, phone: phone });
        } else {
          console.log(response);
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };
};

export const getUserByEmail = email => {
  return dispatch => {
    dispatch({ type: types.LOADING_SIGN_UP });
    axios
      .post(BASE_URL + 'profile/getUser', {
        email: email,
      })
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: types.USER_FETCHED_BY_EMAIL,
            user: response.data.user,
          });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const resetPassword = password => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    axios
      .post(BASE_URL + 'forgotPassword/changePassword', {
        id: store().signUp.user.id,
        phone: store().signUp.user.phone,
        password: password,
      })
      .then(response => {
        if (response.data.success) {
          dispatch({ type: types.USER_PASSWORD_RESET });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const resetCode = code => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_SIGN_UP });
    axios
      .post(BASE_URL + 'registration/verifyCode', {
        phone: store().signUp.user.phone,
        code: code,
      })
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: types.RESET_CODE_VERIFIED,
            user: response.data.userData,
          });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const logout = () => {
  return dispatch => {
    AsyncStorage.setItem('LOGGED_IN', 'false');
    AsyncStorage.setItem('USER', '');
    CometChat.logout();
    dispatch({ type: types.USER_LOGGED_OUT });

  };
};

export const resetPasswordReset = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ACTION_PASSWORD_RESET });
  };
};

export const selectProfileImage = (image) => {
  return dispatch => {
    dispatch({ type: types.SELECT_PROFILE_IMAGE, image: image })
  }
}

export const verifyPhoneNumber = (phone, countryCode) => {
  console.log("Country Code ", countryCode)

  return dispatch => {
    dispatch({ type: types.LOADING_SIGN_UP });

    axios
      .post(BASE_URL + 'registration/verifyPhoneNumber', {
        phone: phone,
      })
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          dispatch({ type: types.PHONE_VERIFIED, code: response.data.code, phone: phone, countryCode: countryCode });
        } else {
          dispatch({ type: types.ERROR_SIGN_UP, message: response.data.message })
          setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_SIGN_UP, message: error.message })
        setTimeout(() => dispatch({ type: types.RESET_ERROR_SIGN_UP }), 10000);
      });
  };
};

export const resetCodeSent = () => {
  return dispatch => {
    dispatch({ type: types.RESET_CODE_SENT })
  }
}

export const addUserInfo = (firstName, lastName, birthDay) => {
  return (dispatch, store) => {
    let config = {
      headers: {
        'Content-Type': "multipart/form-data",
        'Accept': "application/json",
        Authorization: 'Bearer ' + store().signUp.user.token
      },
    };

    let user = store().signUp.user
    user.firstName = firstName
    user.lastName = lastName
    user.dob = birthDay
    user.profileImage = store().signUp.profileImage

    let formData = new FormData()

    formData.append("id", store().signUp.user.id)
    formData.append("firstName", firstName)
    formData.append("lastName", lastName)
    formData.append("dob", birthDay)
    formData.append("image", store().signUp.profileImage)

    axios
      .post(
        BASE_URL + 'registration/addUserInfo',
        formData,
        config,
      )
      .then(response => {
        if (response.data.success) {
          AsyncStorage.setItem('LOGGED_IN', 'true');
          AsyncStorage.setItem('USER', JSON.stringify(user));
          dispatch({ type: types.USER_UPDATED, user: user, phone: store().signUp.phone });
        } else {
          // alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
      });
  };
};

export const resetUserUpdate = () => {
  return dispatch => {
    dispatch({ type: types.RESET_USER_UPDATE })
  }
}

export const selectContacts = (contacts) => {
  return dispatch => {
    dispatch({ type: types.SELECT_SIGNUP_CONTACT, contacts: contacts })
  }
}
