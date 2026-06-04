import './App.css'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'

function App() {
 
  return (
    <>
      <Header/>
      <div className='homeBody p-4'>
        <HomeScreen/>
      </div>
    </>
  )
}

export default App
