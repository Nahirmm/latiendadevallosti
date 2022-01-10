import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemListContainer/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (

    <div>
        <NavBar />
        <ItemListContainer greeting='Bienvenidxs a nuestra tienda!' />
        <ItemDetailContainer />
    </div>
  );

}

export default App;
