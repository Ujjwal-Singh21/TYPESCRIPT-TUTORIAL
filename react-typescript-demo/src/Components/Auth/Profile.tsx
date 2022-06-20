export type ProfileProps = {
  name: string
}

export const Profile = ({ name }: ProfileProps) => {
  return (
    <div>
      <h2> Private profile of the User - {name} </h2>
    </div>
  )
}
