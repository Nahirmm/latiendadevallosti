import './Item.css';
import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap" 
import ItemCount from "./ItemCount"

function Item({ nombre, imagen, precio, descripcion, stock }) {

    return (

        <div className="divItem">
            <Card className='cardItem'>
                <Card.Img variant="top" src={imagen} alt={nombre} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        <p>{descripcion}</p>
                        <br />
                        <p>${precio}</p>
                    </Card.Text>
                    <ItemCount stock={stock}/>
                    <div className='divButtonCardItem'>
                        <Button variant="dark" className='buttonCardItem'>Agregar al carrito</Button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item