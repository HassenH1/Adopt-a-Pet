import React, { useEffect } from 'react'
import { BackgroundColor } from "./styled"
import Pets from "../Pets"
import { connect } from 'react-redux'
import PetsWhenSignedIn from "../PetsWhenSignedIn"
import { addUser } from '../redux/action'

function Home(props) {
  useEffect(() => {
    //I have to keep switching here from null to "" just to make it work
    // if (props.user === "") {
      // const user = localStorage.getItem("user")
      // props.addingUser(JSON.parse(user))
    // }
    if (localStorage.getItem("user")) {
      const user = localStorage.getItem("user")
      props.addingUser(JSON.parse(user))
    }
  }, [])

  return (
    <BackgroundColor>
      {
        props.user.username
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