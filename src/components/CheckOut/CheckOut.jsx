import './CheckOut.css'
import { useCartContext } from "../../context/CartContext"
import { addDoc, collection, Timestamp, documentId, getDocs, getFirestore, query, where, writeBatch } from "firebase/firestore"
import { useState } from "react"
import OrderProcessed from "../OrderProcessed/OrderProcessed";
import { Link, Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Spinner from '../Spinner/Spinner'



function CheckOut() {

    const { cartList, emptyCart, totalPrice } = useCartContext()
    
    const [condicional, setCondicional] = useState(false);
    const [loading, setLoading] = useState(false)
    
    const [formData , setFormData ] = useState({
        name: '',
        lastName: '',
        phone: '',
        email: '',
    });
    
    const [idOrder, setIdOrder] = useState('');

    const makeAPurchase = async (e) => {

        e.preventDefault()   
        
        let order = {}

        order.date = Timestamp.fromDate(new Date())        
        order.buyer = formData 
        order.total = totalPrice();

        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const name = cartItem.name;
            const price = cartItem.price * cartItem.quantity;
            const quantity = cartItem.quantity
            
            return {id, name, price, quantity}   
        }) 

        setLoading(true)
        const db = getFirestore()

        const orderCollection = collection(db, 'orders')
        await addDoc(orderCollection, order) 
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        
        const queryCollection = collection(db, 'items')
        const queryToUpdateStock = query(
            queryCollection, 
            where( documentId() , 'in', cartList.map(it => it.id))          
        ) 

        const batch = writeBatch(db)      
        
        await getDocs(queryToUpdateStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).quantity
            }) 
        ))
        .catch(err => console.log(err))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()

        setLoading(false)
        setCondicional(true)    
        
        emptyCart()
    }

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const getForm = () => {
        return(   
            <div>
                <h4>Por favor complete el siguiente formulario para finalizar su compra:</h4>
                <form onChange={handleChange}>
                    <input 
                        type="text" 
                        name="name"
                        placeholder="Nombres"
                        onChange={handleChange}
                        value={formData.name}
                        required
                    />
                    <input 
                        type="text" 
                        name="lastName"
                        placeholder="Apellidos"
                        onChange={handleChange}
                        value={formData.lastName}
                        required
                    />
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <input 
                        type="number" 
                        name="phone"
                        placeholder="Telefono"
                        onChange={handleChange}
                        value={formData.phone}
                        required
                    />
                    <Link to={'/cart/orderProcessed'}>
                        <Button variant="dark" onClick={makeAPurchase}>
                            Finalizar compra
                            </Button>
                    </Link>
                </form>
            </div>
            )
    }

    const enableButtonCondition = () => {
        return formData.phone && formData.email && formData.lastName && formData.name
    }

    return (
        <div>
            { 
                condicional ? (<Navigate to= {`/cart/orderProcessed/${idOrder}`} /> )
                    : ( loading ? <Spinner /> : getForm())
            }
        </div>
    );
}

export default CheckOut;
