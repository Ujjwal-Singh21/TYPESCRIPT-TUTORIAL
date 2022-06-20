import { useState } from 'react'

export const LoggedIn = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  const handleLogOut = () => {
    setIsLoggedIn(false);
  }

  return (
    <div>
      <h2> User is currently - { isLoggedIn ? 'LoggedIn' : 'LoggedOut' } </h2>
      <button onClick={handleLogin}> LogIn </button>
      <button onClick={handleLogOut}> LogOut </button>
    </div>
  )
}
