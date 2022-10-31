import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import MyContext from "../MyContext";
import { useNavigate } from "react-router";
import '../index.css'
import { Link } from "react-router-dom";
import { CardGroup, ListGroup } from "react-bootstrap";

export default function Home() {
    
const{pizzas, setPizzas} = useContext(MyContext)
const navigate = useNavigate()

    return(
    <div className="contenedor-card">
        <CardGroup>
        {pizzas.map((pizza) => {
            return(                       
                <Card key={pizza.id}>
                  <Card.Img variant="top" src={pizza.id && pizza.img}  />
                  <Card.Body>
                    <Card.Title>{pizza.name}</Card.Title>
                    <hr/>
                    <Card.Text>
                        <h1 className="ingredientetitulo">Ingredientes:</h1>
                        <ListGroup variant='flush'>
                            {pizza.ingredients.map((ingredient, i) => (
                            <ListGroup.Item
                            className='ingredientes border-0 text-capitalize'
                            key={i}
                            >
                            🍕
                            {ingredient}
                        </ListGroup.Item>
                        ))}
                         </ListGroup>
                         <hr/>
                         <p className="card-price text-center"><b>${pizza.price}</b></p>
                        <div className="btn-card text-center">
                        <Button variant="info" className="btn-1-light mx-2 my-2" onClick={() => {
                            navigate(`/pizza/${pizza.id}`)}}>Ver más<Link><img src='./img/buscar.png' alt='#' width="20px"/></Link></Button>
                        <Button variant="danger" className="btn-2 text-light mx-2 my-2" onClick={()=>{
                            navigate(`/carrito`)
                        }}>Añadir 🛒</Button>  
                        </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
            )             
        })}              
        </CardGroup>                 
    </div>
    )
}
