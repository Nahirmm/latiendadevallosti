import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemCount from './components/ItemListContainer/ItemCount';


function App() {

  return (

    <div>

        <NavBar />
        <ItemListContainer greeting='Bienvenidxs a la nuestra tienda!' />
        <ItemCount initial={1} stock={7} />
    </div>
  );

}

export default App;
