import React, { useState, useEffect } from 'react'
import { Page, One, Two, Outside, Three } from "./styled"
import { withRouter } from 'react-router-dom';

function Showpage(props) {
  const [pet, setPet] = useState()

  useEffect(() => {
    const fetchPet = async () => {
      const data = await fetch(`http://localhost:8000/animal/${props.match.params.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      const dataBack = await data.json()
      setPet({ ...dataBack })
    }
    fetchPet()
  }, [props.match.params.id])

  return (
    <Page>
      <Three>
          <button onClick={() => props.history.goBack(+1)} >Back</button>
      </Three>
      <Outside>
        <One>
          <h1>Image here</h1>
          {console.log(pet, "<------clicked pet")}
          {console.log(props.match.params.id)}
        </One>
        <Two>
          <h1>Info here</h1>
          <h3>{props.match.params.id}</h3>
        </Two>
      </Outside>
    </Page>
  )
}

export default withRouter(Showpage)