export const ADD_USER = "ADD_USER"
export const GET_USER = "GET_USER"

//action creator 
export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}