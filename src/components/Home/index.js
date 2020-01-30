import React from 'react'
import { connect } from 'react-redux'
import { BackgroundColor } from "./styled"

function Home(props) {
  return (
    <BackgroundColor>
      {
        props.user
          ? <h3>{props.user.username}</h3>
          : ""
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