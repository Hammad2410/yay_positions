import * as types from '../actionTypes';

const initialState = {
  notifications: [],
  loading: true,
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case types.NOTIFICATION_FETCHED:
      return {
        ...state,
        notifications: action.notifications,
        loading: false
      };

    case types.NOTIFICATION_REMOVED:
      let newNotification = action.notifications
      return {
        ...state,
        notifications: [...newNotification],
      };

    case types.LOADING_NOTIFICATION:
      return {
        ...state,
        loading: true
      }

    case types.NOTIFICATION_UPDATED:
      return {
        ...state,
        notifications: action.notifications
      }

    default:
      return state;
  }
};

export default notification;
