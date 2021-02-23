import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';

export const getNotifications = () => {
  return (dispatch, store) => {


    let date = new Date().getDate().length > 1 ? new Date().getDate() : 0 + "" + new Date().getDate()
    let month = (new Date().getMonth() + 1).length > 1 ? (new Date().getMonth() + 1) : 0 + "" + (new Date().getMonth() + 1)
    let year = new Date().getFullYear()

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'notifications/getUserNotifications',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
          date: year + "-" + month + "-" + date
        },
        config,
      )
      .then(response => {
        console.log(response.data)
        if (response.data.success) {
          dispatch({
            type: types.NOTIFICATION_FETCHED,
            notifications: response.data.notifications,
          });
        } else {
          console.log(response);
          // alert(response.data.message)
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const loadingNotifications = () => {
  return async dispatch => {
    dispatch({ type: types.LOADING_NOTIFICATION })
  }

}

export const specifyNotifications = cId => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
      // headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJoYXNuYWluIiwibGFzdE5hbWUiOiJhbGkiLCJlbWFpbCI6Imhhc25haW5hbGkxMjJAZ21haS5uZXQiLCJpYXQiOjE1NjgzNTM3NzF9.nZQdn4bdZAwDSiaX_bZeV4-hu4GzbgCHrZvkZe3I9l4" }
    };
    axios
      .post(
        BASE_URL + 'notifications/getSpecificNotificationData',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
          cId: cId,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: types.NOTIFICATION_SPECIFIED,
            notifications: response.data.notifications,
          });
        } else {
          console.log(response);
          // alert(response.data.message);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteNotifications = id => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
      // headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJoYXNuYWluIiwibGFzdE5hbWUiOiJhbGkiLCJlbWFpbCI6Imhhc25haW5hbGkxMjJAZ21haS5uZXQiLCJpYXQiOjE1NjgzNTM3NzF9.nZQdn4bdZAwDSiaX_bZeV4-hu4GzbgCHrZvkZe3I9l4" }
    };
    axios
      .post(
        BASE_URL + 'notifications/deleteNotification',
        {
          id: store().signUp.user.id,
          notificationId: id,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          console.log('notification removed: ', store().notification.notifications.filter(
            item => item.notification_id != id
          ));
          dispatch({
            type: types.NOTIFICATION_REMOVED,
            notifications: store().notification.notifications.filter(
              item => item.notification_id != id
            ),
          });
        } else {
          console.log(response);
          // alert(response.data.message)
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const updateNotifications = () => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
      // headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJoYXNuYWluIiwibGFzdE5hbWUiOiJhbGkiLCJlbWFpbCI6Imhhc25haW5hbGkxMjJAZ21haS5uZXQiLCJpYXQiOjE1NjgzNTM3NzF9.nZQdn4bdZAwDSiaX_bZeV4-hu4GzbgCHrZvkZe3I9l4" }
    };
    axios
      .post(
        BASE_URL + 'notifications/updateNotification',
        {
          id: store().signUp.user.id,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          console.log('notification updated');
          let user = store().signUp.user
          user.new_notification = 0
          dispatch({ type: types.USER_FETCHED, user: user })

        } else {
          console.log(response);
          // alert(response.data.message)
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};


export const updateNotificationById = (id) => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
      // headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJoYXNuYWluIiwibGFzdE5hbWUiOiJhbGkiLCJlbWFpbCI6Imhhc25haW5hbGkxMjJAZ21haS5uZXQiLCJpYXQiOjE1NjgzNTM3NzF9.nZQdn4bdZAwDSiaX_bZeV4-hu4GzbgCHrZvkZe3I9l4" }
    };
    axios
      .post(
        BASE_URL + 'notifications/updateNotificationById',
        {
          id: store().signUp.user.id,
          notificationId: id
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          console.log('notification updated');
          let index = store().notification.notifications.findIndex(notification => notification.notification_id == id)
          let notifications = store().notification.notifications
          notifications[index].notification_status = "old"
          dispatch({ type: types.NOTIFICATION_UPDATED, notifications: notifications })

        } else {
          console.log(response);
          // alert(response.data.message)
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const updateUserNotificationIcon = () => {
  return (dispatch, store) => {
    let user = store().signUp.user
    user.new_notification = 1
    user.new_notification_chat = 1
    dispatch({ type: types.USER_FETCHED, user: user })
  };
}
