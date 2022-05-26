import { Link } from 'react-router-dom';

function Footer() {
   return (
      <div>
         <Link to="https://cloudrealmllc.com">
            {' '}
            &copy;&nbsp;CloudRealm LLC{' '}
         </Link>
      </div>
   );
}

export default Footer;
