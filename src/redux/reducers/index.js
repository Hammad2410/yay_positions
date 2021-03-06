import { combineReducers } from 'redux';

import auth from './auth';
import candidate from './candidate';
import employer from './employer';

const rootReducer = combineReducers({
    auth: auth,
    candidate: candidate,
    employer: employer
})

export default rootReducer;