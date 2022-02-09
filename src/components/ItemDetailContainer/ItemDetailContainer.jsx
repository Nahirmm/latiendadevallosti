import { useState , useEffect } from 'react'
import ItemDetail from './ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { doc, getDoc, getFirestore } from 'firebase/firestore'


function ItemDetailContainer() {

    const [product, setProduct] = useState({})

    const {detailId} = useParams()

    useEffect(() => {

        const db = getFirestore()
        const queryProd = doc(db, 'items', detailId)
        getDoc(queryProd)
        .then((resp) => (setProduct({id: resp.id, ...resp.data()})))


    }, [detailId])
    
    return (
        <div>
            <ItemDetail product={product} />
        </div>
    )
}

export default ItemDetailContainer
