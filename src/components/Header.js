import { NavLink } from 'react-router-dom';

function Header() {
   return (
      <header>
         <nav className="navContainer">
            <div className="navLink">
               <NavLink to="/">Home</NavLink>
            </div>
            <div className="navLink">
               <NavLink to="/offerings">Services</NavLink>
            </div>
            <div className="navLink">
               <NavLink to="/about">About Us</NavLink>
            </div>
            <div className="navLink">
               <NavLink to="/blog">Blog</NavLink>
            </div>
            <div className="navLink">
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
            </div>
         </nav>
      </header>
   );
}

export default Header;
