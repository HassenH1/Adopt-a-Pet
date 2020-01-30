import React from 'react'
import { withRouter } from 'react-router-dom'
import { NLink, Div, Links } from './styled'

function NavBar() {
  return (
    <NLink>
      <Div>
        <div>
        <Links exact to="/">Home</Links>
        </div>
        <div>
          Adopt-A-Pet
        </div>
        <div style={{width: "90px"}}>
          <Links exact to="/signup">SignUp</Links>
          <Links exact to="/login">Login</Links>
          {/* <Links href="">Logout</Links> */}
        </div>
      </Div>
    </NLink>
  )
}

export default withRouter(NavBar)