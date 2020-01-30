import React, { useState } from 'react'
import { Form } from "./styled"
import { connect } from 'react-redux'
import { addUser } from '../redux/action'

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
    <div style={{ height: "100%", margin: "0 auto", textAlign: "center" }}>
      <Form onSubmit={handleSubmit}>
        <h3>SignUp</h3>
        <label>Username</label>
        <input placeholder="username" onChange={handleInput} name="username" value={input.username} type="username" />
        <label>E-mail</label>
        <input placeholder="email" onChange={handleInput} name="email" value={input.email} type="email" />
        <label>Password</label>
        <input placeholder="password" onChange={handleInput} name="password" value={input.password} type="password" />
        <br />
        <button>Submit</button>
        <div style={{ textAlign: "center", color: "red" }}>{error}</div>
      </Form>
      {
        props.user
          ? <div>
            <h3>{props.user.username}</h3>
            <h3>{props.user.email}</h3>
            <h3>{props.user.password}</h3>
          </div>
          : ""
      }
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addingUser: input => dispatch(addUser(input))
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)