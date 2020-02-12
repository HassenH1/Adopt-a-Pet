import React, { useState, useEffect } from 'react'
import { Page, One, Two, Outside } from "./styled"

function Showpage(props) {
  const [pet, setPet] = useState()

  // const fetchPet = async () => {
  //   const data = await fetch("http://localhost:8000/")
  // }

  return (
    <Page>
      <Outside>
        <One>
          <h1>Image here</h1>
        </One>
        <Two>
          <h1>Info here</h1>
          <h3>{props.match.params.id}</h3>
        </Two>
      </Outside>
    </Page>
  )
}

export default Showpage