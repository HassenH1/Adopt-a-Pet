import styled from "styled-components"

export const Body = styled.div`
  height: 100vh;
  background-image: url(https://images.unsplash.com/photo-1555325084-b068599743c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2989&q=80);
  margin: 0;
  background-repeat: no-repeat, repeat;
  background-position: 405px;
  background-size: cover;
  width: 100vw;
`

export const Around = styled.div`
  padding-top: 5rem;
`

export const HeaderName = styled.h1`
  border: 1px solid whitesmoke;
  border-radius: 25px;
  text-align: center;
  margin: 0 auto;
  width: 35rem;
  height: 80vh;
`

export const Div = styled.div`
  border-radius: 23px 23px 0px 0px;
  background: linear-gradient(to right, #ec6f66, #f3a183);
  height: 50vh;
`

export const Yeah = styled.div`
  background: white;
  border-radius: 0px 0px 25px 25px;
  height: 30vh;
  position: relative;
  bottom: 3.4rem;
`

export const Btn = styled.button`
  height: 3rem;
  width: 15rem;
  border-radius: 25px;
  font-size: 15px;
  position: relative;
  bottom: 2rem;
  background: white;
  color: #ec6f66;
  z-index: 1;
  border: none;
  box-shadow: 0 5px 20px 0 black;
  border: none;
  outline: none;
  &:hover{
    background-color: whitesmoke;
    cursor: pointer;
  }
  &:active{
    background-color: whitesmoke;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`