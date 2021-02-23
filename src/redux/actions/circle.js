import * as types from '../actionTypes';
import { BASE_URL } from '../../enviroments';
import axios from 'axios';
import { Circus } from '@jest/types';

export const createCircle = (circleName, contacts, image) => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_CIRCLE })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/createCircle',
        {
          id: store().signUp.user.id,
          adminName: store().signUp.user.firstName + ' ' + store().signUp.user.lastName,
          circleName: circleName,
          contacts: contacts,
          adminPhone: store().signUp.user.phone,
          // circleImage: image
        },
        config,
      )
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          // alert(response.data.circleId);
          dispatch({
            type: types.CIRCLE_CREATED,
            circleId: response.data.circleId,
          });
          dispatch(getCircles())
        } else {
          console.log(response);
          dispatch({ type: types.ERROR_CIRCLE, errorMessage: response.data.message })
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: types.ERROR_CIRCLE, errorMessage: error })
      });
  };
};





export const closeContacts = () => {
  // alert("dddd")
  return dispatch => {
    dispatch({ type: types.CLOSE_CONTACT });
  };
};





export const recievedJourney = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/get_circle_received_journeys',
        {
          id: store().signUp.user.id,
          circle_id: store().circle.circle.cId
        },
        config,
      )
      .then(response => {

        console.log(response.data);
        if (response.data.success) {
          // alert(response.data.circleId);
          getCircles()
          dispatch({ type: types.DELIVERED_FETCHED, delivered: response.data.received_journeys })
        } else {
          console.log(response);
          dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
      });
  };
};

export const circleDeliveredJourney = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/get_circle_delivered_journeys',
        {
          id: store().signUp.user.id,
          circle_id: store().circle.circle.cId
        },
        config,
      )
      .then(response => {
        console.log(response.data);
        if (response.data.success) {
          // alert(response.data.circleId);
          dispatch({ type: types.DELIVERED_FETCHED, delivered: response.data.delivered_journeys })
        } else {
          console.log(response);
          dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
        }
      })
      .catch(error => {
        console.log(error);
        dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
      });
  };
};

export const getCircleSchedules = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };

    axios.post(BASE_URL + "circle/get_circle_scheduled_journeys", {
      id: store().signUp.user.id,
      circle_id: store().circle.circle.cId
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

export const getCircleDrafts = () => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_JOURNEY })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };

    axios.post(BASE_URL + "circle/get_circle_darft_journeys", {
      id: store().signUp.user.id,
      circle_id: store().circle.circle.cId
    }, config).then(response => {
      console.log("Journey: ", response.data)
      if (response.data.success) {
        dispatch({ type: types.DRAFTS_FETCHED, drafts: response.data.draft_journeys })
      } else {
        dispatch({ type: types.ERROR_JOURNEY, errorMessage: response.data.message })
      }
    }).catch(error => {
      dispatch({ type: types.ERROR_JOURNEY, errorMessage: error })
    })
  }
}

export const acceptInvitation = (status, cId) => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/acceptCircleInvitation',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
          status: status,
          cId: cId
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          dispatch({ type: types.CIRCLE_CREATED });
        } else {
          console.log(response);
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };
};

export const acceptInvitationOneToOne = (status, cId) => {
  console.log(cId)
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/acceptOnetoOneCircleInvitation',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
          status: status,
          cId: cId
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          console.log("RESPONSE : ", response.data)
          // dispatch({ type: types.CIRCLE_CREATED });
        } else {
          console.log(response);
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };
};

export const updateImage = (image) => {
  return (dispatch, store) => {


    let formData = new FormData();
    formData.append('image', image);
    formData.append('id', store().signUp.user.id)
    formData.append("cId", store().circle.circle.cId)


    let config = {
      headers: {
        'Content-Type': "multipart/form-data",
        'Accept': "application/json",
        'Authorization': 'Bearer ' + store().signUp.user.token
      },
    };

    axios.post(BASE_URL + 'circle/updateCircleImage', formData, config).then((response) => {

      if (response.data.success) {
        console.log('value change', image.uri)

        let circle = {
          cId: store().circle.circle.cId,
          circleName: store().circle.circle.circleName,
          circleImage: image.uri,
          adminId: store().circle.circle.adminId
        }
        let updatedCircles = []
        store().circle.circles.map((item, index) => {
          if (item.circleId == circle.cId) {
            updatedCircles.push(circle)
          }
          else {
            updatedCircles.push(item)
          }
        })
        dispatch({ type: types.CIRCLE_UPDATED, circle: circle, circles: updatedCircles })
      } else {
        console.log(responseJson);
        dispatch({ type: types.ERROR_CIRCLE, message: response.data.message });
      }



    }).catch(error => {
      // alert("error")
      console.log(error);
      dispatch({ type: types.ERROR_CIRCLE, message: error });
    });
  }
};



