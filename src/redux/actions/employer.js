import * as types from '../actionTypes';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';

export const browseCandidate = () => {
    return (dispatch, store) => {
        dispatch({ type: types.EMPLOYER_LOADING })

        axios.get(BASE_URL + "/api/employer/candidates", {
            headers: {
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer 04Q6JzNzRT2dNTzMxS9SbRGEvNxp8D9Ryf2mN8JNdl9aquQ5Lb2A_UgFHBd0BhRfhYscxOiil-wxvEeGtrHFmHNk-NbmXboFqCnH-MXGI8C09_Iql1dybFUJCnzbc4sQoZtyOGNH0RFZScO7L0FxczI2GT6aw8dhFLv4NpFmHoDeD6_3Ev831B6gfJlW-Z6_cvC6W4knA4on09axrCwIbzOi8JW0-asJT4we97ymGsqXgiAZUT_aSxk7ka1WxCMVxmSxGl_voEpGQsE_Ee5KSD1tz9dLocL2dEYUsL0DeGhnJNu1-95TxQ-xXMyUEz7uhONiPDMznKI-g3QTi4Fkj7TCINXLAkRLhaXf35d8fCCPLLieXWIwzhOF1GE4zkEVabI-iwGeOKhEiJosiaBzMLkVjZBI41upytXOjnDFZztEKHB-djpGsTU1a15hLMN6ctWIkcVpskOSJzrbkNH31zPhnk3tvcgGqjAoHd14s_EQEeOmagzj1MgddjdlQOlfIiD5wpQPD-Ejn4OKfj-sr1NS7kTEB-d7GoUC3KwpJor891ZGURklFpzl8IIym86h"
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
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer 04Q6JzNzRT2dNTzMxS9SbRGEvNxp8D9Ryf2mN8JNdl9aquQ5Lb2A_UgFHBd0BhRfhYscxOiil-wxvEeGtrHFmHNk-NbmXboFqCnH-MXGI8C09_Iql1dybFUJCnzbc4sQoZtyOGNH0RFZScO7L0FxczI2GT6aw8dhFLv4NpFmHoDeD6_3Ev831B6gfJlW-Z6_cvC6W4knA4on09axrCwIbzOi8JW0-asJT4we97ymGsqXgiAZUT_aSxk7ka1WxCMVxmSxGl_voEpGQsE_Ee5KSD1tz9dLocL2dEYUsL0DeGhnJNu1-95TxQ-xXMyUEz7uhONiPDMznKI-g3QTi4Fkj7TCINXLAkRLhaXf35d8fCCPLLieXWIwzhOF1GE4zkEVabI-iwGeOKhEiJosiaBzMLkVjZBI41upytXOjnDFZztEKHB-djpGsTU1a15hLMN6ctWIkcVpskOSJzrbkNH31zPhnk3tvcgGqjAoHd14s_EQEeOmagzj1MgddjdlQOlfIiD5wpQPD-Ejn4OKfj-sr1NS7kTEB-d7GoUC3KwpJor891ZGURklFpzl8IIym86h"
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
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer 04Q6JzNzRT2dNTzMxS9SbRGEvNxp8D9Ryf2mN8JNdl9aquQ5Lb2A_UgFHBd0BhRfhYscxOiil-wxvEeGtrHFmHNk-NbmXboFqCnH-MXGI8C09_Iql1dybFUJCnzbc4sQoZtyOGNH0RFZScO7L0FxczI2GT6aw8dhFLv4NpFmHoDeD6_3Ev831B6gfJlW-Z6_cvC6W4knA4on09axrCwIbzOi8JW0-asJT4we97ymGsqXgiAZUT_aSxk7ka1WxCMVxmSxGl_voEpGQsE_Ee5KSD1tz9dLocL2dEYUsL0DeGhnJNu1-95TxQ-xXMyUEz7uhONiPDMznKI-g3QTi4Fkj7TCINXLAkRLhaXf35d8fCCPLLieXWIwzhOF1GE4zkEVabI-iwGeOKhEiJosiaBzMLkVjZBI41upytXOjnDFZztEKHB-djpGsTU1a15hLMN6ctWIkcVpskOSJzrbkNH31zPhnk3tvcgGqjAoHd14s_EQEeOmagzj1MgddjdlQOlfIiD5wpQPD-Ejn4OKfj-sr1NS7kTEB-d7GoUC3KwpJor891ZGURklFpzl8IIym86h"
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
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer lBMxNm4UZ5TUhgg8tUbymHCJTbCzKYO9IVBcsQRW5WDqAbtSEpr8ha5XP2s3plhofn_wtJMazkFLrf_i0BjogVqEqKxqU31GSyy3Mdyn2DCyQoMChCY4VR9_gISOukcCi7uDF5MChMCwqdMlqPMSSkc9OTozimfVyW3nax9CoTbwy88sHpuvN11errYBAUN7blWdypI4bByipyx5tTY-7S3KATCQigEvbD2lKKSnYwPmPm3ADxc-N3LlQdUPcmdw3gZWKjr-cFwTY49CZYP9zZ1ajkoXmnWJr4WF_Ha9kwlPW-juBwOJOIxHQ9F1pEj4eGlS-miJMYswniyVi6BilCSN8CvW7gNSe4jXb5b67sfsipHnYaFvGeLjANONcpnsMBor3iJLBgiN6Jkc0093JUDF04xNtY1-tIxMJMPVvnnYtRpT7GxS8-Fr5iYnYuY1Bw39l2W8QCJGZOOVhU_YyAEUbgtOIv6A07_qIwaW3r6KCfcr9Ip0xQfqcFhk2Qv-h49FNlpA1bYMOrQYNp9W-K2tcB1Bquxk3RVKSfF18f1bAdFUoNVDTA8X9P4Y6Lvw"
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

        axios.get(BASE_URL + "/api/candidate/Favourite?jobid=" + job.Id, {
            headers: {
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer GD14fLiO27Ty0HRbblZNwDjvJxbfYqneDMlly7T9fP-aYcXaiAnKOQXkLZpiOJ-OSXweuvVYGd8tRR-sjaVa4EJ2xA0B_vqQFZaB6yvZKmK2a3Q9W1gXcEGwrwWFANEWWfqAk2YUKDtptMNJURn5FLiNY0hZ4ldyuxeEUsA-VSCJuoc1Y73x_OQLoG3YPLoSxtp0pa5P3ba7nVoDD1f5U0y_MHrR85-HQnqDs3la61f_8p_MTAeuJuPfyOvZdOvkAWvaNwXQlDJenQvfHQU4RH--q2QTRpbcFtxq3QMNRvaNZ8kJW2RC2lqkhDUgWvAd-0bH9NuKpMOom1dZiHRBuFxv2O2rtNdZUDc7PX6Nkvd8cKxWdf3YNWUDjNL5ges10_EHYd3D-S86e2NrG1llHol6qfpZObBqdvnzA2jhoBkGuByr0EGt_lVMcosQu61k_lkcG_EbwRr3B10Rbbu32prM-MTfhznzLTjlSbs5xOIzf06UJKkVg1J8kkdVjb7bnpgaGrS26EQ_IWf7c-_kJvk7oA28_6Yy8hhSXblak-ln8LmtTtHDTprE0gZFBFdY"
            }
        })
            .then((response) => {
                if (store().employer.favorites.filter((item) => item.CandidateId == job.CandidateId).length == 0) {
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
