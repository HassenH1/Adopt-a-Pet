import React from 'react'
import { connect } from 'react-redux'
import { BackgroundColor } from "./styled"

function Home(props) {
  return (
    <BackgroundColor>
      {
        props.user
          ? <div>
              <h3>{props.user.username}</h3>
           </div>
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