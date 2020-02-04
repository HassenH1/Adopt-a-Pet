import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { compose } from 'redux'
import Swipeable from "react-swipy"
import Button from "../Button";
import Card from "../Card";

const wrapperStyles = { position: "relative", width: "350px", height: "250px", margin: "0 auto", paddingTop: "5rem" };

const actionsStyles = {
  display: "flex",
  justifyContent: "space-evenly",
  marginTop: 250,
};

function PetsWhenSignedIn(props) {
  const [data, setData] = useState({})
  let a = 0

  const fetchingData = async () => {
    console.log("does it hit again here?")
    const data = await fetch("http://localhost:8000/", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    const dataJson = await data.json()
    setData({ ...dataJson })
  }

  useEffect(() => {
    a++
    console.log(a, "<----------------counting how many times its going off")
    fetchingData()
  }, [])

  const remove = () => {
    setData((data) => (
      { animals: [...data.animals.slice(1, data.animals.length)] }
    ));
  }
  return (
    <>
      {
        props.user.username
          ? <h3 style={{ left: "0", lineHeight: "200px", marginTop: "-100px", position: "absolute", textAlign: "center", top: "15%", width: "100%", fontSize: "25px" }}>Welcome {props.user.username}!</h3>
          : <h3 style={{ left: "0", lineHeight: "200px", marginTop: "-100px", position: "absolute", textAlign: "center", top: "15%", width: "100%", fontSize: "25px" }}>Welcome</h3>
      }
      <div>
        <div style={wrapperStyles}>
          {data.animals && data.animals.length > 0 ? (
            <div style={wrapperStyles}>
              <Swipeable
                buttons={({ left, right }) => (
                  <div style={actionsStyles}>
                    <Button onClick={left}><i className="fa fa-times" style={{ color: "red", fontSize: "2rem" }}></i></Button>
                    <Button onClick={right}><i className="fa fa-heart" style={{ color: "pink", fontSize: "1.5rem" }}></i></Button>
                  </div>
                )}
                onAfterSwipe={remove}
              >
                <Card>
                  {
                    data.animals && data.animals[0].photos.length === 0
                      ? <div>No Image Available</div>
                      : (
                        <NavLink exact to={`/animal/${data.animals[0].id}`}><img src={data.animals[0].photos[0].full} alt="animals" style={{
                          maxWidth: "100%",
                          maxHeight: "100%",
                          objectFit: "fill",
                          backgroundSize: "cover", backgroundPosition: "center"
                        }} /></NavLink>)
                  }
                </Card>
              </Swipeable>
              {data.animals.length > 1 && <Card zIndex={-1}>{data.animals[1].type}</Card>}
            </div>
          ) : (
            <div>
              {() => fetchingData()}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps)
)(PetsWhenSignedIn)