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
      const success = await fetch("http://localhost:8000/signup", {
        method: "POST",
        body: JSON.stringify(input),
        headers: {
          "Content-Type": "application/json"
        }
      })
      const parsedSuccess = await success.json()
      //local storage
      localStorage.setItem('user', JSON.stringify(input))
      //redux dispatch
      console.log(input, "<------------------------------------------------------input for sign up")
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
          <Inputs placeholder="Username" onChange={handleInput} name="username" value={input.username} type="username" />
          <Inputs placeholder="Email" onChange={handleInput} name="email" value={input.email} type="email" />
          <Inputs placeholder="Password" onChange={handleInput} name="password" value={input.password} type="password" />
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