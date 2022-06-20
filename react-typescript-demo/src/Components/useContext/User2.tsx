import { useContext } from 'react'
import { UserContext } from './UserContext'

export const UserTwo = () => {
  
  const userContext = useContext(UserContext)

  const handleLogIn = () => {
    userContext.setUser({
      name: 'Vishwas',
      email: 'Vishwas@gmail.com'
    })
  }

  const handleLogOut = () => {
    userContext.setUser(null)
  }

  return (
    <div>
      <h2> Your Name is : {userContext.user?.name} </h2>
      <h2> Your Email is : {userContext.user?.email} </h2>
      <button onClick={handleLogIn}> LogIn </button>
      <button onClick={handleLogOut}> LogOut </button>
    </div>
  )
}
