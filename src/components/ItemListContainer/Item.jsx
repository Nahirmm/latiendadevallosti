import { Card } from "react-bootstrap"
import { Button } from "react-bootstrap" 
import ItemCount from "./ItemCount"

function Item({ nombre, imagen, precio, descripcion, stock }) {

    return (

        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagen} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                    <Card.Text>
                        {descripcion}
                    </Card.Text>
                    <ItemCount stock={stock}/>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
