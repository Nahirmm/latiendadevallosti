import './ItemDetail.css';
import { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../../context/CartContext';
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount'


function ItemDetail({ product }) { 

    const { addToCart } = useCartContext()
    
    const [show, setShow] = useState(true)

    const onAdd = (counter) => {

        setShow(false)
        addToCart({...product, quantity: counter})
    }

    return (
        <div className='divDetail'>
            <img src={product.img} alt={product.nombre} className='imgDetail'/>
            <div>
                <h2>{product.nombre}</h2>
                <p className='pDescriptionDetail'>{product.description}</p>
                <p className='pPatternDetail'>{product.pattern}</p>
                <h4 className='priceDetail'>Precio: ${product.price}</h4>
                { show ? <ItemCount stock={product.stock} onAdd={onAdd}/> : 
                <div className='divButtonsDetail'>
                    <Link to='/'><Button variant="outline-dark" className='buttonSeguirCompra'>Seguir comprando</Button></Link>
                    <Link to='/cart'><Button variant="dark" className='buttonTerminarCompra'>Terminar compra</Button></Link>
                </div>}
            </div>
        </div>
    )
}

export default ItemDetail
