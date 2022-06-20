import React from 'react'

type ContainerProps = {
  style: React.CSSProperties
}

export const Container = (props: ContainerProps) => {
  return (
    <div>
      <h3 style={props.style}> Text Content if needed can be written here </h3>
    </div>
  )
}
