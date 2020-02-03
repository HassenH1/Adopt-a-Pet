import React from 'react'
import { BackgroundColor } from "./styled"
import Pets from "../Pets"
import { connect } from 'react-redux'
import PetsWhenSignedIn from "../PetsWhenSignedIn"

function Home(props) {

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

export default connect(mapStateToProps)(Home)