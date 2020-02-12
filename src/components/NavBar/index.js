import React from 'react'
import { withRouter } from 'react-router-dom'
import { NLink, Div, Links } from './styled'
import { connect } from 'react-redux'
import { compose } from 'redux'

function NavBar(props) {
  return (
    <NLink>
      <Div>
        <div>
          <Links exact to="/">Home</Links>
        </div>
        <div>
          Adopt-A-Pet
          {console.log(props, "<---from navbar")}
        </div>
        {
          props.user
            ? <div style={{ width: "90px" }}>
              <Links exact to="/profile">Profile</Links>
              <Links exact to="logout">Logout</Links>
            </div>
            : <div style={{ width: "90px" }}>
              <Links exact to="/signup">SignUp</Links>
              <Links exact to="/login">Login</Links>
            </div>
        }
      </Div>
    </NLink>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(NavBar)