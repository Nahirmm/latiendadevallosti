import { Link } from "react-router-dom"
import { Button } from 'react-bootstrap';
import './CartEmpty.css'

function CartEmpty() {
  return(
    <div className="cartEmpty">
        <h2>Su carrito se encuentra vacío</h2>
        <Link to="/">
            <Button variant="dark">Ir a la tienda</Button>
        </Link>
    </div>
  );
}

export default CartEmpty;
