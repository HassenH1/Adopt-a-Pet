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
left: 35rem;
right: 0;
padding: 10rem;
`

export const Form = styled.form`
  border-radius: 15px 50px; 
  text-align: center;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 22rem;
  margin: 0 auto;
  background: whitesmoke;
  box-shadow: 5px 10px 8px 10px #888888;
`

export const Inputs = styled.input`
  padding: 1rem;
`

export const Button = styled.button`
  background: white;
  padding: 1rem;
  border-radius: 50px;
  &:hover {
    background: linear-gradient(to right, #ba5370, #f4e2d8);
    color:white;
    transition: background 1000ms linear;
  }
`