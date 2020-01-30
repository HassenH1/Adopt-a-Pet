import styled from "styled-components"
import { NavLink } from "react-router-dom"

export const NLink = styled.nav`
  width: 97.8vw;
  background-color: whitesmoke;
  padding: 16px;
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
`
