import { useParams } from "react-router";
import { useContext } from "react";
import MyContext from "../MyContext";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup } from "react-bootstrap";
import '../index.css'
import { useNavigate } from "react-router";



function Pizza() {
    const {pizzas} = useContext(MyContext);    
    const { id } = useParams();
    const navigate = useNavigate()

  return (
    <div className="div pizza-card w-100" >
      {pizzas.filter((pizza)=>pizza.id === id).map((pizza)=>{
        return (
            <Card style={{ width: '18rem' }} className="mx-auto w-100" >
                    <Card.Img variant="top" src={pizza.id && pizza.img} className="pizza-img" style={{width:200}}/>
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
                          <Button variant="danger" className="btn-2 text-light mx-2 my-2" onClick={() => {navigate(`/carrito`)}} >Añadir 🛒</Button>  
                        </div>
                        </Card.Text>                        
                    </Card.Body>
                </Card>
      )
      })}    
      </div>
  )
}

export default Pizza;