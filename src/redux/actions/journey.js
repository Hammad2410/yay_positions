import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import { Circle } from 'react-native-timeline-feed/lib/Components';
import RNFetchBlob from 'rn-fetch-blob'

export const selectCircle = (circle, id) => {


    return (dispatch) => {
        if (typeof circle.circleName != 'undefined') {
            dispatch({
                type: types.SELECT_CIRCLE,
                name: circle.circleName ? circle.circleName : circle.firstName + " " + circle.lastName, image: circle.userImages ? circle.userImages : circle.profileImage, recieverId: id, receiverType: circle.circle_type == 'one-one' ? 'individual' : 'circle', circleType: circle.circle_type
            })
        }
        else {
            dispatch({ type: types.SELECT_CIRCLE, name: circle.name, image: circle.image, recieverId: id, receiverType: 'individual', circleType: 'one-one' })
        }
    }
}


export const selectVideo = (video) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_VIDEO, video: video })
    }
}

export const audiourl = (url) => {
    return (dispatch) => {
        dispatch({ type: types.AUDIO_URL, url: url })
    }
}

export const selectImage = (image, selected) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_IMAGE, image: image, selected: selected })
    }
}

export const selectMessage = (message) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_MESSAGE, message: message })
    }
}

export const selectDateAndOccassion = (date, occassion) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_DATE_AND_OCCASSION, date: date, occassion: occassion })
    }
}

export const selectOccasion = (occassion) => {
    return (dispatch, store) => {
        dispatch({ type: types.SELECT_DATE_AND_OCCASSION, date: store().journey.date, occassion: occassion })
    }
}


export const selectType = (type) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_ENVELOPE_TYPE, envelopeType: type })
    }
}

export const clearJourney = () => {
    return (dispatch) => {
        dispatch({ type: types.RESET_JOURNEY_MESSAGE })
    }
}

export const filterJourney = (journeys) => {
    return dispatch => {
        dispatch({ type: types.JOURNEY_FILTERED, journeys: journeys })
    }
}

export const getJourney = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/get_user_journey", {
            id: store().signUp.user.id
        }, config).then(response => {
            console.log("Journey: ", response.data)
            if (response.data.success) {
                dispatch({ type: types.JOURNEY_FETCHED, journeys: response.data.journeys })
            } else {
                dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
            }
        }).catch(error => {
            dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
        })
    }
}

export const getDrafts = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/get_draft_journey", {
            id: store().signUp.user.id
        }, config).then(response => {
            console.log("Journey: ", response.data)
            if (response.data.success) {
                dispatch({ type: types.DRAFTS_FETCHED, drafts: response.data.drafts })
            } else {
                dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
            }
        }).catch(error => {
            dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
        })
    }
}


export const getSchedules = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/get_scheduled_journey", {
            id: store().signUp.user.id
        }, config).then(response => {
            console.log("Scheduled: ", response.data)
            if (response.data.success) {
                dispatch({ type: types.SCHEDULED_FETCHED, scheduled: response.data.scheduled_journeys })
            } else {
                dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
            }
        }).catch(error => {
            dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
        })
    }
}

export const getDelivered = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/get_delivered_journey", {
            id: store().signUp.user.id
        }, config).then(response => {
            console.log("Scheduled: ", response.data)
            if (response.data.success) {
                dispatch({ type: types.DELIVERED_FETCHED, delivered: response.data.delivered_journeys })
            } else {
                dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
            }
        }).catch(error => {
            dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
        })
    }
}

export const openJourney = (journey_id, receiver_id, unique_token) => {
    return (dispatch, store) => {

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios.post(BASE_URL + "journey/update_journey_opened_status", {
            id: store().signUp.user.id,
            journey_id,
            receiver_id,
            unique_token
        }, config).then(response => {

            if (response.data.success) {
                // let index = store().journey.journeys.findIndex(journey => journey.journey_id == journey_id)
                // console.log(index)

                // // let sortedListTime = reducedJourney.filter(item => item.journey_status !== "scheduled" && item.opened === 1).sort((a, b) => new Date(b.journey_date) - new Date(a.journey_date))
                // // let new_message = reducedJourney.filter(item => item.journey_status !== "scheduled" && item.opened === 0).sort((a, b) => new Date(b.journey_date) - new Date(a.journey_date))
                // // let scheduledList = reducedJourney.filter(item => item.journey_status === "scheduled").sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
                // // let list_modified = new_message.concat(sortedListTime)
                // // let list = scheduledList.concat(list_modified)



                // let journeys = store().journey.incomingJourney
                // journeys[index].opened = true;

                // // journeys.sort(function (a, b) {
                // //     ItemA = a.journey_date;
                // //     ItemB = b.journey_date;

                // //     if (ItemA > ItemB) //sort string ascending
                // //         return -1;
                // //     if (ItemA < ItemB)
                // //         return 1;
                // //     return 0; //default return value (no sorting)
                // // })

                // console.log("updated: ", journeys)

                // dispatch({ type: types.JOURNEY_OPENED, journeys: journeys })
                dispatch(getIncomingJourney())
            } else {
                dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
            }
        }).catch(error => {
            dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
        })
    }
}



