import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addUser } from '../redux/action'
import { Background, Form, Inputs, Button, FormMoving } from "./styled"

function Signup(props) {

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
          <h3>Sign Up</h3>
          <label>Username</label>
          <Inputs placeholder="username" onChange={handleInput} name="username" value={input.username} type="username" />
          <label>E-mail</label>
          <Inputs placeholder="email" onChange={handleInput} name="email" value={input.email} type="email" />
          <label>Password</label>
          <Inputs placeholder="password" onChange={handleInput} name="password" value={input.password} type="password" />
          <br />
          <Button>Submit</Button>
          <div style={{ textAlign: "center", color: "red" }}>{error}</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)