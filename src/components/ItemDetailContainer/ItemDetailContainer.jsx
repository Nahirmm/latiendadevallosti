import { useState , useEffect } from 'react'
import { getFetch } from '../../helpers/mock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'


function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    const {detalleId} = useParams()

    useEffect(() => {
        
        getFetch
        .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))

    }, [detalleId])
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
