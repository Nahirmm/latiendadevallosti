import './NavBar.css'
import logo from '../../assets/logo.png';
import CartWidget from './CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext"


function NavBar() { 

    const { quantityItems } = useCartContext()

    return (
        <div className='divNavBar'>
            <Link to={`/`}><img src={logo} alt="logo" className="logo" /></Link>
            <Link to={`/`} className='titleNavBar'>La tienda de Vallosti</Link>
            <NavLink to={`/categoria/Animales`} className="navLinkNavBar">Animales</NavLink>
            <NavLink to={`/categoria/Bebes`} className="navLinkNavBar">Bebes</NavLink>
            <NavLink to={`/categoria/Personajes`} className="navLinkNavBar">Personajes</NavLink>
            <Link to={`/cart`} className='cartNavBar'>
                <CartWidget />
                {quantityItems() > 0 ? <div className='balloonItems'> {quantityItems()} </div> : <div></div>}
            </Link>
        </div>
    )
}

export default NavBar


  

  