import './ItemListContainer.css'
import ItemList from './ItemList/ItemList'
import { useState , useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'


function ItemListContainer({ greeting }) {
    
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const {categoryId} = useParams()

    useEffect(() => {

        if(categoryId) {

            const db = getFirestore()
            const queryCollectioncategory = query(collection(db, 'items'), 
                where('category', '==', categoryId)
            )
            getDocs(queryCollectioncategory)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        } else {

            const db = getFirestore()
            const queryCollection = query(collection(db, 'items'))
            getDocs(queryCollection)
            .then(resp => setProducts( resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) ) ))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))

        }

    }, [categoryId])

    return (
        <div className='divItemListContainer'>
            <h1 className='greeting'>{greeting}</h1>
            { loading ? <Spinner /> : <ItemList products={products} /> }
        </div>
    )
}

export default ItemListContainer
