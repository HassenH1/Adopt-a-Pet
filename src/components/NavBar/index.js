import React from 'react'
import { withRouter } from 'react-router-dom'
import { NLink, Div, Links } from './styled'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Manager, Reference, Popper } from 'react-popper';

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
            : <Manager>
              <Reference>
                {({ ref }) => (
                  <div style={{ width: "90px" }}>
                    <Links exact to="/signup" ref={ref}>SignUp</Links>
                    <Links exact to="/login" ref={ref}>Login</Links>
                  </div>
                )}
              </Reference>
              <Popper placement="bottom">
                  {({ ref, style, placement, arrowProps }) => (
                    <div ref={ref} style={style} data-placement={placement}>
                      Popper Element
                      <div ref={arrowProps.ref} style={arrowProps.style}></div>
                    </div>
                  )}
              </Popper>
            </Manager>
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