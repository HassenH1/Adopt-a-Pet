import React, { useEffect } from 'react'
import { BackgroundColor } from "./styled"
import Pets from "../Pets"
import { connect } from 'react-redux'
import PetsWhenSignedIn from "../PetsWhenSignedIn"
import { addUser } from '../redux/action'

function Home(props) {
  useEffect(() => {
    if (props.username) {
      const user = localStorage.getItem("user")
      props.addingUser(user)
    }
  }, [props])

  return (
    <BackgroundColor>
      {console.log(props, "<----------------------------------------------props is there or nah?")}
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

// console.log(props, "<------------------------------------------props here")
// const user = localStorage.getItem('user')
// console.log(user, "<----------------------------------------current user")
// props.addingUser(user)