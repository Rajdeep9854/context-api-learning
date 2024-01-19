import UserContextProvider from "./context/UserContextProvider"
import LogIn from './components/LogIn'
import Profile from './components/Profile'

function App() {
  return (
    <UserContextProvider>
      <h1>My Name is Rajdeep Chowdhury</h1>
      <LogIn />
      <Profile />
    </UserContextProvider>
  )
}

export default App
