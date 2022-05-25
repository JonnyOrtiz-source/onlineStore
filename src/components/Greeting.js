import AdminMain from './AdminMain';
import Main from './Main';

function Greeting({ isAdmin }) {
   const isAdminLoggedIn = isAdmin;
   if (isAdminLoggedIn) {
      return <AdminMain />;
   }
   return <Main />;
}

export default Greeting;
