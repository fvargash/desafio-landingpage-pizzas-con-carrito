import React, { useContext, useEffect} from "react"
import Card from 'react-bootstrap/Card';
import '../index.css'
import Button from 'react-bootstrap/Button';
import MyContext from "../MyContext";

const ShoppingCart = () => {
  const {cart, setCart,alert, setAlert,cartTotal, setCartTotal} = useContext(MyContext);

  const items=[
    {
      "desc": "La pizza napolitana, de masa tierna y delgada pero bordes altos, es la versión propia de la cocina napolitana de la pizza redonda. El término pizza napoletana, por su importancia histórica o regional, se emplea en algunas zonas como sinónimo de pizza tonda.",
      "id": "P001",
      "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c",
      "ingredients": ["mozzarella", "tomates", "jamón", "orégano"],
      "name": "napolitana",
      "price": 5950
    },
    {
      "desc": "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      "id": "P002",
      "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab",
      "ingredients": ["mozzarella", "tomates", "jamón", "choricillo"],
      "name": "española",
      "price": 7250
    },
    {
      "desc": "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      "id": "P003",
      "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3",
      "ingredients": ["mozzarella", "tomates", "salame", "orégano"],
      "name": "salame",
      "price": 5990
    },
    {
      "desc": "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      "id": "P004",
      "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
      "ingredients": ["mozzarella", "salame", "aceitunas", "champiñones"],
      "name": "cuatro estaciones",
      "price": 9590
    },
    {
      "desc": "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      "id": "P005",
      "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-salame.jpg?alt=media&token=ab3d4bf8-01f2-4810-982b-bd7fb6b517b2",
      "ingredients": ["mozzarella", "tomates cherry", "bacon", "orégano"],
      "name": "bacon",
      "price": 6450
    },
    {
      "desc": "La pizza es una preparación culinaria que consiste en un pan plano, habitualmente de forma circular, elaborado con harina de trigo, levadura, agua y sal (a veces aceite de oliva) que comúnmente se cubre con salsa de tomate, queso y otros muchos ingredientes, y que se hornea a alta temperatura, tradicionalmente en un horno de leña.",
      "id": "P006",
      "img": "https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-2000595_640_c.jpg?alt=media&token=61325b6e-a1e0-441e-b3b5-7335ba13e8be",
      "ingredients": ["mozzarella", "pimientos", "pollo grillé", "orégano"],
      "name": "pollo picante",
      "price": 8500
    }
  ]

  useEffect(
    () => {
      total()
    }, [cart]
  )


  const total = () => {
    let totalVal = 0
    for(let i = 0; i < cart.length; i++){
      totalVal += cart[i].price
    }
    setCartTotal(totalVal)
  }

  const addToCart = (el) => {
    let addIt = true
    for(let i = 0; i < cart.length; i++){
      if (cart[i].id === el.id) addIt = true
    }
    if(addIt){
      setCart([...cart, el])   
    } else setAlert(`No hay mas mas disponibilidad de esta pizza`)
  }

  const removeFromCart = (el) => {
    let hardCopy = [...cart]
    hardCopy = hardCopy.filter(CartItem => CartItem.id !== el.id)
    setCart(hardCopy)
  }

  const listItems = items.map((el) => (
    <div className="list-items">
      <Card.Title className="mx-4" key={el.id}> {`${el.name}: $${el.price}`}</Card.Title>
      <Button variant="danger" className="btn-2 text-light mx-2 my-2" onClick={() => addToCart(el)}>Añadir 🛒</Button>
    </div>
  ))

  const cartItems= cart.map((el) =>(
      <div className="list-items">
        <Card.Title key={el.id}>{`${el.name}: $${el.price}`}</Card.Title>
        <Button variant="danger" className="btn-2 text-light mx-2 my-2" onClick={() => removeFromCart(el)}>Quitar ❌</Button>
      </div>
  ))

  return (<>
    <div className="card-shop-fluid">
    <Card className="p-4">
          <Card.Title>Carta:</Card.Title>
          <Card.Text className="">{listItems}</Card.Text>
          <Card.Title>Pedido:</Card.Title>
          <Card.Text>{cartItems}</Card.Text>
          <Card.Title>Total: ${cartTotal}</Card.Title>
          <Card.Text>{alert}</Card.Text>
    </Card>
    </div>
    </>)
}

export default ShoppingCart

