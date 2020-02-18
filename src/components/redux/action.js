export const ADD_USER = "ADD_USER"
export const CLEAR_USER = "CLEAR_USER"

//action creator 
export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}

export const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}
