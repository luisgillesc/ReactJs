import './App.css'
import ItemListContainer from './components/ItemList/ItemListContainer'
import Layout from './components/Layout/Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
 return (
  <BrowserRouter>
    <Layout>
    <Routes>
      <Route path='/' element= {<ItemListContainer greeting={"Hola"}/> }/>
      <Route path='/product/:productid' element={<ItemListContainer greeting={"Hola"}/> }/>
      <Route path="/men's%20clothing" element={<a href="/#">men's clothing</a>}/>
      <Route path="/women's%20clothing" element={<a href="/#">women's clothing</a>}/>
      <Route path='*' element={<h1>Not Found</h1>}/>
    </Routes>
    </Layout>
  </BrowserRouter>
  )
}

export default App
