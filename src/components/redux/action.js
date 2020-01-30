export const ADD_USER = "ADD_USER"
export const GET_USER = "GET_USER"

//action creator 
export const addUser = (user) => {
  console.log(user, "<---------------------action")
  return {
    type: ADD_USER,
    payload: user
  }
}