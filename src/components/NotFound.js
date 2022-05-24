import { Link } from 'react-router-dom';
import PageNotFound from '../ssMedia/404.png';

function NotFound() {
   return (
      <div>
         <img src={PageNotFound} alt="404 error page not found" />
         <p>
            <Link to="/">Go to Home Page</Link>
         </p>
      </div>
   );
}

export default NotFound;
