import React, { useState, createContext } from 'react'

type AuthUser = {
  name: string
  email: string
}

type UserContextProviderProps = {
  children: React.ReactNode
}

type UserContextTypeProps = {
  user: AuthUser | null
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

// for User :
// export const UserContext = createContext<UserContextType | null>(null)

// for User2 :
export const UserContext = createContext({} as UserContextTypeProps)

export const UserContextProvider = (props: UserContextProviderProps) => {
  
  const [user, setUser] = useState<AuthUser | null>(null)

  return (
    <div>
      <UserContext.Provider value={{ user: user, setUser: setUser }}>
        {props.children}
      </UserContext.Provider>
    </div>
  )
}
