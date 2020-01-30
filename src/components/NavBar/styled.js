import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const NLink = styled.nav`
  width: 100%;
  background-color: whitesmoke;
  height: 3rem;
  box-shadow: 20px 10px 100px grey;
  position: absolute; 
  z-index: 1;
`

export const Div = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const Links = styled(NavLink)`
  padding: 1rem;
  &:hover {
    background-color: #ddd;
  }
  text-decoration: none;
  color: #FFB6C1;
  font-size: 1.2em;
  position: relative;
  top: 8px;
`