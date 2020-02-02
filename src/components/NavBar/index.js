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
        </div>
        {console.log(props.user, "<----------------from user in Navbar")}
        {
          props.user
            ? <div style={{ width: "90px" }}>
              <Links exact to="/profile">Profile</Links>
              <Links exact to="logout">Logout</Links>
            </div>
            : <div style={{ width: "90px" }}>
              <Links exact to="/signup">SignUp</Links>
              <Links exact to="/login">Login</Links>
              {/* <Links href="">Logout</Links> */}
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

// export default withRouter(NavBar)
export default compose(
  withRouter,
  connect(mapStateToProps)
)(NavBar)