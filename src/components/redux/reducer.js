import { ADD_USER, CLEAR_USER, STORE_PET } from "./action"

const initialUser = {
  user: "",
  pet: []
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
    console.log(action.payload, ",---------------------------is this it?")
    console.log(state.pet, "<-----------------------------------------pet state does it exists")
  }
  return state
}

export default userReducer