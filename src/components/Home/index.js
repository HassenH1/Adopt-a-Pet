import React, { useState } from 'react'
import { connect } from 'react-redux'
import { BackgroundColor } from "./styled"
import Swipeable from "react-swipy"
import Button from "../Button";
import Card from "../Card";

const wrapperStyles = { position: "relative", width: "350px", height: "250px", margin: "0 auto", paddingTop: "5rem" };

const wrapperStylesEnd = { position: "relative", width: "350px", height: "250px", margin: "100px auto" };

const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 250,
};

function Home(props) {
  const [cards, setCards] = useState(["hassen", "life", "trash"])

  const remove = () => {
    setCards(cards.slice(1, cards.length))
  }

  return (
    <BackgroundColor>
      <div>
        <div style={wrapperStyles}>
          {cards.length > 0 ? (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ left, right }) => (
                  <div style={actionsStyles}>
                    <Button onClick={left}>Reject</Button>
                    <Button onClick={right}>Accept</Button>
                  </div>
                )}
                onAfterSwipe={remove}
              >
                <Card>{cards[0]}</Card>
              </Swipeable>
              {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
            </div>
          ) : (
              <div style={wrapperStylesEnd}>
                <Card>Sign up to see More...</Card>
              </div>
            )}
        </div>
      </div>
    </BackgroundColor>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Home)