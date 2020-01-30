import React from 'react'
import { connect } from 'react-redux'

function Home(props) {
  return (
    <div>
      Home Components
      {console.log(props.user, "<----------------from Home")}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)