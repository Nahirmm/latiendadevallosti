import './OrderProcessed.css'
import { useParams } from 'react-router-dom'

function OrderProcessed() {

    const {idOrder} = useParams()
    
    return (
        <div>
            <h2>Muchas gracias por su compra!</h2>
            <h5>En breve nos pondremos en contacto para coordinar el envio.</h5>
            <p>El id de la orden generada es: {idOrder}</p> 
        </div>
    );
}

export default OrderProcessed;
