import { NavLink } from 'react-router-dom';

function Header() {
   return (
      <header>
         <nav>
            <NavLink to="/">Home</NavLink>
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
      </header>
   );
}

export default Header;
