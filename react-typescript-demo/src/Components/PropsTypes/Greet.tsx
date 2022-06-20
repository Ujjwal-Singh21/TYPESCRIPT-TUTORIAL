type GreetProps = {
  name: string
  msgCount: number
  isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
  return (
    <div>
        {
          props.isLoggedIn ? 
          <h2> Hello {props.name}, You Have {props.msgCount} Unread Messages! </h2> :
          <h2> Welcome Guest </h2>
        }
    </div>
  )
}
