import { useState , useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

function ItemDetailContainer() {

    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const {detailId} = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryProd = doc(db, 'items', detailId)
        getDoc(queryProd)
        .then((resp) => (setProduct({id: resp.id, ...resp.data()})))
        .finally(() => setLoading(false))

    }, [detailId])
    
    return (
        <div>
            { loading ? <Spinner /> : <ItemDetail product={product} /> }
        </div>
    )
}

export default ItemDetailContainer
