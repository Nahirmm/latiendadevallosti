import { useState , useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


function ItemDetailContainer() {

    const [producto, setProducto] = useState({})

    const {detalleId} = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryProd = doc(db, 'items', detalleId)
        getDoc(queryProd)
        .then((resp) => (setProducto({id: resp.id, ...resp.data()})))

        
        // getFetch
        // .then(resp => setProducto(resp.find(prod => prod.id === detalleId)))

    }, [detalleId])
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
