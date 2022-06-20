import { PersonProps } from "./Person.types"

export const PersonTwo = (props: PersonProps) => {
  return (
    <div>
      <h3>
        Name is - {props.name.firstName} {props.name.lastName}
      </h3>
    </div>
  )
}
