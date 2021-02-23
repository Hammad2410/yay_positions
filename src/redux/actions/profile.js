import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';

export const updateProfile = (
  bio,
  dob,
  mailingAddress,
  cardNo,
  firstName,
  lastName, StreetONE,
  StreetTWO,
  State,
  City,
  Country,
  Apartment,
  Zipcode,
  cardExpiry,
  cvc,
  cardExpiryMonth
) => {
  return (dispatch, store) => {

    fetch(BASE_URL + 'profile/updateProfile', {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + store().signUp.user.token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bio: bio,
        dob: dob,
        mailingAddress: mailingAddress,
        cardNo: cardNo,
        id: store().signUp.user.id,
        firstName: firstName,
        lastName: lastName,
        streetOne: StreetONE,
        streetTwo: StreetTWO,
        state: State,
        city: City,
        country: Country,
        plot: Apartment,
        zipcode: Zipcode,
        cardExpiry: cardExpiry,
        cvc: cvc,
        cardExpiryMonth: cardExpiryMonth,
      })

    }).then((response) => {
      console.log("response : ", response);
      return response.json()
    })
      .then(responseJson => {
        console.log("response ", responseJson);

        if (responseJson.success) {
          dispatch({ type: types.PROFILE_UPDATED, user: responseJson.user });
        } else {
          console.log(responseJson);
          dispatch({ type: types.ERROR_PROFILE, message: responseJson.message });
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: types.ERROR_PROFILE, message: error });
      }).done();
  };

};

export const deleteImage = () => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'profile/deleteProfileImage',
        {
          id: store().signUp.user.id,
        },
        config,
      )
      .then(response => {
        console.log(response.data);

        if (response.data.success) {
          dispatch({ type: types.DELETE_PROFILE_IMAGE, user: response.data.user });
        } else {
          dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_PROFILE, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
      });
  }
}

export const updateImage = (image) => {
  return (dispatch, store) => {

    let formData = new FormData();
    formData.append('image', image);
    formData.append('id', store().signUp.user.id)


    let config = {
      headers: {
        'Content-Type': "multipart/form-data",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
    };

    axios.post(BASE_URL + 'profile/updateImage', formData, config).then((response) => {

      if (response.data.success) {
        dispatch({ type: types.PROFILE_UPDATED, user: response.data.user });
      } else {
        console.log(responseJson);
        dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
      }

    }).catch(error => {
      // alert("error")
      console.log(error);
      dispatch({ type: types.ERROR_PROFILE, message: error });
    });
  }
};

export const updatePhone = (newPhone) => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_PROFILE });

    let config = {
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
    };

    fetch(BASE_URL + 'profile/changeNumber', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
      body: JSON.stringify({
        id: store().signUp.user.id,
        phone: store().signUp.user.phone,
        newPhone: newPhone,
      })
    }).then((response) => {
      console.log("response : ", response);
      return response.json()
    })
      .then((responseJson) => {
        console.log(responseJson)

        if (responseJson.success) {
          dispatch({ type: types.PHONE_UPDATE_CODE_SENT, phone: newPhone });
        } else {
          dispatch({ type: types.ERROR_PROFILE, message: responseJson.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        }
      }).catch(error => {
        console.log(error)
        dispatch({ type: types.ERROR_PROFILE, message: error.response });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        alert("network", error)
      }).done();

    // console.log(config, store().signUp.user.id, store().signUp.user.phone, newPhone)
    // axios
    //   .post(
    //     BASE_URL + 'profile/changeNumber',
    //     {
    //       id: store().signUp.user.id,
    //       phone: store().signUp.user.phone,
    //       newPhone: newPhone,
    //     },
    //     config,
    //   )
    //   .then(response => {
    //     console.log(response.data);

    //     if (response.data.success) {
    //       dispatch({ type: types.PHONE_UPDATE_CODE_SENT, phone: newPhone });
    //     } else {

    //       dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
    //     }
    //   })
    //   .catch(error => {
    //     console.log(error)
    //     dispatch({ type: types.ERROR_PROFILE, message: error.response });
    //     alert("network", error)
    //   });
  };
};

export const verifyNewPhone = (code) => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_PROFILE });

    // let config = {
    //   headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    // };
    // axios
    //   .post(
    //     BASE_URL + 'profile/verifyNewPhone',
    //     {
    //       id: store().signUp.user.id,
    //       phone: store().profile.phone,
    //       code: code,
    //     },
    //     config,
    //   )
    //   .then(response => {
    //     console.log(response.data);

    //     if (response.data.success) {
    //       dispatch({ type: types.PHONE_UPDATED, phone: phone });
    //     } else {

    //       // dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
    //       // setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
    //     }
    //   })
    //   .catch(error => {
    //     alert("Error")
    //     // dispatch({ type: types.ERROR_PROFILE, message: error });
    //     // setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
    //   });

    fetch(BASE_URL + 'profile/verifyNewPhone', {
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
      body: JSON.stringify({
        id: store().signUp.user.id,
        phone: store().profile.phone,
        code: code,
      })
    }).then((response) => {
      console.log("response : ", response);
      return response.json()
    })
      .then((responseJson) => {
        console.log(responseJson)

        if (responseJson.success) {
          dispatch({ type: types.PHONE_UPDATED, phone: store().profile.phone });
        } else {
          dispatch({ type: types.ERROR_PROFILE, message: responseJson.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        }
      }).catch(error => {
        console.log(error)
        dispatch({ type: types.ERROR_PROFILE, message: error.response });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        // alert("network", error)
      }).done();

  };
};


export const sendCodeToPhone = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_PROFILE });

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'profile/sendCode',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
        },
        config,
      )
      .then(response => {
        console.log(response.data);

        if (response.data.success) {
          dispatch({ type: types.RESET_CODE_SENT });
        } else {
          dispatch({ type: types.ERROR_PROFILE, message: response.data.message });
          setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
        }
      })
      .catch(error => {
        dispatch({ type: types.ERROR_PROFILE, message: error });
        setTimeout(() => dispatch({ type: types.RESET_ERROR_PROFILE }), 10000);
      });
  };
};

export const resetUpdatePhone = () => {
  return (dispatch) => {
    dispatch({ type: types.RESET_PHONE_UPDATE_CODE })
  }
}

export const resetProfileError = () => {
  return (dispatch) => {
    dispatch({ type: types.RESET_ERROR_PROFILE })
  }
}

export const resetPhoneUpdated = () => {
  return (dispatch) => {
    dispatch({ type: types.RESET_PHONE_UPDATED })
  }
}

export const updateFcmToken = (fcmToken) => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'profile/updateFcmtoken',
        {
          id: store().signUp.user.id,
          fcmToken: fcmToken,
        },
        config,
      )
      .then(response => {
        console.log("updateFcmToken", response);

      })
      .catch(error => {
        console.log("updateFcmToken", error);

      });
  };
}
