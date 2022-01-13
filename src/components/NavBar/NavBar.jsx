import './NavBar.css'
import logo from '../../assets/logo.png';

import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'


function NavBar() {

    return (
        <div>
            <Link to={`/`}><img src={logo} alt="logo" className="logo" /></Link>
            <Link to={`/`}>La tienda de Vallosti</Link>
            <NavLink to={`/categoria/animales`}>Animales</NavLink>
            <NavLink to={`/categoria/bebes`}>Bebes</NavLink>
            <NavLink to={`/categoria/personajes`}>Personajes</NavLink>
            <Link to={`/cart`}><CartWidget /></Link>
        </div>
    )
}

export default NavBar


  

  