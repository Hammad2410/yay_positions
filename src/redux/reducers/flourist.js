import * as types from '../actionTypes';
import { State } from 'react-native-gesture-handler';

const initailState = {
    giftMessage: '',
    receiver: {},
    receiver_id: '',
    cardNo: '',
    expiry: '',
    expiryMonth: '',
    cvc: '',
    flower: '',
    quantity: '',
    available: false,
    authorize_key: '',
    loginKey: "",
    orderTotal: 0,
    tax: 0,
    total: 0,
    subTotal: 0,
    service: 0,
    placeOrderError: false,
    placeOrderErrorMessage: "",
    placeOrderSuccess: false
}

const flourist = (state = initailState, action) => {
    switch (action.type) {

        case types.SELECT_GIFT_MESSAGE: {
            return {
                ...state,
                giftMessage: action.message
            }
        }

        case types.RECEIVER_FETCHED: {
            return {
                ...state,
                receiver: {
                    ...state.receiver,
                    ...action.receiver
                },
            }
        }

        case types.SET_RECEIVER_ID: {
            return {
                ...state,
                receiver_id: action.receiver_id
            }
        }

        case types.SET_CARD_NO: {
            return {
                ...state,
                cardNo: action.cardNo
            }
        }

        case types.SET_CARD_EXPIRY: {
            return {
                ...state,
                expiry: action.expiry
            }
        }

        case types.SET_CARD_EXPIRY_MONTH: {
            return {
                ...state,
                expiryMonth: action.expiryMonth
            }
        }


        case types.SET_CARD_CVC: {
            return {
                ...state,
                cvc: action.cvc
            }
        }

        case types.SET_FLOWER: {
            return {
                ...state,
                flower: action.flower,
                quantity: action.quantity
            }
        }

        case types.CHECK_FLOURIST_AVAILABLITY: {
            return {
                ...state,
                available: action.available
            }
        }

        case types.FLOURIST_TOKEN_FETCHED: {
            return {
                ...state,
                authorize_key: action.authorize_key,
                loginKey: action.loginKey
            }
        }

        case types.RESET_JOURNEY_MESSAGE: {
            return {
                ...state,
                giftMessage: '',
                receiver: '',
                receiver_id: '',
                cardNo: '',
                expiry: '',
                cvc: '',
                flower: '',
                quantity: '',
                available: false,
                authorize_key: '',
                orderTotal: 0
            }
        }
        case types.RESET_FLORIST: {
            return {
                ...state,
                giftMessage: '',
                receiver: '',
                receiver_id: '',
                cardNo: '',
                expiry: '',
                cvc: '',
                flower: '',
                quantity: '',
                available: false,
                authorize_key: '',
                orderTotal: 0
            }
        }

        case types.JOURNEY_CREATED: {
            return {
                ...state,
                giftMessage: '',
                receiver: '',
                receiver_id: '',
                cardNo: '',
                expiry: '',
                cvc: '',
                flower: '',
                quantity: '',
                available: false,
                authorize_key: '',
                orderTotal: 0
            }
        }

        case types.SET_ORDER_TOTAL: {
            return {
                ...state,
                orderTotal: action.orderTotal
            }
        }

        case types.ORDER_TOTAL_FETCHED: {
            return {
                ...state,
                tax: action.tax,
                total: action.total,
                subTotal: action.subTotal,
                service: action.service
            }
        }
        case types.PLACE_ORDER_ERROR: {
            return {
                ...state,
                placeOrderError: action.error,
                placeOrderErrorMessage: action.message
            }
        }

        case types.PLACE_ORDER_SUCCESS: {
            return {
                ...state,
                placeOrderSuccess: action.success
            }
        }

        default:
            return {
                ...state,
            }

    }
}

export default flourist