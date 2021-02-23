import * as types from '../actionTypes';

const initialState = {
  user: {},
  resetCodeSent: false,
  loading: false,
  errorMessage: '',
  phone: '',
  phoneUpdateCodeSent: false,
  phoneUpdated: false,
  numberChanged: false
};

const profile = (state = initialState, action) => {
  switch (action.type) {
    case types.PROFILE_UPDATED:
      return {
        ...state,
        user: action.user,
      };

    case types.RESET_CODE_SENT:
      return {
        ...state,
        resetCodeSent: true,
        loading: false,
      };

    case types.USER_LOGGED_OUT:
      return {
        ...state,
        user: {},
        resetCodeSent: false,
      };

    case types.USER_PASSWORD_RESET:
      return {
        ...state,
        resetCodeSent: false,
      };

    case types.LOADING_PROFILE:
      return {
        ...state,
        loading: true,
      };

    case types.ERROR_PROFILE:
      return {
        ...state,
        loading: false,
        errorMessage: action.message,
      };

    case types.RESET_ERROR_PROFILE:
      return {
        ...state,
        errorMessage: '',
      };

    case types.USER_FETCHED_BY_EMAIL:
      return {
        ...state,
        resetCodeSent: false,
      };

    case types.PHONE_UPDATE_CODE_SENT:
      return {
        ...state,
        phone: action.phone,
        phoneUpdateCodeSent: true,
        loading: false
      }

    case types.RESET_PHONE_UPDATE_CODE:
      return {
        ...state,
        phoneUpdateCodeSent: false
      }

    case types.PROFILE_UPDATED:
      return {
        ...state,
        phoneUpdated: true,
      }

    case types.RESET_PHONE_UPDATED:
      return {
        ...state,
        phoneUpdated: false,
        phone: ''
      }
    case types.PHONE_UPDATED:
      return {
        ...state,
        phoneUpdated: true,
        phone: action.phone,
        loading: false
      }

    default:
      return state;
  }
};

export default profile;
