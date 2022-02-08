import './CartSummary.css'
import { Table } from "react-bootstrap";
import TrashWidget from '../TrashWidget/TrashWidget';
import { useCartContext } from "../../../context/CartContext"


function CartSummary() {

    const { cartList, borrarItem } = useCartContext()

    return(
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Imagen</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Remover</th>
                    </tr>
                </thead>
                {cartList.map((prod) =>
                <tbody key={prod.id}>
                    <tr>
                    <td><img src={prod.img} alt={prod.nombre} /></td>
                    <td>{prod.nombre}</td>
                    <td>{prod.cantidad}</td>
                    <td>${prod.precio}</td>
                    <td>
                        <button onClick={() => borrarItem(prod.id)} className="buttonTrashWidget">
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
