import { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

export const Box = () => {
  
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
        UseContext Hook with TypeScript
      </h2>
    </div>
  )
}
