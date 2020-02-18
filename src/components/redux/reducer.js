import { ADD_USER, CLEAR_USER } from "./action"

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
  return state
}

export default userReducer