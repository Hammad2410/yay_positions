import * as types from '../actionTypes';

const initialState = {
  circleCreated: false,
  circles: [],
  circle: null,
  members: [],
  circleId: null,
  gettingCircles: true,
  gettingMembers: true,
  circleMemberssAdded: false,
  loading: false,
  errorMessage: '',
  closeContacts: false,
};

const circle = (state = initialState, action) => {
  switch (action.type) {

    case types.CLOSE_CONTACT: {
      return {
          ...state,
          closeContacts: false,
      }
  }


    case types.CIRCLE_CREATED:
      return {
        ...state,
        circleCreated: true,
        circleId: action.circleId,
        loading: false,
      };

    case types.USER_LOGGED_OUT:
      return {
        ...state,
        circleCreated: false,
      };

    case types.CIRCLES_FETCHED:
      return {
        ...state,
        circles: action.circles,
        members: [],
        gettingCircles: false,
        loading: false,
      };

    case types.CIRCLE_DATA_FETCHED:
      return {
        ...state,
        circle: action.circle,
        loading: false,
      };

    case types.CIRCLE_MEMBERS_FETCHED:
      return {
        ...state,
        members: action.members,
        gettingMembers: false,
        loading: false,
      };

    case types.RESET_ACTION_CIRCLE_CREATED:
      return {
        ...state,
        circleCreated: false,
      };

    case types.CLEAR_CIRCLE_DATA:
      return {
        ...state,
        circle: null,
      };

    case types.CLEAR_CIRCLE_MEMBER:
      return {
        ...state,
        members: [],
        gettingMembers: false,
      };

    case types.CIRCLE_UPDATED:

      return {
        ...state,
        circle: action.circle,
        loading: false,
        circles: action.circles
      };

    case types.CIRCLE_MEMBERS_ADDED:
      return {
        ...state,
        circleMemberssAdded: true,
        loading: false,
      };

    case types.RESET_CIRCLE_MEMBER_ADDED:
      return {
        ...state,
        circleMemberssAdded: false,
      };

    case types.LOADING_CIRCLE:
      return {
        ...state,
        loading: true
      }

    case types.ERROR_CIRCLE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        loading: false
      }

    case types.RESET_ERROR_CIRCLE:
      return {
        ...state,
        errorMessage: ''
      }

    default:
      return state;

  }
};

export default circle;
