type OptionalGreetProps = {
  name: string
  msgCount?: number // setting it as optional using ?
  isLoggedIn: boolean
}

export const OptionalGreet = (props: OptionalGreetProps) => {

  // Giving a default value to msgCount props because it is optional.
  const { msgCount = 0 } = props;

  return (
    <div>
        {
          props.isLoggedIn ? 
          <h2>  Hello {props.name}, You Have {msgCount} Unread Messages! </h2> :
          <h2>  Welcome Guest </h2>
        }
    </div>
  )
}
