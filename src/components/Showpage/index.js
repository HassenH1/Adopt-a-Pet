import React, { useState, useEffect } from 'react'
import { Page, One, Two, Outside, Three } from "./styled"
import { withRouter } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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

  const images = pet && pet.animal.photos.map((elem) => {
    return (
      <div>
        <img src={elem.full} alt="pet" />
      </div>
    )
  })

  return (
    <Page>
      <Three>
        <button onClick={() => props.history.goBack(+1)} >Back</button>
      </Three>
      <Outside>
        <One>
          <Carousel autoPlay
            showArrows={true}
            dynamicHeight={false}
            swipeable={true}
            showStatus={true}
          >
            {images}
          </Carousel>
        </One>
        <Two>
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