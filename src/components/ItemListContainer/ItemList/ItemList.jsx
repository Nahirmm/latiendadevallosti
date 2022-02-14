import './ItemList.css';
import Item from '../Item/Item'

function ItemList({ products }) {

    return (
        <div className='divItemList'>
            { products.map(prod => <Item key={prod.idx} idx={prod.idx} name={prod.name} img={prod.img} price={prod.price} stock={prod.stock} />) }
        </div>
    )
}

export default ItemList
