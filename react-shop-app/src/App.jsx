import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Product from './components/Product'
import Home from './pages/Home'
import Cart from './pages/Cart'
import {BrowserRouter, Routes , Route} from 'react-router-dom';


function App() {
  const [cart, setCart] = useState([]);
  const [purchasedItems, setPurchasedItems] = useState([]);

  const clearCart = () => {
    setPurchasedItems([...purchasedItems, ...cart]);
    setCart([]);
};

  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home cart={cart} setCart={setCart} />} />
      <Route path="/cart" element={<Cart cart={cart} clearCart={clearCart} purchasedItems={purchasedItems}/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
