import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../redux/action'
import { Background, Form, Inputs, Button, FormMoving, A } from "./styled"

function Login(props) {

  const [input, setInput] = useState({
    email: "",
    username: "",
    password: ""
  })

  const [error, setError] = useState()

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input.email === "" || input.username === "" || input.password === "") {
      setError("Missing cetain Values")
      setTimeout(() => {
        setError("")
      }, 5000)
      return
    }
    try {
      await fetch("http://localhost:8000/signup", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json"
        }
      })
      //redux dispatch
      props.addingUser(input)
      //clearing fields
      clearFields()
      props.history.push("/")
    } catch (err) {
      console.log(err)
    }
  }

  const clearFields = (e) => {
    setInput({
      username: "",
      email: "",
      password: ""
    })
  }

  return (
    <Background>
      <FormMoving>
        <Form onSubmit={handleSubmit}>
          <h1 style={{margin: "6rem 0 2rem 0"}}>Login</h1>
          <Inputs placeholder="Email" onChange={handleInput} name="email" value={input.email} type="email" />
          <Inputs placeholder="Password" onChange={handleInput} name="password" value={input.password} type="password" />
          <br />
          <Button>Submit</Button>
          <div style={{ textAlign: "center", color: "red", margin: "2rem" }}>{error}</div>
          <div>
            <p>Don't have an account? <A href="">Sign up</A></p>
          </div>
        </Form>
      </FormMoving>
    </Background>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addingUser: input => dispatch(addUser(input))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)