export const createJourney = (status) => {
    return (dispatch, store) => {
        // dispatch({ type: types.LOADING_JOURNEY })

        let formData = new FormData()
        let images = []
        let metadata = ""
        store().journey.image.map((item) => {
            formData.append('images', item.image)
            images.push(item.image);
        })

        if (store().journey.audiourl) {
            store().journey.audiourl.map((item) => {
                formData.append('images', item)
                images.push(item.image);
            })
        }



        if (store().flourist.flower != '') {
            formData.append('flower_code', store().flourist.flower.CODE)
            formData.append('flower_price', store().flourist.flower.PRICE)
            formData.append('flower_image', store().flourist.flower.LARGE)
            formData.append('flower_name', store().flourist.flower.NAME)
            formData.append('flower_total', store().flourist.total)
            formData.append('receiver_phone', store().flourist.receiver.phone)
            formData.append('address_1', store().flourist.receiver.streetOne)
            formData.append('address_2', store().flourist.receiver.streetTwo)
            formData.append('zipCode', store().flourist.receiver.zipCode)
            formData.append('city', store().flourist.receiver.city)
            formData.append('state', store().flourist.receiver.state)
            formData.append('country', store().flourist.receiver.country)
            formData.append('email', store().flourist.receiver.email)
            formData.append('ip', store().signUp.user.ipAddress)
            formData.append('quantity', store().flourist.quantity)
        }


        formData.append('receiver_id', store().journey.receiverId)
        formData.append('name', store().signUp.user.firstName + " " + store().signUp.user.lastName)
        formData.append('sender_id', store().signUp.user.id)
        formData.append('type', store().journey.receiverType)
        formData.append('delivery_date', store().journey.date)
        formData.append('ocassion_holiday', store().journey.envelopeType.split('/')[0])
        formData.append('envelope_image_path', store().journey.envelopeType)
        formData.append('note', store().journey.message)
        formData.append('journey_status', status)
        formData.append('receiver_name', store().journey.name)
        formData.append('images', store().journey.video)
        // formData.append('images', store().journey.audiourl)
        formData.append('circle_type', store().journey.circleType)
        formData.append('sender_timezone', store().signUp.user.timeZone)

        // console.log("Video: ", store().journey.video)
        // console.log("Audio: ", store().journey.audiourl)
        // console.log("images: ", images)
        // console.log("metadate: ", metadata)
        // console.log("formData: ", formData)


        let config = {
            headers: {
                'Authorization': 'Bearer ' + store().signUp.user.token,
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
            }
        };

        axios
            .post(
                BASE_URL + 'journey/journey_creation', formData, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    dispatch({
                        type: types.JOURNEY_CREATED
                    });
                    setTimeout(() => {
                        dispatch(getIncomingJourney())
                    }, 1000);
                } else {
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                }
            })
            .catch(error => {
                dispatch({ type: types.ERROR_JOURNEY, message: error });
            });
    };
};

