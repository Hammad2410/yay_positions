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