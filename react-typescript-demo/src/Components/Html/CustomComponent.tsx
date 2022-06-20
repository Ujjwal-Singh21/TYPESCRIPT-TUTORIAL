// Extracting and using the similar props from Greet Component

import React from 'react'
import { Greet } from '../PropsTypes/Greet'

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      <h1> Custom Component </h1>
        {
          props.isLoggedIn ? 
          <h2> Hello {props.name}, You Have {props.msgCount} Unread Messages! </h2> :
          <h2> Welcome Guest </h2>
        }
    </div>
  )
}
