import './App.css'
import ItemListCategoryContainer from './components/ItemList/ItemListCategoryContainer'
import ItemListContainer from './components/ItemList/ItemListContainer'
import Layout from './components/Layout/Layout'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import CartProvider from './components/context/CartContext/CartProvider'
import CartItem from './components/CartItem/CartItem'
import CartContainer from './components/CartContainer/CartContainer'

function App() {
 return (
  <BrowserRouter>
    <CartProvider>
      <Layout>
        <Routes>
          <Route path='/' element= {<ItemListContainer greeting={"Hola"}/> }/>
          <Route path='/product/:productid' element={<ItemListContainer greeting={"Hola"}/>}/>
          <Route path='/category/:category' element={<ItemListCategoryContainer/> }/>
          <Route path='/cart/' element={<CartContainer/> }/>
          <Route path='*' element={<h1>Not Found</h1>}/>
        </Routes>
      </Layout>
    </CartProvider>
  </BrowserRouter>
  )
}

export default App
