import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import { Banner } from './components/Banner';
import Home from './views/Home';
import MyContext from './MyContext';
import Pizza from './views/Pizza';
import Carrito from './components/Carrito';


function App() {
  const [pizzas,setPizzas] = useState([])
  const [cart, setCart] = useState([])
  const[alert, setAlert] = useState("")
  const[cartTotal, setCartTotal] = useState(0) 
  const globalState = {pizzas, setPizzas,cart,setCart,cartTotal,setCartTotal,alert,setAlert}


  useEffect(() => {
    mostrarPizzas();
}, [])

async function mostrarPizzas(){
    const endpoint = "/pizzas.json"
    const res = await fetch(endpoint)
    const data = await res.json() 
    setPizzas(data)
    console.log(data)
}

  return (
    <div className="App">
      <MyContext.Provider value={globalState}>
        <BrowserRouter>
        <NavBar/>
        <Banner/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/Pizza/:id" element={<Pizza/>} />
          <Route path="/Carrito" element={<Carrito/>} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
      
    </div>
  );
}

export default App;
