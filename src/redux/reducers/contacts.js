import * as types from '../actionTypes';

const initialState = {
  contactsInvited: false,
  contactsFetched: false,
  contact: [],
  invitedContacts: [],
  gettingContacts: true,
  loading: false,
  errorMessage: '',
};

const contacts = (state = initialState, action) => {
  switch (action.type) {
    case types.CONTACTS_FETCHED:
      return {
        ...state,
        contactsFetched: true,
        contact: action.contacts,
        gettingContacts: false,
      };

    case types.CONTACTS_INVITED:
      return {
        ...state,
        contactsInvited: true,
        loading: false,
      };

    case types.USER_LOGGED_OUT:
      return {
        ...state,
        contactsInvited: false,
        contactsFetched: false,
        contact: [],
      };

    case types.RESET_ACTION_CONTACT_INVITED:
      return {
        ...state,
        contactsInvited: false,
      };

    case types.LOADING_CONTACTS:
      return {
        ...state,
        loading: true,
      };

    case types.ERROR_CONTACTS: {
      return {
        ...state,
        loading: false,
        errorMessage: action.message,
      };
    }

    case types.RESET_ERROR_CONTACTS: {
      return {
        ...state,
        errorMessage: '',
      };
    }

    case types.FETCHED_INVITED_CONTACTS: {
      return {
        ...state,
        invitedContacts: action.contacts,
      };
    }

    default:
      return state;
  }
};

export default contacts;
