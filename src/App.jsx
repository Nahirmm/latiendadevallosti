import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'
import CheckOut from "./components/CheckOut/CheckOut";
import OrderProcessed from "./components/OrderProcessed/OrderProcessed";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';

function App() {

  return (
      <CartContextProvider>
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route exact path='/' element={<ItemListContainer greeting='Bienvenidxs a nuestra tienda!' />} />
              <Route exact path='/categoria/:categoriaId' element={<ItemListContainer greeting='Bienvenidxs a nuestra tienda!' />} />
              <Route exact path='/item/:detalleId' element={<ItemDetailContainer />} />
              <Route exact path='/cart' element={<Cart />} />
              <Route exact path='/cart/checkOut' element={<CheckOut />} />
              <Route exact path='/cart/orderProcessed' element={<OrderProcessed />} />
            </Routes>
        </BrowserRouter>
      </CartContextProvider>
  );

}

export default App;
