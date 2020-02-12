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
          <h3>{pet && pet.animal.name}</h3>
          <h3>{pet && pet.animal.type}</h3>
          <h3>{pet && pet.animal.breeds.primary}</h3>
          <h3>{pet && pet.animal.age}</h3>
          <h3>{pet && pet.animal.gender}</h3>
          <h3>{pet && pet.animal.description}</h3>
          <h3>{pet && pet.animal.contact.email}</h3>
          <h3>{pet && pet.animal.contact.phone}</h3>
          <h3>{pet && pet.animal.contact.address.address1}</h3>
        </Two>
      </Outside>
    </Page>
  )
}

export default withRouter(Showpage)

// animal:
// id: 45497377
// organization_id: "NJ742"
// url: "https://www.petfinder.com/dog/mickey-hold-45497377/nj/succasunna/cold-nose-warm-heart-dog-rescue-nj742/?referrer_id=c93b6d4c-91f8-4b73-8a19-c73c800d6ecd"
// type: "Dog"
// species: "Dog"
// breeds: {primary: "Labrador Retriever", secondary: "Beagle", mixed: true, unknown: false}
// colors: {primary: null, secondary: null, tertiary: null}
// age: "Baby"
// gender: "Male"
// size: "Medium"
// coat: null
// attributes: {spayed_neutered: false, house_trained: false, declawed: null, special_needs: false, shots_current: true}
// environment: {children: null, dogs: null, cats: null}
// tags: []
// name: "Mickey-HOLD"
// description: "15 beautiful puppies have arrived into the safety of our foster homes! We are unsure of their breed mix, but..."
// photos: (5) [{…}, {…}, {…}, {…}, {…}]
// status: "adopted"
// status_changed_at: "2019-08-11T19:06:20+0000"
// published_at: "2019-08-04T16:11:52+0000"
// distance: null
// contact: {email: "coldnosewarmheartdogrescue@gmail.com", phone: null, address: {…}}
// _links: {self: {…}, type: {…}, organization: {…}}