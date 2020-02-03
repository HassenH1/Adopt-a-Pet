import React from 'react'
// import { connect } from 'react-redux'
// import { NavLink, withRouter } from 'react-router-dom'
// import { compose } from 'redux'
import { BackgroundColor } from "./styled"
// import Swipeable from "react-swipy"
// import Button from "../Button";
// import Card from "../Card";
import Pets from "../Pets"

// const wrapperStyles = { position: "relative", width: "350px", height: "250px", margin: "0 auto", paddingTop: "5rem" };

// const wrapperStylesEnd = { position: "relative", width: "350px", height: "250px", margin: "100px auto" };

// const actionsStyles = {
//   display: "flex",
//   justifyContent: "space-evenly",
//   marginTop: 250,
// };

function Home(props) {

  return (
    <BackgroundColor>
      <Pets />
    </BackgroundColor>
  )
}


export default Home