export const commentJourney = (comment, item) => {
    return (dispatch, store) => {

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/comment_journey', {
                id: store().signUp.user.id,
                comment: comment,
                journey_id: item.journey_id,
                circle_id: item.circle_id,
                unique_token: item.unique_token,
                name: store().signUp.user.firstName + " " + store().signUp.user.lastName
            }, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    dispatch({ type: types.JOURNEY_COMMENTED })
                } else {
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                    // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
                }
            })
            .catch(error => {
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}

export const getComments = (item) => {
    return (dispatch, store) => {

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/get_journey_comments', {
                id: store().signUp.user.id,
                journey_id: item.unique_token,
            }, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    dispatch({ type: types.COMMENTS_FETCHED, comments: response.data.comments })
                } else {
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                    // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
                }
            })
            .catch(error => {
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}

export const likeJourney = (item) => {
    return (dispatch, store) => {

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/like_journey', {
                id: store().signUp.user.id,
                journey_id: item.journey_id,
                circle_id: item.circle_id,
                unique_token: item.unique_token,
                name: store().signUp.user.firstName + " " + store().signUp.user.lastName
            }, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    dispatch({ type: types.LIKES_FETCHED, liked: response.data.liked, likes: response.data.likes })
                } else {
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                    // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
                }
            })
            .catch(error => {
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}

export const getLikes = (item) => {
    return (dispatch, store) => {

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/get_journey_like', {
                id: store().signUp.user.id,
                journey_id: item.unique_token,
            }, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    dispatch({ type: types.LIKES_FETCHED, liked: response.data.liked, likes: response.data.likes })
                } else {
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                    // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
                }
            })
            .catch(error => {
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}


export const resetJourneyCreation = () => {
    return dispatch => {
        dispatch({ type: types.RESET_JOURNEY_CREATED })
    }
}

export const resetJourneyComment = () => {
    return dispatch => {
        dispatch({ type: types.RESET_JOURNEY_COMMENT })
    }
}

export const resetCurrentJourney = () => {
    return (dispatch) => {
        dispatch({ type: types.RESET_CURRENT_JOURNEY })
    }
}

export const selectUniqueToken = (unique_token, cId) => {
    return dispatch => {
        dispatch({ type: types.SELECT_TOKEN, unique_token: unique_token, circleId: cId })
    }
}

export const getJourneyData = (id) => {
    return (dispatch, store) => {

        dispatch({ type: types.LOADING_JOURNEY })
        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/get_journey', {
                id: store().signUp.user.id,
                journey_id: id,
            }, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    dispatch({ type: types.SINGLE_JOURNEY_FETCHED, journey: response.data.journey })
                    dispatch(openJourney(id, store().signUp.user.id, response.data.journey.unique_token))
                } else {
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                    // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
                }
            })
            .catch(error => {
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}

export const resetJourneyData = () => {
    return dispatch => {
        dispatch({ type: types.RESET_SINGLE_JOURNEY })
    }
}

export const handleRecieve = () => {
    return (dispatch, store) => {
        dispatch({
            type: types.RECEIVED_CHECKED,
            RecievedChecked: !store().journey.recievedChecked
        })
    }
}

export const handleDelivered = () => {
    return (dispatch, store) => {
        dispatch({
            type: types.DELIVERED_CHECKED,
            DeliveredChecked: !store().journey.deliveredChecked
        })
    }
}

export const handleScheduled = () => {
    return (dispatch, store) => {
        dispatch({
            type: types.SCHEDULED_CHECKED,
            ScheduledChecked: !store().journey.scheduledChecked
        })
    }
}

export const handleAll = () => {
    return (dispatch, store) => {
        dispatch({
            type: types.ALL_CHECKED,
            AllChecked: !store().journey.allChecked,
            ScheduledChecked: !store().journey.allChecked ? true : false,
            DeliveredChecked: !store().journey.allChecked ? true : false,
            RecievedChecked: !store().journey.allChecked ? true : false
        })
    }
}

export const handleCirclePress = (item) => {
    return (dispatch, store) => {
        if (store().journey.circleSelected === item) {
            dispatch({
                type: types.SET_SELECTED_CIRCLE,
                circle: {},
                contact: {},
                selected_circle: false,
                selected_contact: false,
            })
        } else {
            dispatch({
                type: types.SET_SELECTED_CIRCLE,
                circle: item,
                contact: {},
                selected_circle: true,
                selected_contact: false,
            })
        }
    }
}

export const handleContactPress = (item) => {
    return (dispatch, store) => {
        if (store().journey.contactSelected === item) {
            dispatch({
                type: types.SET_SELECTED_CIRCLE,
                contact: {},
                circle: {},
                selected_contact: false,
                selected_circle: false
            })
        } else {
            dispatch({
                type: types.SET_SELECTED_CIRCLE,
                circle: {},
                contact: item,
                selected_contact: true,
                selected_circle: false
            })
        }
    }
}
export const updateJourney = (status) => {
    return (dispatch, store) => {

        let formData = new FormData()
        let images = []
        let metadata = ""
        store().journey.image.map((item) => {


            if (item.image.uri.startsWith('http')) {
                formData.append("imageType", item.image.type.includes("image") ? 'image' : 'video')
                formData.append('imageUrl', item.image.uri)
            } else {
                formData.append('images', item.image)
            }
            images.push(item.image);
        })

        formData.append('circle_id', store().journey.circleId)
        formData.append('receiver_id', store().journey.receiverId)
        formData.append('name', store().signUp.user.firstName + " " + store().signUp.user.lastName)
        formData.append('sender_id', store().signUp.user.id)
        formData.append('type', store().journey.receiverType)
        formData.append('delivery_date', store().journey.date)
        formData.append('ocassion_holiday', store().journey.envelopeType.split('/')[0])
        formData.append('envelope_image_path', store().journey.envelopeType)
        formData.append('note', store().journey.message)
        formData.append('journey_status', status)
        formData.append('receiver_name', store().journey.name)
        store().journey.audiourl.map((item) => {

            console.log("Audio URL", item)
            if (item.uri.startsWith('http')) {
                formData.append('imageUrl', item.uri)
                formData.append('imageType', 'audio')
            } else {
                formData.append('images', item)
            }
            images.push(item);
        })



        // formData.append('images', store().journey.audiourl)
        formData.append('circle_type', store().journey.circleType)
        formData.append('unique_token', store().journey.unique_token)

        console.log("Video: ", store().journey.video)
        console.log("Audio: ", store().journey.audiourl)
        console.log("images: ", images)
        console.log("metadate: ", metadata)
        console.log("formData: ", formData)
        console.log("Update Journey")


        let config = {
            headers: {
                'Authorization': 'Bearer ' + store().signUp.user.token,
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
            }
        };
        axios
            .post(
                BASE_URL + 'journey/update_journey', formData, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    console.log("Success", response)
                    dispatch({
                        type: types.JOURNEY_CREATED
                    });
                    dispatch(getIncomingJourney())
                } else {
                    alert("Error")
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                }
            })
            .catch(error => {
                console.log("network error: ", error)
                dispatch({ type: types.ERROR_JOURNEY, message: error });
            });
    };
};

