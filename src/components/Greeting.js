import AdminMain from './AdminMain';
import Main from './Main';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Greeting({ isAdmin }) {
   const isAdminLoggedIn = isAdmin;
   const BASE_URL = 'http://localhost:3001';
   const [offerings, setOfferings] = useState([]);
   const history = useHistory();

   useEffect(() => {
      fetch(`${BASE_URL}/offerings`, {
         method: 'GET',
         headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
         },
      })
         .then((r) => r.json())
         .then((offerings) => setOfferings(offerings));
   }, []);

   if (isAdminLoggedIn) {
      return <AdminMain />;
   }
   return (
      <Main
         offerings={offerings}
         setOfferings={setOfferings}
         history={history}
         BASE_URL={BASE_URL}
      />
   );
}

export default Greeting;
