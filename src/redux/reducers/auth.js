import * as types from '../actionTypes';

const initialState = {
    users: [],
    actualUsers: [],
    groups: [],
};

const auth = (state = initialState, action) => {
    switch (action.type) {

        case types.COMET_CHAT_USERS_FETCHED:
            return {
                ...state,
                users: action.users,
                actualUsers: action.actualUsers
            }

        case types.COMET_CHAT_GROUPS_FETCHED:
            return {
                ...state,
                groups: action.groups
            }

        case types.SET_COMET_CHAT_USER:
            return {
                ...state,
                users: action.users
            }


        default:
            return state;
    }

}

export default auth