export const isDraft = () => {
    return (dispatch) => {
        dispatch({ type: types.IS_DRAFT })
    }
}


export const deleteJourney = () => {
    return (dispatch, store) => {

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/delete_journey', {
                id: store().signUp.user.id,
                unique_token: store().journey.unique_token,
            }, config,
            )
            .then(response => {
                console.log(response)
                if (response.data.success) {
                    dispatch(getOutgoingJourney())
                    // dispatch({ type: types.LIKES_FETCHED, liked: response.data.liked, likes: response.data.likes })
                } else {
                    dispatch({
                        type: types.ERROR_JOURNEY,
                        message: response.data.message,
                    });
                    // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
                }
            })
            .catch(error => {
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}

export const getOpenJourney = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let system_date_time = new Date().toLocaleString("en-us", { timeZone: store().signUp.user.timeZone }).split(",")
        let date_time = system_date_time[0].split("/")

        let date = new Date().getDate().length > 1 ? new Date().getDate() : 0 + "" + new Date().getDate()
        let month = (new Date().getMonth() + 1).length > 1 ? (new Date().getMonth() + 1) : 0 + "" + (new Date().getMonth() + 1)
        let year = new Date().getFullYear()


        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/get_user_journey_opened', {
                id: store().signUp.user.id,
                unique_token: store().journey.unique_token,
                date: year + "-" + month + "-" + date
            }, config,
            )
            .then(response => {
                console.log(response.data.timeline)

                var journey = []
                var allJourney = store().journey.allJourney


                allJourney = allJourney.concat(response.data.timeline)
                // journey.push({
                //     length: response.data[0].length,
                //     label: "YESTERDAY",
                //     data: response.data[0].yesterday
                // })

                // allJourney = allJourney.concat(response.data[1].last_week)
                // journey.push({
                //     length: response.data[1].length,
                //     label: "LAST WEEK",
                //     data: response.data[1].last_week
                // })

                // allJourney = allJourney.concat(response.data[2].last_month)
                // journey.push({
                //     length: response.data[2].length,
                //     label: "LAST MONTH",
                //     data: response.data[2].last_month
                // })

                // allJourney = allJourney.concat(response.data[3].last_year)
                // journey.push({
                //     length: response.data[3].length,
                //     label: "LAST YEAR",
                //     data: response.data[3].last_year
                // })

                // console.log("Journeys: ", journey)

                dispatch({ type: types.OPEN_JOURNEY_FETCHED, journey: response.data.timeline, allJourney: allJourney })

            })
            .catch(error => {
                console.log(error)
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}

export const getIncomingJourney = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let system_date_time = new Date().toLocaleString("en-us", { timeZone: store().signUp.user.timeZone }).split(",")
        let date_time = system_date_time[0].split("/")


        let date = new Date().getDate().length > 1 ? new Date().getDate() : 0 + "" + new Date().getDate()
        let month = (new Date().getMonth() + 1).length > 1 ? (new Date().getMonth() + 1) : 0 + "" + (new Date().getMonth() + 1)
        let year = new Date().getFullYear()

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/get_user_journey_incoming', {
                id: store().signUp.user.id,
                unique_token: store().journey.unique_token,
                date: year + "-" + month + "-" + date
            }, config,
            )
            .then(response => {
                var journey = []
                var allJourney = store().journey.allJourney

                allJourney = allJourney.concat(response.data[0].unopened_journeys)
                journey.push({
                    length: response.data[0].length,
                    label: "UNOPENED",
                    data: response.data[0].unopened_journeys
                })


                allJourney = allJourney.concat(response.data[1].today)
                journey.push({
                    length: response.data[1].length,
                    label: "TODAY",
                    data: response.data[1].today
                })

                allJourney = allJourney.concat(response.data[2].this_week)
                journey.push({
                    length: response.data[2].length,
                    label: "THIS WEEK",
                    data: response.data[2].this_week
                })

                allJourney = allJourney.concat(response.data[3].this_month)
                journey.push({
                    length: response.data[3].length,
                    label: "THIS MONTH",
                    data: response.data[3].this_month
                })

                allJourney = allJourney.concat(response.data[4].this_year)
                journey.push({
                    length: response.data[4].length,
                    label: "THIS YEAR",
                    data: response.data[4].this_year
                })

                // console.log("Journeys: ", journey)

                dispatch({ type: types.INCOMING_JOURNEY_FETCHED, journey: journey, allJourney: allJourney })

            })
            .catch(error => {
                console.log(error)
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}

export const getOutgoingJourney = () => {
    return (dispatch, store) => {
        dispatch({ type: types.LOADING_JOURNEY })

        let system_date_time = new Date().toLocaleString("en-us", { timeZone: store().signUp.user.timeZone }).split(",")
        let date_time = system_date_time[0].split("/")

        let date = new Date().getDate().length > 1 ? new Date().getDate() : 0 + "" + new Date().getDate()
        let month = (new Date().getMonth() + 1).length > 1 ? (new Date().getMonth() + 1) : 0 + "" + (new Date().getMonth() + 1)
        let year = new Date().getFullYear()

        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };

        axios
            .post(
                BASE_URL + 'journey/get_user_journey_outgoing', {
                id: store().signUp.user.id,
                unique_token: store().journey.unique_token,
                date: year + "-" + month + "-" + date
            }, config,
            )
            .then(response => {
                console.log(response)

                var journey = []
                var allJourney = store().journey.allJourney

                allJourney = allJourney.concat(response.data[0].today)
                journey.push({
                    length: response.data[0].length,
                    label: "TODAY",
                    data: response.data[0].today
                })

                allJourney = allJourney.concat(response.data[1].this_week)
                journey.push({
                    length: response.data[1].length,
                    label: "THIS WEEK",
                    data: response.data[1].this_week
                })

                allJourney = allJourney.concat(response.data[2].this_month)
                journey.push({
                    length: response.data[2].length,
                    label: "THIS MONTH",
                    data: response.data[2].this_month
                })

                allJourney = allJourney.concat(response.data[3].this_year)
                journey.push({
                    length: response.data[3].length,
                    label: "THIS YEAR",
                    data: response.data[3].this_year
                })

                console.log("All Journeys: ", allJourney)

                dispatch({ type: types.OUTGOING_JOURNEY_FETCHED, journey: journey, allJourney: allJourney })

            })
            .catch(error => {
                console.log(error)
                dispatch({ type: types.ERROR_JOURNEY, message: error });
                // setTimeout(() => dispatch({type: types.RESET_ERROR_CONTACTS}), 1000);
            });
    }
}