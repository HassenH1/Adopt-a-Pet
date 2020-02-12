import React from 'react'
import { Page, One, Two, Outside } from "./styled"

function Showpage() {
  return (
    <Page>
      <Outside>
        <One>
          <h1>Image here</h1>
        </One>
        <Two>
          <h1>Info here</h1>
        </Two>
      </Outside>
    </Page>
  )
}

export default Showpage
