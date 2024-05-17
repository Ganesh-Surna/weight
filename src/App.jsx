import { useSelector } from 'react-redux'
import './App.css'
import HomeScreen from './components/HomeScreen'
import Menu from './components/Menu'
import Setting from './components/Setting'

function App() {
  const focusedScreen = useSelector(state=>state.ui.focusedScreen);

  return (
    <div className="App">
      {focusedScreen==="home" && <HomeScreen/>}
      {focusedScreen==="setting" && <Setting/>}
      {focusedScreen==="menu" && <Menu/>}
    </div>
  )
}
export default App
