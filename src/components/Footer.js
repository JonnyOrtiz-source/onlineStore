import { Link } from 'react-router-dom';

function Footer() {
   return (
      <div>
         <Link to="https://cloudrealmllc.com">
            <p className="copyright">&copy;&nbsp;CloudRealm LLC</p>
         </Link>
      </div>
   );
}

export default Footer;
