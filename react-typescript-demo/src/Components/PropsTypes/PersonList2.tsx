// type PersonListProps = {
//   namesList: {
//     firstName: string
//     lastName: string
//   }[]
// }

import { Name } from "./Person.types"

type PersonListProps = {
  namesList: Name[]
}

export const PersonListTwo = (props: PersonListProps) => {
  return (
    <div>
      {
        props.namesList.map(person => <li key = {person.firstName}> 
        {person.firstName} {person.lastName} </li>)
      }
    </div>
  )
}
