import React from 'react'
import { connect } from 'react-redux'
import { Body, HeaderName, Around, Yeah, Div, Btn } from './styled'

function Profile(props) {
  return (
    <Body>
      <Around>
        <HeaderName>
          <Div>
            <h1 style={{margin: "0"}}>Profile</h1>
            <p>{props.user.username}</p>
          </Div>
          <Btn>Edit Username</Btn>
          <Yeah>
            <h1 style={{margin: "0"}}>Hello world</h1>
          </Yeah>
        </HeaderName>
      </Around>
    </Body>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Profile)