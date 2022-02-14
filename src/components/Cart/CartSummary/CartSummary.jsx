import './CartSummary.css'
import { Table } from "react-bootstrap";
import TrashWidget from '../TrashWidget/TrashWidget';
import { useCartContext } from "../../../context/CartContext"


function CartSummary() {

    const { cartList, deleteItem } = useCartContext()

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Subtotal</th>
                    <th>Remover</th>
                    </tr>
                </thead>
                {cartList.map((prod) =>
                <tbody key={prod.id}>
                    <tr>
                    <td><img src={prod.img} alt={prod.name} /></td>
                    <td>{prod.name}</td>
                    <td>{prod.quantity}</td>
                    <td>${prod.price}</td>
                    <td>${prod.price * prod.quantity}</td>
                    <td>
                        <button onClick={() => deleteItem(prod.id)} className="buttonTrashWidget">
                            <TrashWidget />
                        </button>
                    </td>
                    </tr>
                </tbody>)}
            </Table>
        </div>
    );
}

export default CartSummary;
