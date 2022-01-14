import './NavBar.css'
import logo from '../../assets/logo.png';

import CartWidget from './CartWidget';
import { Link, NavLink } from 'react-router-dom'


function NavBar() {

    return (
        <div className='divNavBar'>
            <Link to={`/`}><img src={logo} alt="logo" className="logo" /></Link>
            <Link to={`/`} className='tituloNavBar'>La tienda de Vallosti</Link>
            <NavLink to={`/categoria/Animales`} className="navLinkNavBar">Animales</NavLink>
            <NavLink to={`/categoria/Bebes`} className="navLinkNavBar">Bebes</NavLink>
            <NavLink to={`/categoria/Personajes`} className="navLinkNavBar">Personajes</NavLink>
            <Link to={`/cart`} className='cartNavBar'><CartWidget /></Link>
        </div>
    )
}

export default NavBar


  

  