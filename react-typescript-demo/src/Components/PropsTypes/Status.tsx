type StatusProps = {
  status: 'Loading' | 'Success' | 'Error'
}

export const Status = (props: StatusProps) => {

  // Element variables approach
  let message;

  if(props.status === 'Loading') {
    message = 'Loading...'
  } else if (props.status === 'Success') {
    message = 'Data fetching is done successfully'
  } else if (props.status === 'Error') {
    message = 'Error in fetching Data'
  }

  return (
    <div>
      <h2> Status - {message} </h2>
    </div>
  )
}
