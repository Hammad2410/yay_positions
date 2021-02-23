import { combineReducers } from 'redux';
import signUp from './signUp'
import contacts from './contacts'
import profile from './profile'
import circle from './circle'
import notification from './notification'
import journey from './journey'
import flourist from './flourist'
import gallery from './gallery'
import chat from './chat'

const rootReducer = combineReducers({
    signUp: signUp,
    contacts: contacts,
    profile: profile,
    circle: circle,
    notification: notification,
    journey: journey,
    flourist: flourist,
    gallery: gallery,
    chat: chat
})

export default rootReducer;