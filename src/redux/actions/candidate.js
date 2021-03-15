import * as types from '../actionTypes';
import axios from 'axios';
import { BASE_URL } from '../../utils/config';
import { rescheduleInvite } from './employer';

export const getInvitations = () => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.get(BASE_URL + "/api/candidate/Invitations", {
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

export const getJobs = () => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.get(BASE_URL + "/api/candidate/BrowseJobs", {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer 02CYK1HtqJtInNJ6jDbc2rD930wrT64D9wCaj-5b_I-QS8E2AvrUOa5TJgTJm2LCw9cdni1POHHdh4xM3WFxo40Fx_okAjM4S4O7u9-I5pXEWZT50QIdwh_oe0XPgvT8KadLSGRKxgRetQnybIpAlH_copZYvHHA06N-2hCNNKj1F6OnXgJUQiw0KhbshGj5OFOczaSX0sMhxaXAX80JX7H9UuBVZNVPuHta7UzlwIT9QVgBfqeP7dpToWrq6zaLiK5lWSmd3etG2tyjkXHZjfba00o3mJUK_IInd0CJV64pvMUjEYqAfEpImUtNA5Xs-w_rl907SM4blx_2SeqOVJ3azyBYCCS2AXGH4A_pQUt-vuil0hOj9ZC9sTkPnDz-NeK1EWGd7g8gpL36DlVD3zOnwBkVqDRK-uboSbRF-wl3gnLyo7vsAqwFdUe7IWfrv1TpvOfSWRR8pq13q3Dh744v7pksRuPOFRA6KY2QtHx-Fuxgm7NQkzn8IlaMjE-tdnPN5b9ciQbedjTXQZTuDDxlgDJdzFXott0wh7gUH7fO2mheVlLM_hsl-oNaqQsE"
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
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer GD14fLiO27Ty0HRbblZNwDjvJxbfYqneDMlly7T9fP-aYcXaiAnKOQXkLZpiOJ-OSXweuvVYGd8tRR-sjaVa4EJ2xA0B_vqQFZaB6yvZKmK2a3Q9W1gXcEGwrwWFANEWWfqAk2YUKDtptMNJURn5FLiNY0hZ4ldyuxeEUsA-VSCJuoc1Y73x_OQLoG3YPLoSxtp0pa5P3ba7nVoDD1f5U0y_MHrR85-HQnqDs3la61f_8p_MTAeuJuPfyOvZdOvkAWvaNwXQlDJenQvfHQU4RH--q2QTRpbcFtxq3QMNRvaNZ8kJW2RC2lqkhDUgWvAd-0bH9NuKpMOom1dZiHRBuFxv2O2rtNdZUDc7PX6Nkvd8cKxWdf3YNWUDjNL5ges10_EHYd3D-S86e2NrG1llHol6qfpZObBqdvnzA2jhoBkGuByr0EGt_lVMcosQu61k_lkcG_EbwRr3B10Rbbu32prM-MTfhznzLTjlSbs5xOIzf06UJKkVg1J8kkdVjb7bnpgaGrS26EQ_IWf7c-_kJvk7oA28_6Yy8hhSXblak-ln8LmtTtHDTprE0gZFBFdY"
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
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer GD14fLiO27Ty0HRbblZNwDjvJxbfYqneDMlly7T9fP-aYcXaiAnKOQXkLZpiOJ-OSXweuvVYGd8tRR-sjaVa4EJ2xA0B_vqQFZaB6yvZKmK2a3Q9W1gXcEGwrwWFANEWWfqAk2YUKDtptMNJURn5FLiNY0hZ4ldyuxeEUsA-VSCJuoc1Y73x_OQLoG3YPLoSxtp0pa5P3ba7nVoDD1f5U0y_MHrR85-HQnqDs3la61f_8p_MTAeuJuPfyOvZdOvkAWvaNwXQlDJenQvfHQU4RH--q2QTRpbcFtxq3QMNRvaNZ8kJW2RC2lqkhDUgWvAd-0bH9NuKpMOom1dZiHRBuFxv2O2rtNdZUDc7PX6Nkvd8cKxWdf3YNWUDjNL5ges10_EHYd3D-S86e2NrG1llHol6qfpZObBqdvnzA2jhoBkGuByr0EGt_lVMcosQu61k_lkcG_EbwRr3B10Rbbu32prM-MTfhznzLTjlSbs5xOIzf06UJKkVg1J8kkdVjb7bnpgaGrS26EQ_IWf7c-_kJvk7oA28_6Yy8hhSXblak-ln8LmtTtHDTprE0gZFBFdY"
            }
        })
            .then((response) => {

                if (store().candidate.savedJobs.filter((item) => item.Job.Id == job.Id).length == 0) {
                    // alert("Working")
                    dispatch({ type: types.CANDIDATE_SAVED_JOBS_FETCHED, jobs: store().candidate.savedJobs.push(job) })
                }
                else {
                    dispatch({ type: types.CANDIDATE_SAVED_JOBS_FETCHED, jobs: store().candidate.savedJobs.filter((item) => item.Job.Id != job.Id) })
                }


            })
            .catch((error) => {

                // console.log("error: ", job)
                // dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                // setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const getCandidateProfile = () => {
    return (dispatch, store) => {
        dispatch({ type: types.AUTH_LOADING })

        axios.get(BASE_URL + "/api/candidate/profile", {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer 02CYK1HtqJtInNJ6jDbc2rD930wrT64D9wCaj-5b_I-QS8E2AvrUOa5TJgTJm2LCw9cdni1POHHdh4xM3WFxo40Fx_okAjM4S4O7u9-I5pXEWZT50QIdwh_oe0XPgvT8KadLSGRKxgRetQnybIpAlH_copZYvHHA06N-2hCNNKj1F6OnXgJUQiw0KhbshGj5OFOczaSX0sMhxaXAX80JX7H9UuBVZNVPuHta7UzlwIT9QVgBfqeP7dpToWrq6zaLiK5lWSmd3etG2tyjkXHZjfba00o3mJUK_IInd0CJV64pvMUjEYqAfEpImUtNA5Xs-w_rl907SM4blx_2SeqOVJ3azyBYCCS2AXGH4A_pQUt-vuil0hOj9ZC9sTkPnDz-NeK1EWGd7g8gpL36DlVD3zOnwBkVqDRK-uboSbRF-wl3gnLyo7vsAqwFdUe7IWfrv1TpvOfSWRR8pq13q3Dh744v7pksRuPOFRA6KY2QtHx-Fuxgm7NQkzn8IlaMjE-tdnPN5b9ciQbedjTXQZTuDDxlgDJdzFXott0wh7gUH7fO2mheVlLM_hsl-oNaqQsE"
            }
        })
            .then((response) => {
                console.log("Profile : ", response.data.profile)
                dispatch({ type: types.AUTH_PROFILE_FETCHED, profile: response.data.profile })
            })
            .catch((error) => {

                console.log("error: ", error.message)
                dispatch({ type: types.AUTH_ERROR, message: error.message })

                // setTimeout(() => dispatch({ type: types.AUTH_RESET_ERROR }), 5000)
            })
    }
}

export const updateEducation = (title, institute, startDate, endDate, grade, description, degree) => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.post(BASE_URL + "/api/candidate/SaveEducationInfos", {
            QualificationTitle: title,
            InstituteName: institute,
            StartDate: startDate,
            EndDate: endDate,
            Grade: grade,
            Degree: degree,
            DescriptionEducational: description
        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer 7dfs0t_Pk1ekqVtHV_tLQtepZmZU-jsZLUzgT3pCLdFaCh66qv4mQdSm3evROMjt4AFeCshoiNFymYe0X56rwNzsdgwW36AWD_0CKW5f_D1Bn36np9Z7eh1d892AVbC3bNrlWLTJpd8IVmo1cRa5Kdgh7e9CHmDSqJ4CORfRP_63ZTkqletrgzqAyr6OVWCL7bBeBwE3W4x7d0_YxzP3CDye2Ai1i1jgn8cCsH2uIBkZ3msw0uStv3i4LutZTzyw39a5eNl0gkt-9V94hJpZKLuf8lw7WUqQZr8pxmnJhg7gybsdBegMyVrdqgV75GX6UPePMbk0B54TJo4F4TuZJTZ7wJF0tvxgkihScBVlzraLu95HBt9WHT-tD8RRS38g8WcDJVHdNHEuqRRrcpMLjXfCGoxS8K7JJX63iVjDD75kECQ0kRL7fHHmoPYfpHc341wpJjL_lzGGfsj5bOhcNfvSnPYjouDaZDUlKi-mtZ3i0Pr055zj_aItep_ztLOhHH6T8QERZ_baZvneV-9ICs_Bdwm141MxI_51LL1Ni3JrrLZeb5uelatKbmF7Q_IU"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                dispatch({ type: types.CANDIDATE_EDUCATION_ADDED, message: "Education Added" })
                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
            .catch((error) => {
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const updateJob = (company, role, startDate, endDate, description) => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.post(BASE_URL + "/api/candidate/SaveJobInfo", {
            OrganizationName: company,
            YourRole: role,
            StartDate: startDate,
            EndDate: endDate,
            DescriptionJob: description
        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer RqP6RAkdaAvZrlIJxb0npCeKkui0npuZVGcShAXrgOqYuXqFWXod26O5evMjJwsABWWTa4a6fp1vxHOGPT8qmHrGV_2kPC7xEeH8-nYZ4pq7jyM-fNkXJCtEU4dVhdVJGsaciOr-vBiGZxDFJ3Glh0cElxTSpY0Hoy9bIBXaOm6DFrRfWpzmM81P_5OGYap8kqn7Fyxki3yzm0DpfAcJplYkHBapT_djrXKAsT4KSaONq1tJjNNblS13M5ifAvQcK3-NXlet-_m8UtvJhyVh5aUP4VeMfPPV3qQhyotZcx59uEPzcP7uGazSMrcFXzuVX3EnmyL9VsCg2ddPi8wMUuMU-P2PL0thqlHG6BMfaneqNr1ULAKN4IFh5meUi8xZy_5FhICkszo3Ox8Ee1eoyk-Kev8CBLd0hfWnie4zSQIS1lSYX47Qc4AqvLPvEVPHRFcJWNObfVz8vtYDJczG7NSwB40Jsx7F-3ekJ32eILEMDpaHbU1DLGQwsCid7cI4MHs1aN3QwiJfs30xNQl5kwuQsfH8erCgJ5Un47C0NxxVP0eT_lW0bJObEmN-DJ_G"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                dispatch({ type: types.CANDIDATE_JOB_ADDED, message: "Job Added" })
                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
            .catch((error) => {
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const updatePersonalInfo = (name, email, phone, gender, dob, file, level, experience, qualification, jobType, salaryType, salaryRange, about) => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.post(BASE_URL + "/api/candidate/PersonalInfo", {
            FullName: name,
            Email: email,
            PhoneNo: phone,
            Gender: gender,
            DOB: dob,
            file: file,
            Level: level,
            Experience: experience,
            Qualification: qualification,
            JobType: jobType,
            SalaryType: salaryType,
            SalaryRange: salaryRange,
            AboutYourself: about
        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer 7dfs0t_Pk1ekqVtHV_tLQtepZmZU-jsZLUzgT3pCLdFaCh66qv4mQdSm3evROMjt4AFeCshoiNFymYe0X56rwNzsdgwW36AWD_0CKW5f_D1Bn36np9Z7eh1d892AVbC3bNrlWLTJpd8IVmo1cRa5Kdgh7e9CHmDSqJ4CORfRP_63ZTkqletrgzqAyr6OVWCL7bBeBwE3W4x7d0_YxzP3CDye2Ai1i1jgn8cCsH2uIBkZ3msw0uStv3i4LutZTzyw39a5eNl0gkt-9V94hJpZKLuf8lw7WUqQZr8pxmnJhg7gybsdBegMyVrdqgV75GX6UPePMbk0B54TJo4F4TuZJTZ7wJF0tvxgkihScBVlzraLu95HBt9WHT-tD8RRS38g8WcDJVHdNHEuqRRrcpMLjXfCGoxS8K7JJX63iVjDD75kECQ0kRL7fHHmoPYfpHc341wpJjL_lzGGfsj5bOhcNfvSnPYjouDaZDUlKi-mtZ3i0Pr055zj_aItep_ztLOhHH6T8QERZ_baZvneV-9ICs_Bdwm141MxI_51LL1Ni3JrrLZeb5uelatKbmF7Q_IU"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                alert("Profile Updated");
                // dispatch({ type: types.CANDIDATE_EDUCATION_ADDED, message: "Education Added" })
                // setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
            .catch((error) => {
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const updateSkills = (skills) => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.post(BASE_URL + "/api/candidate/UpdateSkills", {
            Skills: skills
        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer RqP6RAkdaAvZrlIJxb0npCeKkui0npuZVGcShAXrgOqYuXqFWXod26O5evMjJwsABWWTa4a6fp1vxHOGPT8qmHrGV_2kPC7xEeH8-nYZ4pq7jyM-fNkXJCtEU4dVhdVJGsaciOr-vBiGZxDFJ3Glh0cElxTSpY0Hoy9bIBXaOm6DFrRfWpzmM81P_5OGYap8kqn7Fyxki3yzm0DpfAcJplYkHBapT_djrXKAsT4KSaONq1tJjNNblS13M5ifAvQcK3-NXlet-_m8UtvJhyVh5aUP4VeMfPPV3qQhyotZcx59uEPzcP7uGazSMrcFXzuVX3EnmyL9VsCg2ddPi8wMUuMU-P2PL0thqlHG6BMfaneqNr1ULAKN4IFh5meUi8xZy_5FhICkszo3Ox8Ee1eoyk-Kev8CBLd0hfWnie4zSQIS1lSYX47Qc4AqvLPvEVPHRFcJWNObfVz8vtYDJczG7NSwB40Jsx7F-3ekJ32eILEMDpaHbU1DLGQwsCid7cI4MHs1aN3QwiJfs30xNQl5kwuQsfH8erCgJ5Un47C0NxxVP0eT_lW0bJObEmN-DJ_G"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                alert("Skills Updated")
            })
            .catch((error) => {
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const updateResume = (resume) => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.post(BASE_URL + "/api/candidate/UploadResume", {
            file: resume
        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer RqP6RAkdaAvZrlIJxb0npCeKkui0npuZVGcShAXrgOqYuXqFWXod26O5evMjJwsABWWTa4a6fp1vxHOGPT8qmHrGV_2kPC7xEeH8-nYZ4pq7jyM-fNkXJCtEU4dVhdVJGsaciOr-vBiGZxDFJ3Glh0cElxTSpY0Hoy9bIBXaOm6DFrRfWpzmM81P_5OGYap8kqn7Fyxki3yzm0DpfAcJplYkHBapT_djrXKAsT4KSaONq1tJjNNblS13M5ifAvQcK3-NXlet-_m8UtvJhyVh5aUP4VeMfPPV3qQhyotZcx59uEPzcP7uGazSMrcFXzuVX3EnmyL9VsCg2ddPi8wMUuMU-P2PL0thqlHG6BMfaneqNr1ULAKN4IFh5meUi8xZy_5FhICkszo3Ox8Ee1eoyk-Kev8CBLd0hfWnie4zSQIS1lSYX47Qc4AqvLPvEVPHRFcJWNObfVz8vtYDJczG7NSwB40Jsx7F-3ekJ32eILEMDpaHbU1DLGQwsCid7cI4MHs1aN3QwiJfs30xNQl5kwuQsfH8erCgJ5Un47C0NxxVP0eT_lW0bJObEmN-DJ_G"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                alert("Resume Updated")
            })
            .catch((error) => {
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const updatePortfolio = (portfolio, description) => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.post(BASE_URL + "/api/candidate/UploadPortfolio", {
            file: portfolio,
            Description: description
        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer RqP6RAkdaAvZrlIJxb0npCeKkui0npuZVGcShAXrgOqYuXqFWXod26O5evMjJwsABWWTa4a6fp1vxHOGPT8qmHrGV_2kPC7xEeH8-nYZ4pq7jyM-fNkXJCtEU4dVhdVJGsaciOr-vBiGZxDFJ3Glh0cElxTSpY0Hoy9bIBXaOm6DFrRfWpzmM81P_5OGYap8kqn7Fyxki3yzm0DpfAcJplYkHBapT_djrXKAsT4KSaONq1tJjNNblS13M5ifAvQcK3-NXlet-_m8UtvJhyVh5aUP4VeMfPPV3qQhyotZcx59uEPzcP7uGazSMrcFXzuVX3EnmyL9VsCg2ddPi8wMUuMU-P2PL0thqlHG6BMfaneqNr1ULAKN4IFh5meUi8xZy_5FhICkszo3Ox8Ee1eoyk-Kev8CBLd0hfWnie4zSQIS1lSYX47Qc4AqvLPvEVPHRFcJWNObfVz8vtYDJczG7NSwB40Jsx7F-3ekJ32eILEMDpaHbU1DLGQwsCid7cI4MHs1aN3QwiJfs30xNQl5kwuQsfH8erCgJ5Un47C0NxxVP0eT_lW0bJObEmN-DJ_G"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                alert("Resume Updated")
            })
            .catch((error) => {
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const ChangePassword = (oldPass, pass, confirmPass) => {
    return (dispatch, store) => {
        dispatch({ type: types.AUTH_LOADING })

        axios.post(BASE_URL + "/api/Account/ChangePassword", {
            OldPassword: oldPass,
            NewPassword: pass,
            ConfirmPassword: confirmPass
        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer RqP6RAkdaAvZrlIJxb0npCeKkui0npuZVGcShAXrgOqYuXqFWXod26O5evMjJwsABWWTa4a6fp1vxHOGPT8qmHrGV_2kPC7xEeH8-nYZ4pq7jyM-fNkXJCtEU4dVhdVJGsaciOr-vBiGZxDFJ3Glh0cElxTSpY0Hoy9bIBXaOm6DFrRfWpzmM81P_5OGYap8kqn7Fyxki3yzm0DpfAcJplYkHBapT_djrXKAsT4KSaONq1tJjNNblS13M5ifAvQcK3-NXlet-_m8UtvJhyVh5aUP4VeMfPPV3qQhyotZcx59uEPzcP7uGazSMrcFXzuVX3EnmyL9VsCg2ddPi8wMUuMU-P2PL0thqlHG6BMfaneqNr1ULAKN4IFh5meUi8xZy_5FhICkszo3Ox8Ee1eoyk-Kev8CBLd0hfWnie4zSQIS1lSYX47Qc4AqvLPvEVPHRFcJWNObfVz8vtYDJczG7NSwB40Jsx7F-3ekJ32eILEMDpaHbU1DLGQwsCid7cI4MHs1aN3QwiJfs30xNQl5kwuQsfH8erCgJ5Un47C0NxxVP0eT_lW0bJObEmN-DJ_G"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                dispatch({ type: types.AUTH_PASSWORD_CHANGED })
                alert("Password Changed")
            })
            .catch((error) => {
                dispatch({ type: types.AUTH_ERROR, message: error.message })

                // setTimeout(() => dispatch({ type: types.AUTH_RESET_ERROR }), 5000)
            })
    }
}

export const applyForJob = (id) => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.get(BASE_URL + "/api/candidate/apply?jobid=" + id, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer 02CYK1HtqJtInNJ6jDbc2rD930wrT64D9wCaj-5b_I-QS8E2AvrUOa5TJgTJm2LCw9cdni1POHHdh4xM3WFxo40Fx_okAjM4S4O7u9-I5pXEWZT50QIdwh_oe0XPgvT8KadLSGRKxgRetQnybIpAlH_copZYvHHA06N-2hCNNKj1F6OnXgJUQiw0KhbshGj5OFOczaSX0sMhxaXAX80JX7H9UuBVZNVPuHta7UzlwIT9QVgBfqeP7dpToWrq6zaLiK5lWSmd3etG2tyjkXHZjfba00o3mJUK_IInd0CJV64pvMUjEYqAfEpImUtNA5Xs-w_rl907SM4blx_2SeqOVJ3azyBYCCS2AXGH4A_pQUt-vuil0hOj9ZC9sTkPnDz-NeK1EWGd7g8gpL36DlVD3zOnwBkVqDRK-uboSbRF-wl3gnLyo7vsAqwFdUe7IWfrv1TpvOfSWRR8pq13q3Dh744v7pksRuPOFRA6KY2QtHx-Fuxgm7NQkzn8IlaMjE-tdnPN5b9ciQbedjTXQZTuDDxlgDJdzFXott0wh7gUH7fO2mheVlLM_hsl-oNaqQsE"
            }
        })
            .then((response) => {
                console.log("Profile : ", response.data)
                if (response.data.result == 'failure') {
                    dispatch({ type: types.CANDIDATE_ERROR, message: response.data.error })
                }
                else {
                    dispatch({ type: types.CANDIDATE_ERROR, message: "Applied Successfully" })
                }

                // dispatch({ type: types.AUTH_PROFILE_FETCHED, profile: response.data.profile })
            })
            .catch((error) => {

                console.log("error: ", error.message)
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                // setTimeout(() => dispatch({ type: types.AUTH_RESET_ERROR }), 5000)
            })
    }
}

export const deleteResume = () => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.post(BASE_URL + "/api/candidate/DeleteResume", {

        }, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer 7dfs0t_Pk1ekqVtHV_tLQtepZmZU-jsZLUzgT3pCLdFaCh66qv4mQdSm3evROMjt4AFeCshoiNFymYe0X56rwNzsdgwW36AWD_0CKW5f_D1Bn36np9Z7eh1d892AVbC3bNrlWLTJpd8IVmo1cRa5Kdgh7e9CHmDSqJ4CORfRP_63ZTkqletrgzqAyr6OVWCL7bBeBwE3W4x7d0_YxzP3CDye2Ai1i1jgn8cCsH2uIBkZ3msw0uStv3i4LutZTzyw39a5eNl0gkt-9V94hJpZKLuf8lw7WUqQZr8pxmnJhg7gybsdBegMyVrdqgV75GX6UPePMbk0B54TJo4F4TuZJTZ7wJF0tvxgkihScBVlzraLu95HBt9WHT-tD8RRS38g8WcDJVHdNHEuqRRrcpMLjXfCGoxS8K7JJX63iVjDD75kECQ0kRL7fHHmoPYfpHc341wpJjL_lzGGfsj5bOhcNfvSnPYjouDaZDUlKi-mtZ3i0Pr055zj_aItep_ztLOhHH6T8QERZ_baZvneV-9ICs_Bdwm141MxI_51LL1Ni3JrrLZeb5uelatKbmF7Q_IU"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                alert("Resume Deleted")
                // dispatch({ type: types.CANDIDATE_EDUCATION_ADDED, message: "Education Added" })
                // setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
            .catch((error) => {
                dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}

export const acceptInvitation = (id) => {
    return (dispatch, store) => {
        dispatch({ type: types.CANDIDATE_LOADING })

        axios.get(BASE_URL + "/api/candidate/AcceptInvitation?id=" + id, {
            headers: {
                Authorization: "bearer " + store().auth.token
                // Authorization: "Bearer GD14fLiO27Ty0HRbblZNwDjvJxbfYqneDMlly7T9fP-aYcXaiAnKOQXkLZpiOJ-OSXweuvVYGd8tRR-sjaVa4EJ2xA0B_vqQFZaB6yvZKmK2a3Q9W1gXcEGwrwWFANEWWfqAk2YUKDtptMNJURn5FLiNY0hZ4ldyuxeEUsA-VSCJuoc1Y73x_OQLoG3YPLoSxtp0pa5P3ba7nVoDD1f5U0y_MHrR85-HQnqDs3la61f_8p_MTAeuJuPfyOvZdOvkAWvaNwXQlDJenQvfHQU4RH--q2QTRpbcFtxq3QMNRvaNZ8kJW2RC2lqkhDUgWvAd-0bH9NuKpMOom1dZiHRBuFxv2O2rtNdZUDc7PX6Nkvd8cKxWdf3YNWUDjNL5ges10_EHYd3D-S86e2NrG1llHol6qfpZObBqdvnzA2jhoBkGuByr0EGt_lVMcosQu61k_lkcG_EbwRr3B10Rbbu32prM-MTfhznzLTjlSbs5xOIzf06UJKkVg1J8kkdVjb7bnpgaGrS26EQ_IWf7c-_kJvk7oA28_6Yy8hhSXblak-ln8LmtTtHDTprE0gZFBFdY"
            }
        })
            .then((response) => {
                console.log("Response : ", response.data)
                dispatch({
                    type: types.CANDIDATE_INVITATION_FETCHED, invitations: store().candidate.invitations.map((item) => {
                        if (item.InviteId == id) {
                            return {
                                ...item,
                                Status: 'Accepted',
                                // RoomKey: 'room' + id
                            }
                        }
                        else {
                            return {
                                ...item
                            }
                        }
                    })
                })

            })
            .catch((error) => {

                // console.log("error: ", job)
                // dispatch({ type: types.CANDIDATE_ERROR, message: error.message })

                // setTimeout(() => dispatch({ type: types.CANDIDATE_RESET_ERROR }), 5000)
            })
    }
}




export const resetModal = () => {
    return (dispatch) => {
        dispatch({ type: types.CANDIDATE_RESET_ERROR })
    }
}

export const selectJob = (job) => {
    return (dispatch) => {
        dispatch({ type: types.CANDIDATE_SELECT_JOB, job: job })
    }
}

export const applyJobFilter = (jobs) => {
    return (dispatch) => {
        dispatch({ type: types.CANDIDATE_APPLY_JOB_FILTER, jobs: jobs })
    }
}