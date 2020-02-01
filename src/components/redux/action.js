export const ADD_USER = "ADD_USER"
export const REQUEST_USERDATA = "REQUEST_USERDATA"
export const GETTING_DATA = "GETTING_DATA"
export const GETTING_DATA_ERROR = "GETTING_DATA_ERROR"


//action creator 
export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}

export const requestingData = () => {
  return {
    type: REQUEST_USERDATA
  }
}

export const gettingData = (json) => {
  return {
    type: GETTING_DATA,
    data: json
  }
}

export const gettingDataErr = (error) => {
  return {
    type: GETTING_DATA_ERROR,
    data: error
  }
}

export const fetchingData = () => {
  return dispatch => {
    dispatch()
  }
}