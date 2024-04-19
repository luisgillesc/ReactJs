import './App.css'
import Brand from './components/Menu/Brand'
import ItemListContainer from './components/Menu/ItemListContainer'
import NavBar from './components/Menu/NavBar'

function App() {
 return (
  <div>
    <div className='Menu'>
      <Brand/>
      <NavBar/>
    </div>
    <ItemListContainer greeting="Hola Tutor"/>
  </div>

  )
}

export default App
