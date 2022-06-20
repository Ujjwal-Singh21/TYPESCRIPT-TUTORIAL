import React from 'react'

type InputProps = {
  value: string
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input = (props: InputProps) => {
  
  // If changeHandler was defined within the component itself:
  //----------------------------------------------------------
  // const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('Change Event', event)
  // }

  return (
    <div>
      <input type='text' value={props.value} onChange={props.handleChange} />
      {/* <input type='text' value={props.value} onChange={handleInputChange} /> */}
    </div>
  )
}
