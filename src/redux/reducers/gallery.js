import * as types from '../actionTypes';


const initialState = {
    received: [],
    delivered: [],
    draft: [],
    scheduled: []
};

const gallery = (state = initialState, action) => {
    switch (action.type) {
        case types.GALLERY_FETCHED: {
            return {
                ...state,
                received: action.received,
                delivered: action.delivered,
                draft: action.draft,
                scheduled: action.scheduled,
            }
        }

        default:
            return state;

    }
}

export default gallery
