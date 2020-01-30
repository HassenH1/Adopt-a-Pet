import { ADD_USER } from "./action"

const initialUser = {
  user: ""
}

const userReducer = (state = initialUser, action) => {
  if(action.type === ADD_USER){
    return {
      user: action.payload
    }
  }
  console.log(state, "<----------state from reducer")
  return state
}

export default userReducer