import * as types from '../actionTypes';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';

export const getInvitations = () => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.get(BASE_URL + "/api/candidate/Invitations", {
            headers: {
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer mNS_mnRB0ep_Tk1VxBw8f-7L54i-YYaQ9QhxSDtvrReG7M1kGATPK9ZYkFJjwCtCPzSbY_n637yHQlgmKqApDIdnuFgOiyLzmUbHSv7EV4NlhaXqFWpRr9X9miajoZfgWccJZS-pWF4bMdNaruhHkUhcsbrNJbGgaWuTZ7TJpAg00dXaqEjOAXLxaKEjIOn-ZnPRlMuZPHoRzmr-QnpPpvx5O9tkRA1rs8TXPGxZGjlHVXxo2AUSlXb6d_-szBAB1sbvHkw8uPKZiyNdO9NIwtrE_JKYA1wJMwVKzy1R8tt944fatwpMxxVv-1HXH5Rq7P8ycGlw15a_Hu82PyzeAsF7DjGNM5o-W6r013CtbHnH5e_hkyu7VEbeO5kn__lKMOniKaSUPfBxcuOjXD39bfanC9wfAWFc7YiL7owQwdks1cT4S3Guw9E6PHITAu4nqOBaxRLpJMW5brzNaUl8wfugY6dy5P5Oum3H1fDl6R5tSsA7oIj5tq1KYtxrm9zEvVTPpocmrlLVPwrmCf95UjEf894vSWpXZZhZPBMLaX5f8Dv5BAVK2Au-0R9CzoKi"
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

export const getJobs = () => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.get(BASE_URL + "/api/candidate/BrowseJobs", {
            headers: {
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer qbSkETCBvTOuuGEE9S6tw2WYLHUDc8iMzbN7MKJVkwTbWw3yTpcHJuiaMYK3tQHppxV1OnD3P6WFUAfIv879DkUPJ8CB1f7SoxIdueTUThZDr6sfOChwBabUM-qVV2JEf1voYEf_aUsrIAqU7a4X3cMEmWxHHoN96vmGXjWaVj4Qz6jCVpP6k9iwkTNGvP8SAiIlTOqzkkidmaf0cjgUJROox74v5N6dzhq8MuLAtUECXPhM9BHkceIm86yrt7PhuoTNSSSXJgHWj0H6j0Gd_7qhHVJJaETvEHjn1wY9mrltSO9x67xmkbXqgmw6lwcEGQVS6F6QAvovfEy-xWUa3GX3rSRNgM-sqZtmWYIPJo8gty-tp6MtJHZoOU7iEcZq2RTnufJbOwXn18ZyAbPcurJHem4ZojBNQ00rxZl0e_Cw_3n1k08KijJ6PxCtF88qjIiKFTUvGLcQ4oukdt-_03NCMhW5wTSbyd4dTJ848v60sWZVrvcse_pO1kTCjsDyCSXTmbadPSy8EPt6296_9Eg4iTycnRyKzFq9FquuqpmsTXqvRyWWazmEHTeaRM6A"
            }
        })
            .then((response) => {

                dispatch({ type: types.CANDIDATE_JOBS_FETCHED, jobs: response.data.jobs })
            })
            .catch((error) => {
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const getSavedJobs = () => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.get(BASE_URL + "/api/candidate/SavedJobs", {
            headers: {
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer GD14fLiO27Ty0HRbblZNwDjvJxbfYqneDMlly7T9fP-aYcXaiAnKOQXkLZpiOJ-OSXweuvVYGd8tRR-sjaVa4EJ2xA0B_vqQFZaB6yvZKmK2a3Q9W1gXcEGwrwWFANEWWfqAk2YUKDtptMNJURn5FLiNY0hZ4ldyuxeEUsA-VSCJuoc1Y73x_OQLoG3YPLoSxtp0pa5P3ba7nVoDD1f5U0y_MHrR85-HQnqDs3la61f_8p_MTAeuJuPfyOvZdOvkAWvaNwXQlDJenQvfHQU4RH--q2QTRpbcFtxq3QMNRvaNZ8kJW2RC2lqkhDUgWvAd-0bH9NuKpMOom1dZiHRBuFxv2O2rtNdZUDc7PX6Nkvd8cKxWdf3YNWUDjNL5ges10_EHYd3D-S86e2NrG1llHol6qfpZObBqdvnzA2jhoBkGuByr0EGt_lVMcosQu61k_lkcG_EbwRr3B10Rbbu32prM-MTfhznzLTjlSbs5xOIzf06UJKkVg1J8kkdVjb7bnpgaGrS26EQ_IWf7c-_kJvk7oA28_6Yy8hhSXblak-ln8LmtTtHDTprE0gZFBFdY"
            }
        })
            .then((response) => {

                dispatch({ type: types.CANDIDATE_SAVED_JOBS_FETCHED, jobs: response.data.savedjobs })
            })
            .catch((error) => {
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const saveJobs = (job) => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.get(BASE_URL + "/api/candidate/Favourite?jobid=" + job.Id, {
            headers: {
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer GD14fLiO27Ty0HRbblZNwDjvJxbfYqneDMlly7T9fP-aYcXaiAnKOQXkLZpiOJ-OSXweuvVYGd8tRR-sjaVa4EJ2xA0B_vqQFZaB6yvZKmK2a3Q9W1gXcEGwrwWFANEWWfqAk2YUKDtptMNJURn5FLiNY0hZ4ldyuxeEUsA-VSCJuoc1Y73x_OQLoG3YPLoSxtp0pa5P3ba7nVoDD1f5U0y_MHrR85-HQnqDs3la61f_8p_MTAeuJuPfyOvZdOvkAWvaNwXQlDJenQvfHQU4RH--q2QTRpbcFtxq3QMNRvaNZ8kJW2RC2lqkhDUgWvAd-0bH9NuKpMOom1dZiHRBuFxv2O2rtNdZUDc7PX6Nkvd8cKxWdf3YNWUDjNL5ges10_EHYd3D-S86e2NrG1llHol6qfpZObBqdvnzA2jhoBkGuByr0EGt_lVMcosQu61k_lkcG_EbwRr3B10Rbbu32prM-MTfhznzLTjlSbs5xOIzf06UJKkVg1J8kkdVjb7bnpgaGrS26EQ_IWf7c-_kJvk7oA28_6Yy8hhSXblak-ln8LmtTtHDTprE0gZFBFdY"
            }
        })
            .then((response) => {
                if (store().candidate.savedJobs.filter((item) => item.Job.Id == job.Id).length == 0) {
                    dispatch({ type: types.CANDIDATE_SAVED_JOBS_FETCHED, jobs: store().candidate.savedJobs.push(job) })
                }
                else {
                    dispatch({ type: types.CANDIDATE_SAVED_JOBS_FETCHED, jobs: store().candidate.savedJobs.filter((item) => item.Job.Id != job.Id) })
                }


            })
            .catch((error) => {

                console.log("error: ", error.message)
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const getCandidateProfile = () => {
    return (dispatch, store) => {
        dispatch({ type: types.AUTH_LOADING })

        axios.get(BASE_URL + "/api/candidate/profile", {
            headers: {
                //Authorization: "bearer " + store().auth.token
                Authorization: "Bearer 6pR7Iqjh2PK1VJRTTy_g5PKSGFE3MTzEC2oBQYL5NQH3xl9TOA_UYaXjkOK5f813-Xzz6aE0a4lj4T8NazhysmtutNuOTtwNcbaoJpWyfkc5pN8PU8plzZGmIRcieQHQJpKKS8ImNxsan-aNIfHFtdq3lQ02rO-yFy84daQucQYSZ8XGU5ZepwxWs5TARNSaagLqBr5EaCQdfL03Jsti1mBvHbeGByOWGuEfe3_PlBlb5mcQiPiR-ZkZIZLOgd-wQ6QVrr6WBmADKYxdwtL97SR1WhlVHo_ooUiW53doz-11noukIsHUGEjC_frf8VdT21xWyzVFW9JyFGAp5YRTJ-rt0O4bEqXkW_VHYYz2vIVIcxu6EsPlb2LHvlqTsOupbzg1_IRxIfDC02qFQUqxlVlBc6u1qn1fyyzpGs4qtjS02ViC6DstzGZFSZIym2wNGSR81gK_V9LX4lSRJ7buc0bWiP3I4TUiVr1Le4oltfUro15jjtZ7d6Uq0LKqIl7sOzLNqBRpihDalq4RPBFuOZHJ4iFx1deZJaRAiI4a1oOeQ8R9_ZfBOPoKdDqQY1oJ"
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


