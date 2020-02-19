export const ADD_USER = "ADD_USER"
export const CLEAR_USER = "CLEAR_USER"
export const STORE_PET = "STORE_PET"

//action creator 
export const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user
  }
}

//////////////////////////////////i forgot what this was for
export const clearUser = () => {
  return {
    type: CLEAR_USER
  }
}
//////////////////////////////////

export const petHistory = (pet) => {
  console.log(pet, "<-----------------------------------pet from redux side")
  return {
    type: STORE_PET,
    payload: pet
  }
}