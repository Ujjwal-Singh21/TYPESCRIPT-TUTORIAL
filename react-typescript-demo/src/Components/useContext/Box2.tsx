import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const BoxTwo = () => {
  
  const theme = useContext(ThemeContext)

  return (
    <div>
      <h2
        style={{
          padding: theme.primary.padding,
          backgroundColor: theme.primary.main,
          color: theme.primary.text
        }}
      >
        UseContext Hook
      </h2>
      <h3
        style={{
          padding: theme.secondary.padding,
          backgroundColor: theme.secondary.main,
          color: theme.secondary.text
        }}
      >
        Welcome to the tutorial of React with typeScript, Here We learn about
        how we can use very famous useContext hook from React with help of
        TypeScript.
      </h3>

      <h3
        style={{
          padding: theme.extra.padding,
          backgroundColor: theme.extra.main,
          color: theme.extra.text
        }}
      >
        Context provides a way to pass data or state through the component tree
        without having to pass props down manually through each nested
        component. It is designed to share data that can be considered as global
        data for a tree of React components, such as the current authenticated
        user or theme(e.g. color, paddings, margins, font-sizes). Context API
        uses Context. Provider and Context. Consumer Components pass down the
        data but it is very cumbersome to write the long functional code to use
        this Context API. So useContext hook helps to make the code more
        readable, less verbose and removes the need to introduce Consumer
        Component. The useContext hook is the new addition in React 16.8.
        Syntax: const authContext = useContext(initialValue); The useContext
        accepts the value provided by React.createContext and then re-render the
        component whenever its value changes but you can still optimize its
        performance by using memorization. Example: Program to demonstrate the
        use of useContext Hook.
      </h3>
    </div>
  )
}
