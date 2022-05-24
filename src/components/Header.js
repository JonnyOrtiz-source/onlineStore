import logo from '../ssMedia/serenitySpringsLogoNoName.png';
import Cart from './Cart';
import { Link, NavLink } from 'react-router-dom';

function Header() {
   return (
      <header>
         <nav>
            <Link to="/">
               <img
                  src={logo}
                  alt="company logo, 2 hands lifting long plant leaves"
               />
            </Link>
            {` `}
            <NavLink to="/offerings">Services</NavLink>
            {` `}
            <NavLink to="/about">About Us</NavLink>
            {` `}
            <NavLink to="/blog">Blog</NavLink>
            {` `}
            <button
               onClick={(e) => {
                  console.log(e);
               }}
            >
               Contact Us!
            </button>
         </nav>
         <Cart />
      </header>
   );
}

export default Header;
