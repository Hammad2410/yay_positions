import * as types from '../actionTypes';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';

export const browseCandidate = () => {
    return (dispatch, store) => {
        dispatch({ type: types.EMPLOYER_LOADING })

        axios.get(BASE_URL + "/api/employer/candidates", {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                dispatch({ type: types.EMPLOYER_CANDIDATES_FETCHED, candidates: response.data.candidates })
            })
            .catch((error) => {
                dispatch({ type: types.EMPLOYER_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.EMPLOYER_RESET_ERROR }), 5000)
            })
    }
}

export const sendInvite = (id) => {
    return (dispatch, store) => {
        dispatch({ type: types.EMPLOYER_LOADING })

        axios.post(BASE_URL + "/api/employer/SendInvite", {
            candidateid: id
        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                alert(id)
                //dispatch({ type: types.EMPLOYER_CANDIDATES_FETCHED, candidates: response.data.candidates })
            })
            .catch((error) => {
                dispatch({ type: types.EMPLOYER_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.EMPLOYER_RESET_ERROR }), 5000)
            })
    }
}

export const getJobs = () => {
    return (dispatch, store) => {
        dispatch({ type: types.EMPLOYER_LOADING })

        axios.get(BASE_URL + "/api/jobs", {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                dispatch({ type: types.EMPLOYER_JOBS_FETCHED, jobs: response.data.jobs })
            })
            .catch((error) => {
                dispatch({ type: types.EMPLOYER_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.EMPLOYER_RESET_ERROR }), 5000)
            })
    }
}

export const getFavorites = () => {
    return (dispatch, store) => {
        dispatch({ type: types.EMPLOYER_LOADING })

        axios.get(BASE_URL + "/api/employer/FavouriteCandidates", {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                dispatch({ type: types.EMPLOYER_FAVORITES_FETCHED, favorites: response.data.favourite })
            })
            .catch((error) => {
                dispatch({ type: types.EMPLOYER_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.EMPLOYER_RESET_ERROR }), 5000)
            })
    }
}

export const markFavorite = (job) => {
    return (dispatch, store) => {
        dispatch({ type: types.EMPLOYER_LOADING })

        axios.get(BASE_URL + "/api/employer/Favourite?candidateid=" + job.CandidateId, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                if (store().employer.favorites.filter((item) => item.CandidateId == job.CandidateId).length == 0) {
                    console.log('Working')
                    dispatch({ type: types.EMPLOYER_FAVORITES_FETCHED, favorites: store().employer.favorites.push(job) })
                }
                else {
                    dispatch({ type: types.EMPLOYER_FAVORITES_FETCHED, favorites: store().employer.favorites.filter((item) => item.CandidateId != job.CandidateId) })
                }


            })
            .catch((error) => {

                console.log("error: ", error.message)
                dispatch({ type: types.EMPLOYER_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.EMPLOYER_RESET_ERROR }), 5000)
            })
    }
}

export const getCandidateProfile = () => {
    return (dispatch, store) => {
        dispatch({ type: types.EMPLOYER_LOADING })

        axios.get(BASE_URL + "/api/employer/CandidateProfile?id=" + store().employer.candidateId, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                console.log("Profile : ", response.data.profile)
                dispatch({ type: types.EMPLOYER_CANDIDATE_PROFILE_FETCHED, profile: response.data.candidateprofile })
            })
            .catch((error) => {

                console.log("error: ", error.message)
                dispatch({ type: types.EMPLOYER_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.EMPLOYER_RESET_ERROR }), 5000)
            })
    }
}

export const changeCandidateId = (id) => {
    return (dispatch) => {
        dispatch({ type: types.EMPLOYER_SET_CANDIDATE_ID, id: id })
    }
}

export const createJob = (title, level, experience, qualification, jobType, salaryType, salaryRange, jobDescription, detail, location, remoteOrInHouse) => {
    return (dispatch, store) => {
        dispatch({ type: types.EMPLOYER_LOADING })

        axios.post(BASE_URL + "/api/jobs", {
            Title: title,
            Level: level,
            Experience: experience,
            Qualification: qualification,
            JobType: jobType,
            SalaryType: salaryType,
            SalaryRange: salaryRange,
            JobDescription: jobDescription,
            Detail: detail,
            Location: location,
            RemoteOrInHouse: remoteOrInHouse

        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                dispatch({ type: types.EMPLOYER_JOB_CREATED, message: "Job Created" })

                setTimeout(() => dispatch({ type: types.EMPLOYER_RESET_ERROR }), 5000)
                //dispatch({ type: types.EMPLOYER_CANDIDATES_FETCHED, candidates: response.data.candidates })
            })
            .catch((error) => {
                dispatch({ type: types.EMPLOYER_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.EMPLOYER_RESET_ERROR }), 5000)
            })
    }
}

export const getHiredCandidates = () => {
    return (dispatch, store) => {
        dispatch({ type: types.EMPLOYER_LOADING })

        axios.get(BASE_URL + "/api/employer/hiredcandidates", {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                dispatch({ type: types.EMPLOYER_HIRED_CANDIDATES_FETCHED, hired: response.data.hired })
            })
            .catch((error) => {
                dispatch({ type: types.EMPLOYER_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.EMPLOYER_RESET_ERROR }), 5000)
            })
    }
}

export const getCompanyProfile = () => {
    return (dispatch, store) => {
        dispatch({ type: types.AUTH_LOADING })

        axios.get(BASE_URL + "/api/employer/profile", {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                console.log("Profile : ", response.data.profile)
                dispatch({ type: types.AUTH_PROFILE_FETCHED, profile: response.data.profile })
            })
            .catch((error) => {

                console.log("error: ", error.message)
                dispatch({ type: types.AUTH_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.AUTH_RESET_ERROR }), 5000)
            })
    }
}

export const getInvitations = () => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.get(BASE_URL + "/api/employer/Invitations", {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer ImR3jcyncQexl3290Mbdco9hCSbbyfC5u8cxii1mU85o_4ekExt3w7jxLjGxug67hfXDfGxlkPJBNpssd327Cbs7N7MJdNNmEeeWtOm5xuCdIJBDNxXT-OvzEycuQBxFr1CpZl3iQL2tTlofPVrs42Y25emZuEerwDstlwnjiA-stovcLA3P0qQK4to9n_WueBoXGoNUvdcmt6y74AAXXh2QhleVZ3WBrJaycGZmmyx-seyeRCPoP36kEdRz9_Dhap-K_5_SCIIVGuPY8Pa3PWTXmjDGCUQhhIHOacNvtpxqVdErnM9Mo93q9alesbzd0xvML-pyKfcIhthFUSl-6V9dPvLQLvRmkus0Bn_WM4uBuDUjwBmTfohfESP_1ZetSLLr3CzKoMr-dZSiisAz4WA9hRCR6XAbvLRaop0bZDqwypPVNPq6UaaRgZuDdafTLwCAX-4Swx_nn47oMdLjH4NaUnn5nAiFnqZqHwiSYfwOT_e9GQ_aVMqUyJkqtWiIHp0DS_jS-ERmvUAIMYHMb6aVPv6V3t9H8w_89ox5FJpaQidjbVL9N48v0s7ujguT"
            }
        })
            .then((response) => {
                dispatch({ type: types.CANDIDATE_INVITATION_FETCHED, invitations: response.data.invitations })
            })
            .catch((error) => {

                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}
