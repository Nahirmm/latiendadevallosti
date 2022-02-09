import './Item.css';
import { Card, Button } from "react-bootstrap"
import { Link } from 'react-router-dom'

function Item({ id, name, img, price }) {

    return (

        <div className="divItem">
            <Card className='cardItem'>
                <Card.Img variant="top" src={img} alt={name} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='pCardPrice'>${price}</Card.Text>
                    <div className='divButtonCardItem'>
                        <Link to={`/item/${id}`}><Button variant="dark" className='buttonCardItem'>Detalle del producto</Button></Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item
