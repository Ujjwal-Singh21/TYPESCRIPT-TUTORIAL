import './App.css'
import { Button } from './Components/PropsTypes/Button'
import { Container } from './Components/PropsTypes/Container'
import { Heading } from './Components/PropsTypes/Heading'
import { Input } from './Components/PropsTypes/Input'
import { OptionalGreet } from './Components/PropsTypes/OptionalGreet'
import { Oscar } from './Components/PropsTypes/Oscar'
import { Person } from './Components/PropsTypes/Person'
import { PersonTwo } from './Components/PropsTypes/Person2'
import { PersonList } from './Components/PropsTypes/PersonList'
import { PersonListTwo } from './Components/PropsTypes/PersonList2'
import { Status } from './Components/PropsTypes/Status'
import { Greet } from './Components/PropsTypes/Greet'
import { GreetTwo } from './Components/PropsTypes/Greet2'
import { LoggedIn } from './Components/useState/LoggedIn'
// import { User } from './Components/useState/User'
// import { UserTwo } from './Components/useState/User2'
import { Counter } from './Components/useReducer/Counter'
import { CounterTwo } from './Components/useReducer/Counter2'
import { Box } from './Components/useContext/Box'
import { ThemeContextProviderFn } from './Components/useContext/ThemeContext'
import { BoxTwo } from './Components/useContext/Box2'
import { User } from './Components/useContext/User'
import { UserTwo } from './Components/useContext/User2'
import { UserContextProvider } from './Components/useContext/UserContext'
import { DomRef } from './Components/useRef/DomRef'
import { MutableRef } from './Components/useRef/MutableRef'
import ClassCounter from './Components/Class/ClassCounter'
import { Private } from './Components/Auth/Private'
import { Profile } from './Components/Auth/Profile'
import { List } from './Components/Generics/List'
import { List2 } from './Components/Generics/List2'
import { RandomNumber } from './Restriction/RandomNumber'
import { Toast } from './Components/TemplateLiteral/Toast'
import { CustomButton } from './Components/Html/CustomButton'
import { CustomInput } from './Components/Html/CustomInput'
import { CustomComponent } from './Components/Html/CustomComponent'
import { Text } from './Components/Polymorphic/Text'


// Object as props:
const personName = {
  firstName: 'Bruce',
  lastName: 'Wayne'
}

// An Array of objects as props:
const personList = [
  {
    firstName: 'Bruce',
    lastName: 'Wayne'
  },
  {
    firstName: 'Clarke',
    lastName: 'Kent'
  },
  {
    firstName: 'Princess',
    lastName: 'Diana'
  }
]

function App () {
  return (
    <div className='App'>
      {/* <Greet name='Vishwas' msgCount={15} isLoggedIn = {false}/> */}
      {/* <Person name = {personName}/> */}
      {/* <PersonList namesList = {personList} /> */}
      {/* <Status status = 'Success' /> */}
      {/* <Heading> PlaceHolder Text </Heading> */}
      {/* <Oscar>
        <Heading> Leonardo dicaprio has won the oscar </Heading>
      </Oscar> */}
      {/* <OptionalGreet name='Vishwas' isLoggedIn = {true} /> */}

      {/* <Button
        handleClick={(event, id) => {
          console.log('Button is clicked', event, id)
        }}
      /> */}

      {/* <Input
        value=''
        handleChange={(event) => {
          console.log('Change Event', event)
        }}
      /> */}

      {/* <Container style={{ color: 'royalblue', border: '1px solid red', padding: '1rem' }}/> */}

      {/* <GreetTwo name='Vishwas' msgCount={15} isLoggedIn = {true}/> */}
      {/* <PersonTwo name={personName}/> */}
      {/* <PersonListTwo namesList={personList} /> */}

      {/* useState Hook */}
      {/* --------------- */}
      {/* <LoggedIn /> */}
      {/* <User /> */}
      {/* <UserTwo /> */}

      {/* useReducer Hook  */}
      {/* ------------------ */}
      {/* <Counter /> */}
      {/* <CounterTwo /> */}

      {/* useContext Hook  */}
      {/* ------------------ */}
      {/* <ThemeContextProviderFn>
        <Box />
      </ThemeContextProviderFn> */}

      {/* <ThemeContextProviderFn>
        <BoxTwo />
      </ThemeContextProviderFn> */}

      {/* <UserContextProvider>
        <User />
      </UserContextProvider> */}

      {/* <UserContextProvider>
        <UserTwo />
      </UserContextProvider> */}

      {/* useRef Hook  */}
      {/* -------------- */}
      {/* <DomRef /> */}
      {/* <MutableRef /> */}

      {/* <ClassCounter message='The Counter value is'/> */}

      {/* <Private isLoggedIn={true} component={Profile}/> */}

      {/* Generics  */}
      {/* ------------ */}
      {/* <List
        items={['Bruce Wayne', 'Clarke Kent', 'Princess Diana']}
        onClick={value => {
          console.log(value)
        }}
      /> */}

      {/* 
      <List
        items={[2, 4, 6, 8, 10]}
        onClick={value => {
          console.log(value)
        }} /> */}

        {/* <List2 items={[
          {
            id: 1,
            firstName: 'Bruce',
            lastName: 'Wayne'
          },
          {
            id: 2,
            firstName: 'Clarke',
            lastName: 'Kent'
          },
          {
            id: 3,
            firstName: 'Princess',
            lastName: 'Diana'
          }
        ]}
        onClick={(item) => {
          console.log(item)
        }}/> */}

        {/* Restricting Props  */}
        {/* -------------------- */}
        {/* <RandomNumber value={10} isNegative /> */}

        {/* <Toast position='center'/> */}

        {/* <CustomButton variant='primary' onClick = {() => console.log('Clicked')}>
          Primary Button
        </CustomButton> */}

        {/* <CustomInput type='text' onChange={(event) => console.log(event.target.value)} /> */}

        {/* <CustomComponent name='Stark' isLoggedIn msgCount={55} /> */}

        <Text as='h1' size='md' color='primary'> Heading h1 tag </Text>

        <Text as='p' size='sm' > Paragraph p tag </Text>

        <Text as='label' size='lg' color='secondary' htmlFor='someId'> Label tag </Text>
    </div>
  )
}

export default App
