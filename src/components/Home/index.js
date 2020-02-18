import React, { useEffect } from 'react'
import { BackgroundColor } from "./styled"
import Pets from "../Pets"
import { connect } from 'react-redux'
import PetsWhenSignedIn from "../PetsWhenSignedIn"
import { addUser } from '../redux/action'

function Home({ addingUser, user}) {

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = localStorage.getItem("user")
      addingUser(JSON.parse(user))
    }
  }, [addingUser])

  return (
    <BackgroundColor>
      {
        user.username
          ? <PetsWhenSignedIn />
          : <Pets />
      }
    </BackgroundColor>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addingUser: input => dispatch(addUser(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)