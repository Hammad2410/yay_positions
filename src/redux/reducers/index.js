import { combineReducers } from 'redux';

import auth from './auth';
import candidate from './candidate';

const rootReducer = combineReducers({
    auth: auth,
    candidate: candidate
})

export default rootReducer;