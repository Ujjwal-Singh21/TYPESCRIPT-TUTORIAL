type PersonListProps = {
  namesList: {
    firstName: string
    lastName: string
  }[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {
        props.namesList.map(person => <li key = {person.firstName}> 
        {person.firstName} {person.lastName} </li>)
      }
    </div>
  )
}
