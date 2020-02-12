import styled from "styled-components"

export const Body = styled.div`
  height: 100vh;
  margin: 0;
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
`

export const Around = styled.div`
  margin: 3rem 0;
  padding-top: 5rem;
`

export const AnotherAround = styled.div`
  margin: 3rem 0;
  padding-top: 5rem;
  border: 1px solid red;
  width: 40vw;
`

export const HeaderName = styled.h1`
  border: 5px solid whitesmoke;
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