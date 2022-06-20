type PersonProps = {
  name: {
    firstName: string
    lastName: string
  }
}

export const Person = (props: PersonProps) => {
  return (
    <div>
      <h3>
        Name is - {props.name.firstName} {props.name.lastName}
      </h3>
    </div>
  )
}
