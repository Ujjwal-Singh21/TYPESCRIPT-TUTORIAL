//Destructuring props in function parameter

type GreetProps = {
  name: string
  msgCount: number
  isLoggedIn: boolean
}

export const GreetTwo = ({name, msgCount, isLoggedIn}: GreetProps) => {
  return (
    <div>
        {
          isLoggedIn ? 
          <h2> Hello {name}, You Have {msgCount} Unread Messages! </h2> :
          <h2> Welcome Guest </h2>
        }
    </div>
  )
}
