import styled from "styled-components"

export const Background = styled.div`
  height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1551730458-be400bef0161?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80);
  margin: 0;
  background-repeat: no-repeat, repeat;
  background-position: 5px;
  background-size: cover;
  width: 100vw;
`

export const FormMoving = styled.div`
position: absolute;
top:0;
bottom: 0;
left: 36rem;
right: 0;
padding-top: 9rem;
`

export const Form = styled.form`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 31rem;
  background: whitesmoke;
  box-shadow: 5px 10px 8px 10px #888888;
  align-item: center; 
  text-align: center;
  padding: 5rem;
  margin: auto;
`

export const Inputs = styled.input`
  border: none;
  border-bottom: 2px solid black;
  padding: 1rem;
  width: 18rem;
  background-color: whitesmoke;
  margin: 1rem auto;
  font-size: 1.3rem;
  ::placeholder {
    font-size: 1.3rem;
  }
`

export const Button = styled.button`
  background: white;
  padding: 1rem;
  width: 20rem;
  margin: 0 auto;
  &:hover {
    background: linear-gradient(to right, #ba5370, #f4e2d8);
    color:white;
    transition: background 1000ms linear;
  }
  `

  export const A = styled.a`
    text-decoration: none;
    color: blue;
  `