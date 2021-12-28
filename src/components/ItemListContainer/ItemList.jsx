import Item from './Item'



function ItemList(productos) {



    return (
        <div>
            { productos.map(prod => <Item key={prod.id} nombre={prod.nombre} imagen={prod.img} precio={prod.precio} descripcion={prod.descripcion} stock={prod.stock} />) }
        </div>
    )
}

export default ItemList
