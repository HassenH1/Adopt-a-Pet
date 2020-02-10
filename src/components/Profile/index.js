import React from 'react'
import { connect } from 'react-redux'
import { Body } from './styled'

function Profile(props) {
  return (
    <div>
      <h1>Here is a Profile</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)