import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
  
  // make angle brackets after useState and specify both current and future value types it need to hold
  const [user, setUser] = useState<AuthUser | null>(null)

  const handleLogIn = () => {
    setUser({
      name: 'Vishwas',
      email: 'Vishwas@gmail.com'
    })
  }

  const handleLogOut = () => {
    setUser(null)
  }

  return (
    <div>
      <h2> User Name is : {user?.name} </h2>
      <h2> User email is : {user?.email} </h2>

      <button onClick={handleLogIn}> LogIn </button>
      <button onClick={handleLogOut}> LogOut </button>
    </div>
  )
}
