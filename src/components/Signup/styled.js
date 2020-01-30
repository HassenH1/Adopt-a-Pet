import styled from "styled-components"

export const Background = styled.div`
  background: white;
`

export const Form = styled.form`
  border: 1px solid purple;
  border-radius: 15px 50px; 
  text-align: center;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  width: 14rem;
  margin: 10rem auto;
  height: 22rem;
`

export const Inputs = styled.input`
  padding: 1rem;
`

export const Button = styled.button`
  background: white;
  padding: 1rem;
  border-radius: 50px;
  &:hover {
    background: black;
    color:white;
  }
`