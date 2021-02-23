import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';

export const getGallery = () => {
    return (dispatch, store) => {
        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/get_journey_media", {
            id: store().signUp.user.id
        },
            config).then(response => {
                if (response.data.success) {
                    console.log("Gallery: ", response.data)
                    dispatch({
                        type: types.GALLERY_FETCHED,
                        received: response.data.received,
                        delivered: response.data.delivered,
                        draft: response.data.draft,
                        scheduled: response.data.scheduled
                    })
                } else {
                    console.log(response.data.message)
                }
            }).catch(error => {
                console.log(error)
            })
    }
}

export const getCircleGallery = () => {
    return (dispatch, store) => {
        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/get_circle_journey_media", {
            id: store().signUp.user.id,
            cId: store().circle.circle.cId,
        },
            config).then(response => {
                if (response.data.success) {
                    console.log("Gallery: ", response.data)
                    dispatch({
                        type: types.GALLERY_FETCHED,
                        received: response.data.received,
                        delivered: response.data.delivered,
                        draft: response.data.draft,
                        scheduled: response.data.scheduled
                    })
                } else {
                    console.log(response.data.message)
                }
            }).catch(error => {
                console.log(error)
            })
    }
}