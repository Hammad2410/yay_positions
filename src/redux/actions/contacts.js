import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';

export const getContacts = contacts => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
      // headers: { "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJoYXNuYWluIiwibGFzdE5hbWUiOiJhbGkiLCJlbWFpbCI6Imhhc25haW5hbGkxMjJAZ21haS5uZXQiLCJpYXQiOjE1NjgzNTM3NzF9.nZQdn4bdZAwDSiaX_bZeV4-hu4GzbgCHrZvkZe3I9l4" }
    };
    // console.log("Contacts: ", contacts)
    axios
      .post(
        BASE_URL + 'contacts/getContacts',
        {
          id: store().signUp.user.id,
          contacts: contacts,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          dispatch({
            type: types.CONTACTS_FETCHED,
            contacts: response.data.contacts,
          });
        } else {
          dispatch({
            type: types.ERROR_CONTACTS,
            message: response.data.message,
          });
          // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_CONTACTS, message: error });
        // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
      });
  };
};

export const inviteContacts = contacts => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_CONTACTS });
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token }
    };
    axios
      .post(
        BASE_URL + 'contacts/sendInvite',
        {
          id: store().signUp.user.id,
          fullName: store().signUp.user.firstName + ' ' + store().signUp.user.lastName,
          contacts: contacts,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          dispatch({ type: types.CONTACTS_INVITED });
        } else {
          dispatch({
            type: types.ERROR_CONTACTS,
            message: response.data.message,
          });
          // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_CONTACTS, message: error });
        // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
      });
  };
};

export const resetContactInvited = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ACTION_CONTACT_INVITED });
  };
};

export const resetContactAlert = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ERROR_CONTACTS });
  };
};

export const getInvitedContacts = () => {
  return async (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    try {
      let response = await axios.post(BASE_URL + 'contacts/getInvitedContacts', { id: store().signUp.user.id }, config)
      dispatch({ type: types.FETCHED_INVITED_CONTACTS, contacts: response.data.contacts });

    } catch (error) {
      console.log(error);
    }
  };
};
