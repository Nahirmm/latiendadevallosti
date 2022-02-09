import './ItemList.css';
import Item from '../Item/Item'

function ItemList({ products }) {

    return (
        <div className='divItemList'>
            { products.map(prod => <Item key={prod.id} id={prod.id} name={prod.name} img={prod.img} price={prod.price} stock={prod.stock} />) }
        </div>
    )
}

export default ItemList
