import Login from './pages/Login/login'
import Dashboard from './pages/Dashboard/dashboard'
import './App.css'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
      {/* <Login/> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
