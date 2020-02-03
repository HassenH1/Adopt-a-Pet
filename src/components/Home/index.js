import React from 'react'
import { BackgroundColor } from "./styled"
import Pets from "../Pets"

function Home(props) {

  return (
    <BackgroundColor>
      <Pets />
    </BackgroundColor>
  )
}


export default Home