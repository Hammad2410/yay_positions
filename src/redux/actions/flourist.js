import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import moment from 'moment';
import { createJourney, updateJourney } from "./journey"



export const selectGiftMessage = (message) => {
    return (dispatch) => {
        dispatch({ type: types.SELECT_GIFT_MESSAGE, message: message })
    }
}

export const setReceiverId = (id) => {
    return (dispatch) => {
        dispatch({ type: types.SET_RECEIVER_ID, receiver_id: id })
    }
}

export const getReceiver = () => {


    return (dispatch, store) => {

        // alert(store().flourist.receiver_id)
        // let config = {
        //     headers: { Authorization: 'Bearer ' + user.token },
        // };

        axios
            .post(
                BASE_URL + 'profile/getUser',
                {
                    id: store().flourist.receiver_id,
                }
                // config,
            )
            .then(response => {
                if (response.data.success) {

                    dispatch({ type: types.RECEIVER_FETCHED, receiver: response.data.user });
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                // alert(error);
            });
    }
}

export const saveCardInfo = () => {


    return (dispatch, store) => {


        let config = {
            headers: { Authorization: 'Bearer ' + store().signUp.user.token },
        };
        axios
            .post(
                BASE_URL + 'profile/updateCardInfo',
                {
                    id: store().signUp.user.id,
                    cardNo: store().flourist.cardNo,
                    cardExpiry: store().flourist.expiry,
                    cardExpiryMonth: store().flourist.expiryMonth,
                    cvc: store().flourist.cvc
                },
                config
            )
            .then(response => {
                if (response.data.success) {
                    console.log("Response: ", response.data)
                    // dispatch({ type: types.RECEIVER_FETCHED, receiver: response.data.user });
                } else {
                    alert(response.data.message);
                }
            })
            .catch(error => {
                // alert(error);
            });
    }
}


export const setCardNo = (card) => {
    return dispatch => {
        dispatch({ type: types.SET_CARD_NO, cardNo: card })
    }
}

export const setCardExpiry = (expiry) => {
    return dispatch => {
        dispatch({ type: types.SET_CARD_EXPIRY, expiry: expiry })
    }
}

export const setCardExpiryMonth = (expiryMonth) => {
    return dispatch => {
        dispatch({ type: types.SET_CARD_EXPIRY_MONTH, expiryMonth: expiryMonth })
    }
}

export const setCardCvc = (cvc) => {
    return dispatch => {
        dispatch({ type: types.SET_CARD_CVC, cvc: cvc })
    }
}

export const setFLower = (flower, quantity) => {
    return dispatch => {
        dispatch({ type: types.SET_FLOWER, flower: flower, quantity: quantity })
    }
}

export const getAvailabilty = (date) => {
    // console.log(date);

    return (dispatch, store) => {

        let config = {
            headers: { Authorization: 'Basic OTA5NzIzOkNyRUVmYw==' },
        };

        let deliveryDate = new Date(date)
        let month = deliveryDate.getMonth() + 1

        // store().flourist.receiver.zipCode
        axios.get("https://www.floristone.com/api/rest/flowershop/checkdeliverydate?zipcode=19901" + "&date=" + date, config).then(
            response => {
                console.log('Flourist Response: ', response)

                dispatch({ type: types.CHECK_FLOURIST_AVAILABLITY, available: response.data.DATE_AVAILABLE })

            }
        ).catch(error => {
            console.error(error)
        })

        axios.get("https://www.floristone.com/api/rest/flowershop/getauthorizenetkey", config).then(
            response => {
                console.log('Flourist token: ', response)

                dispatch({ type: types.FLOURIST_TOKEN_FETCHED, authorize_key: response.data.AUTHORIZENET_KEY, loginKey: response.data.USERNAME })

            }
        ).catch(error => {
            console.error(error)
        })


    }

}

export const setReceiver = (firstName, lastName, streetOne, streetTwo, plot, city, state, zipCode, country, phone) => {
    return (dispatch) => {
        let user = {
            firstName: firstName,
            lastName: lastName,
            streetOne: streetOne,
            streetTwo: streetTwo,
            plot: plot,
            city: city,
            state: state,
            zipCode: zipCode,
            country: country,
            phone: phone
        }
        dispatch({ type: types.RECEIVER_FETCHED, receiver: user });
    }
}

export const setOrderTotal = (total) => {
    return (dispatch) => {
        dispatch({ type: types.SET_ORDER_TOTAL, orderTotal: total })
    }
}

export const placeOrder = (status, unique_token) => {



    return (dispatch, store) => {


        let date = moment(new Date(store().journey.date)).format().slice(0, 10)
        console.log(date);
        // let scheduledTime = new Date(store().journey.date).getFullYear() + '-' + new Date(store().journey.date).getMonth() + '-' + new Date(store().journey.date).getDate()

        let config = {
            headers: {
                Authorization: 'Basic OTA5NzIzOkNyRUVmYw==',
                "Content-Type": "application/json"
            }
            ,
        };

        let product = []

        for (i = 0; i < store().flourist.quantity; i++) {
            product.push({
                "PRICE": store().flourist.flower.PRICE,
                "RECIPIENT": {
                    "ZIPCODE": store().flourist.receiver.zipCode,
                    "PHONE": store().flourist.receiver.phone,
                    "ADDRESS2": `${store().flourist.receiver.streetTwo}`,
                    "STATE": `${store().flourist.receiver.state}`,
                    "ADDRESS1": `${store().flourist.receiver.streetOne}`,
                    "NAME": `${store().flourist.receiver.firstName} ${store().flourist.receiver.lastName}`,
                    "COUNTRY": `${store().flourist.receiver.country}`,
                    "INSTITUTION": `${store().flourist.receiver.plot}`,
                    "CITY": `${store().flourist.receiver.city}`
                },
                "CODE": `${store().flourist.flower.CODE}`,
                "deliverydate": `${date}`,
                "cardmessage": "Sample message"

            })
        }

        // `https://www.floristone.com/api/rest/flowershop/gettotal?products=${product.toString()}`

        axios.post(
            `https://www.floristone.com/api/rest/flowershop/placeorder`
            ,

            {
                "customer": JSON.stringify({
                    "ZIPCODE": 19901,
                    "PHONE": store().signUp.user.phone,
                    "ADDRESS2": store().signUp.user.streetTwo,
                    "STATE": store().signUp.user.state,
                    "ADDRESS1": store().signUp.user.streetOne,
                    "NAME": store().signUp.user.firstName + " " + store().signUp.user.lastName,
                    "COUNTRY": store().signUp.user.country,
                    "IP": store().signUp.user.ipAddress,
                    "EMAIL": store().signUp.user.email,
                    "CITY": store().signUp.user.city
                }),
                "products": JSON.stringify(product),
                "ordertotal": store().flourist.total ? store().flourist.total : store().flourist.flower.TOTAL,
                "ccinfo": `{ "authorizenet_token": "${store().signUp.user.florist_token}" }`

            },
            config)
            .then(res => {
                if (res.data.errors) {
                    console.log("order response Error: ", res)
                    dispatch({
                        type: types.PLACE_ORDER_ERROR,
                        message: res.data.errors[0],
                        error: true
                    })
                } else {
                    console.log("success response", res);
                    if (unique_token == "") {
                        dispatch(createJourney(status))
                    } else {
                        dispatch(updateJourney(status))
                    }
                    dispatch({
                        type: types.PLACE_ORDER_SUCCESS,
                        success: true
                    })

                }
            }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )
    }
}

export const getOrderTotal = (list, quantity, zipCode) => {
    return (dispatch, store) => {

        let config = {
            headers: { Authorization: 'Basic OTA5NzIzOkNyRUVmYw==' },
        };

        let product = []

        for (i = 0; i < quantity; i++) {
            product.push({
                PRICE: list.PRICE,
                RECIPIENT: {
                    ZIPCODE: zipCode
                },
                CODE: list.CODE
            })
        }

        // `https://www.floristone.com/api/rest/flowershop/gettotal?products=${product.toString()}`

        axios.get(
            `https://www.floristone.com/api/rest/flowershop/gettotal?products=${JSON.stringify(product)}`
            , config)
            .then(res => {
                console.log("response Phlox", res)
                dispatch({
                    type: types.ORDER_TOTAL_FETCHED,
                    tax: res.data.TAXTOTAL,
                    total: res.data.ORDERTOTAL,
                    subTotal: res.data.SUBTOTAL,
                    service: res.data.FLORISTONESERVICECHARGE
                })


                // setTax(res.data.TAXTOTAL)
                // setTotal(res.data.ORDERTOTAL)
                // setSubTotal(res.data.SUBTOTAL)
                // setService(res.data.FLORISTONESERVICECHARGE)
                // props.setOrderTotal(res.data.ORDERTOTAL)
            }
            )
            .catch(
                error => {
                    console.log(error)
                }
            )

    }
}

export const resetPlaceOrderError = () => {
    return {
        type: types.PLACE_ORDER_ERROR,
        error: false,
        message: ""
    }
}

export const resetPlaceOrderSuccess = () => {
    return {
        type: types.PLACE_ORDER_SUCCESS,
        success: false,
    }
}


export const resetFlorist = () => {
    return {
        type: types.RESET_FLORIST,

    }
}