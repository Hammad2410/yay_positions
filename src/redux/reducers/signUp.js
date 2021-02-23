import * as types from '../actionTypes';

const initialState = {
  user: {},
  userLoggedIn: false,
  userRegistered: false,
  userRegistrationError: false,
  userVerified: false,
  userValid: false,
  passwordReset: false,
  phone: "",
  verificationCodeSent: false,
  errorMessage: '',
  loading: false,
  profileImage: '',
  code: '',
  countryCode: '',
  userUpdated: false,
  contacts: [],
};
const signUp = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_REGISTERED:
      return {
        ...state,
        userRegistered: true,
        user: action.user,
        phone: action.user.phone,
        loading: false,
      };

    case types.USER_REGISTRATION_ERROR:
      return {
        ...state,
        userRegistrationError: true,
      };

    case types.USER_VERIFIED:
      return {
        ...state,
        userVerified: true,
        user: action.user,
        userLoggedIn: true,
        loading: false,
      };

    case types.USER_LOGGED_IN:
      return {
        ...state,
        user: action.user,
        userLoggedIn: true,
        loading: false,
      };

    case types.USER_FETCHED:
      return {
        ...state,
        user: action.user,
        userLoggedIn: true,
      };

    case types.PROFILE_UPDATED:
      return {
        ...state,
        user: action.user,
      };

    case types.USER_FETCHED_BY_PHONE:
      return {
        ...state,
        phone: action.phone,
        verificationCodeSent: true,
      };

    case types.USER_PASSWORD_RESET:
      return {
        ...state,
        passwordReset: true,
        userValid: false,
        verificationCodeSent: false,
        userVerified: false,
        loading: false,
      };

    case types.RESET_CODE_VERIFIED:
      return {
        ...state,
        userVerified: true,
        user: action.user,
        loading: false,
      };

    case types.USER_FETCHED_BY_EMAIL:
      return {
        ...state,
        user: action.user,
        userValid: true,
        loading: false,
      };

    case types.USER_LOGGED_OUT:
      return {
        ...state,
        user: {},
        userLoggedIn: false,
        userRegistered: false,
        userRegistrationError: false,
        userVerified: false,
        userValid: false,
        passwordReset: false,
        phone: null,
        verificationCodeSent: false,
      };

    case types.RESET_ACTION_PASSWORD_RESET:
      return {
        ...state,
        userLoggedIn: false,
        userRegistered: false,
        userRegistrationError: false,
        userVerified: false,
        userValid: false,
        passwordReset: false,
        phone: null,
        verificationCodeSent: false,
      };

    case types.ERROR_SIGN_UP:
      return {
        ...state,
        errorMessage: action.message,
        loading: false,
      };

    case types.RESET_ERROR_SIGN_UP:
      return {
        ...state,
        errorMessage: '',
      };

    case types.LOADING_SIGN_UP:
      return {
        ...state,
        loading: true,
      };

    case types.PHONE_UPDATED:
      return {
        ...state,
        user: {
          ...state.user,
          phone: action.phone
        }
      };

    case types.DELETE_PROFILE_IMAGE:
      return {
        ...state,
        user: action.user
      }

    case types.SELECT_PROFILE_IMAGE:
      return {
        ...state,
        profileImage: action.image
      }

    case types.PHONE_VERIFIED:
      return {
        ...state,
        verificationCodeSent: true,
        code: action.code,
        phone: action.phone,
        countryCode: action.countryCode,
        loading: false
      }

    case types.RESET_CODE_SENT:
      return {
        ...state,
        verificationCodeSent: false,
      }

    case types.USER_UPDATED:
      return {
        ...state,
        userUpdated: true,
        user: action.user,
        phone: action.user.phone,
        loading: false,
      };

    case types.SELECT_SIGNUP_CONTACT:
      return {
        ...state,
        contacts: action.contacts
      }

    case types.RESET_USER_UPDATE:
      return {
        ...state,
        userUpdated: false,
      }

    default:
      return state;
  }
};

export default signUp;
