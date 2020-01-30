import React from 'react'
import { withRouter } from 'react-router-dom'
import { NLink, Div, Links } from './styled'

function NavBar() {
  return (
    <NLink>
      <Div>
        <div>
        <Links href="/">Home</Links>
        </div>
        <div>
          Adopt-A-Pet
        </div>
        <div style={{width: "90px"}}>
          <Links href="/signup">SignUp</Links>
          <Links href="/login">Login</Links>
          {/* <Links href="">Logout</Links> */}
        </div>
      </Div>
    </NLink>
  )
}

export default withRouter(NavBar)