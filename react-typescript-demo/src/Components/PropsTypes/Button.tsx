import React from 'react'

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}

export const Button = (props: ButtonProps) => {
  return (
    <div>
      <button onClick={(event) => props.handleClick(event, 2)}> Click Button </button>
    </div>
  )
}

// -> The event is automatically injected. You don't have to do event => () unless you want to pass in a second argument to the function.
// Hence if there is only event needs to be passed we can simply write it as,
// -> onClick={props.handleClick}
// And if there are more parameters needs to be passed we can simply write it as,
// -> onClick={(event) => props.handleClick(event, 2)}