export const getCircles = () => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/getUserCircles',
        {
          id: store().signUp.user.id,
          phone: store().signUp.user.phone,
        },
        config,
      )
      .then(response => {
        console.log('Circle Response');
        if (response.data.success) {
          dispatch({
            type: types.CIRCLES_FETCHED,
            circles: response.data.userCircles,
          });
        } else {
          console.log(response);
          // alert(response.data.message);
        }
      })
      .catch(error => {
        // alert(error);
        console.log(error);
      });
  };
};

export const getCircleData = cId => {
  return (dispatch, store) => {
    dispatch({ type: types.LOADING_CIRCLE })

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/getCircleData',
        {
          id: store().signUp.user.id,
          cId: cId,
        },
        config,
      )
      .then(response => {
        console.log(response.data)
        if (response.data.success) {
          dispatch({
            type: types.CIRCLE_DATA_FETCHED,
            circle: response.data.circleData,
          });
        } else {
          console.log(response);
          // alert(cId);
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };
};

export const getCircleMembers = (cId) => {
  return (dispatch, store) => {

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/getCircleMembers',
        {
          id: store().signUp.user.id,
          cId: store().circle.circle.cId,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          console.log(response);
          dispatch({
            type: types.CIRCLE_MEMBERS_FETCHED,
            members: response.data.users,
          });
        } else {
          console.log(response);
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };
};

export const addCircleMembers = contacts => {
  return (dispatch, store) => {

    console.log(contacts)

    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/addCircleMembers',
        {
          id: store().signUp.user.id,
          cId: store().circle.circle.cId,
          contacts: contacts,
          adminName:
            store().signUp.user.firstName + ' ' + store().signUp.user.lastName,
          circleName: store().circle.circle.circleName,
          adminPhone: store().signUp.user.phone,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          console.log(response);
          dispatch({
            type: types.CIRCLE_MEMBERS_ADDED,
          });
        } else {
          console.log(response);
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };
};

export const resetCircleCreated = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ACTION_CIRCLE_CREATED });
  };
};

export const clearCircleData = () => {
  return dispatch => {
    dispatch({ type: types.CLEAR_CIRCLE_DATA });
  };
};

export const clearCircleMember = () => {
  return dispatch => {
    dispatch({ type: types.CLEAR_CIRCLE_MEMBER });
  };
};

export const resetMemberAdded = () => {
  return dispatch => {
    dispatch({ type: types.RESET_CIRCLE_MEMBER_ADDED });
  };
};

export const UpdateCircleData = (circleName, circleImage) => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };
    axios
      .post(
        BASE_URL + 'circle/updateCircle',
        {
          id: store().signUp.user.id,
          cId: store().circle.circle.cId,
          circleName: circleName,
          circleImage: circleImage,
        },
        config,
      )
      .then(response => {
        if (response.data.success) {

          let circle = {
            cId: store().circle.circle.cId,
            circleName: circleName,
            circleImage: circleImage,
            adminId: store().circle.circle.adminId
          }

          let updatedCircles = []
          store().circle.circles.map((item, index) => {
            if (item.circleId == circle.cId) {
              updatedCircles.push(circle)
            }
            else {
              updatedCircles.push(item)
            }
          })


          dispatch({ type: types.CIRCLE_UPDATED, circle: circle, circles: updatedCircles })
        } else {
          console.log(response);
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };
};

export const deleteCircleMembers = contact => {
  return (dispatch, store) => {
    let config = {
      headers: { Authorization: 'Bearer ' + store().signUp.user.token },
    };

    axios
      .post(
        BASE_URL + 'circle/deleteCircleUser',
        {
          id: store().signUp.user.id,
          cId: store().circle.circle.cId,
          uId: contact.id
        },
        config,
      )
      .then(response => {
        if (response.data.success) {
          // console.log(response);
          let members = store().circle.members.filter((item) => item.id != contact.id)

          dispatch({
            type: types.CIRCLE_MEMBERS_FETCHED,
            members: members,
          });

        } else {
          console.log(response);
          alert(response.data.message);
        }
      })
      .catch(error => {
        alert(error);
        console.log(error);
      });
  };
};


export const resetCircleError = () => {
  return dispatch => {
    dispatch({ type: types.RESET_ERROR_CIRCLE })
  }
}
