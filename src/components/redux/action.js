export const ADD_USER = "ADD_USER"

//action creator 
export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}

