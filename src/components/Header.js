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
            Serenity Springs
            {` `}
            <NavLink to="/offerings">Services</NavLink>
            {` `}
            <NavLink to="/about">About Us</NavLink>
            {` `}
            <NavLink to="/blog">Blog</NavLink>
            {` `}
            <button
               onClick={() =>
                  window.open(
                     'https://calendly.com/yourserenitysprings',
                     '_blank'
                  )
               }
            >
               Book Now!
            </button>
         </nav>
         <Cart />
      </header>
   );
}

export default Header;
