import {useState} from 'react'
import './ItemCount.css'

function ItemCount({ initial, stock }) {

    const [counter, setCounter] = useState(1)

    const handleDecrement = () => {

        counter > initial ? setCounter(prev => prev - 1) : console.log('1 es el mínimo de compra')

    }

    const handleIncrement = () => {
       
        counter < stock ? setCounter(prev => prev + 1) : console.log('Llegó al máximo de productos')
       
    }


    return (
        <div className='itemCount'>
            <button onClick={handleDecrement}>-</button>
            <h3 className='h3Counter'>{counter}</h3>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default ItemCount
