import styled from "styled-components"

export const Background = styled.div`
  background: linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c);
  height: 100%;
  padding: 27.8rem 30rem;
`

export const FormMoving = styled.div`
position: absolute;
top:0;
bottom: 0;
left: 0;
right: 0;
padding: 10rem;
`

export const Form = styled.form`
  border: 1px solid purple;
  border-radius: 15px 50px; 
  text-align: center;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  width: 14rem;
  height: 22rem;
  margin: 0 auto;
  background: antiquewhite;
  
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