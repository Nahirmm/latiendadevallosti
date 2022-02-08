import './CartItem.css'
import { useCartContext } from "../../../context/CartContext"
import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';
import CartSummary from './../CartSummary/CartSummary';


function CartItem() {

    const { vaciarCarrito, precioTotal } = useCartContext()

    return (
        <div className="cart">
            <CartSummary />
            <div className="finalCart">
                <p className="priceTotal">Precio total ${precioTotal()} </p>
                <Link to={'/cart/checkOut'}>
                    <Button variant="dark" className='buttonCartItem'>Comprar</Button>
                </Link>
                <Button variant="outline-dark" className='buttonCartItem buttonCartItem2' onClick={vaciarCarrito}>Vaciar carrito</Button>
            </div>                      
        </div>
    );
}

export default CartItem;
