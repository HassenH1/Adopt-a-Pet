import { ADD_USER, CLEAR_USER, STORE_PET } from "./action"

const initialUser = {
  user: ""
}

const userReducer = (state = initialUser, action) => {
  if (action.type === ADD_USER) {
    return {
      user: action.payload
    }
  }
  if(action.type === CLEAR_USER) {
    return {
      user: ""
    }
  }
  if(action.type === STORE_PET){
    console.log("hittin in the redux side")
    return {

    }
  }
  return state
}

export default userReducer