import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import { CometChat } from '@cometchat-pro/react-native-chat';
import { getUser } from "./signUp"
import moment from 'moment';


export const openMessage = (item) => {
    return (dispatch, store) => {
        let users = store().chat.users
        users.map((user) => {
            if (user.uid == item.uid) {
                user.unreadCount = 0
            }
        })
        dispatch({ type: types.SET_COMET_CHAT_USER, users: users })
    }
}

export const getCometChatUsers = (users) => {
    // console.log("Fetching Users: ", users)
    return (dispatch, store) => {
        let a = store().contacts.contact.filter(data => data.appUser)
        let b = users
        let filteredList = b.filter((item) => a.find(contact => contact.numbers.some(number => number.id == item.uid)))
        dispatch({ type: types.COMET_CHAT_USERS_FETCHED, users: filteredList, actualUsers: filteredList })
    }
}

export const getCometChatGroups = (groups) => {
    // console.log("Fetching Groups: ", groups)
    return (dispatch, store) => {
        // let a = store().contacts.contact.filter(data => data.appUser)
        // let b = users
        // let filteredList = b.filter((item) => a.find(contact => contact.numbers.some(number => number.id == item.uid)))

        dispatch({ type: types.COMET_CHAT_GROUPS_FETCHED, groups: groups })
    }
}

export const addUserListner = () => {
    return (dispatch, store) => {

        let listenerID = "CONTACT_USER_LISTNER";

        CometChat.addUserListener(
            listenerID,
            new CometChat.UserListener({
                onUserOnline: onlineUser => {
                    /* when someuser/friend comes online, user will be received here */
                    console.log("On User Online:", { onlineUser });
                    let users = store().chat.users
                    users.map(user => {
                        if (user.uid == onlineUser.uid) {
                            user.status = "online"

                            // that.setState({ users: [...that.state.users] })
                        }
                    })
                    dispatch({ type: types.SET_COMET_CHAT_USER, users: users })
                },
                onUserOffline: offlineUser => {
                    /* when someuser/friend went offline, user will be received here */
                    console.log("On User Offline:", { offlineUser });
                    let users = store().chat.users
                    users.map(user => {
                        if (user.uid == offlineUser.uid) {
                            user.status = "offline"
                            // that.setState({ users: [...that.state.users] })
                        }

                    })
                    dispatch({ type: types.SET_COMET_CHAT_USER, users: users })
                }
            })
        );
    }
}

export const scheduleMessage = (receiver_id, text, date) => {
    console.log("Date: ", moment(new Date(date)).format("YYYY-MM-DD HH:00:00"))

    return (dispatch, store) => {
        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };
        axios
            .post(
                BASE_URL + 'comet_chat/scheduledMessage',
                {
                    id: store().signUp.user.id,
                    receiver_id: receiver_id,
                    category: "message",
                    type: "text",
                    receiverType: "user",
                    text: text,
                    receiver_date: moment(new Date(date)).format("YYYY-MM-DD HH:mm")
                },
                config,
            )
            .then(response => {
                if (response.data.success) {
                    console.log('Text Sent')
                }
            })
            .catch(error => {
                console.log("Network Error")
            });
    }
}

export const sendMessage = (receiver_id, text, type) => {

    console.log(receiver_id)
    console.log(text)
    console.log(type)


    return (dispatch, store) => {
        let config = {
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                appid: '116853e29a46b43',
                apikey: 'fa6fce60c476efd243708650211ddf00245e9174',
            }

        };
        axios
            .post(
                `https://api-eu.cometchat.io/v2.0/users/${store().signUp.user.id}/messages`,
                {
                    receiver: receiver_id,
                    category: "message",
                    type: "text",
                    receiverType: type,
                    data: {
                        text: text,
                    }
                },
                config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    console.log('Text Sent')
                }
            })
            .catch(error => {
                console.log(error)
                console.log("Network Error")
            });
    }
}

export const addNotification = (id) => {
    return async (dispatch, store) => {
        try {
            let config = {
                headers: { Authorization: 'Bearer ' + store().signUp.user.token },
            };
            let response = await axios.post(BASE_URL + 'comet_chat/addNotificationChat',
                {
                    id: store().signUp.user.id,
                    receiver_id: id
                },
                config,
            )
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }
}

export const addNotificationGroup = (guid) => {
    return async (dispatch, store) => {
        try {
            let config = {
                headers: { Authorization: 'Bearer ' + store().signUp.user.token },
            };
            let response = await axios.post(BASE_URL + 'comet_chat/addNotificationChatGroup',
                {
                    id: store().signUp.user.id,
                    group_id: guid
                },
                config,
            )
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }
}

export const updateNotification = (guid) => {
    return async (dispatch, store) => {
        try {
            let config = {
                headers: { Authorization: 'Bearer ' + store().signUp.user.token },
            };
            let response = await axios.post(BASE_URL + 'comet_chat/updateNotification',
                {
                    id: store().signUp.user.id
                },
                config,
            )
            dispatch(getUser(store().signUp.user))
            console.log(response);
        } catch (error) {
            console.log(error);
        }

    }
}