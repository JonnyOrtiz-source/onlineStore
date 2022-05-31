import Main from './Main';

import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../ssMedia/serenitySpringsLogoNoName.png';

function App() {
   const [errorMessages, setErrorMessages] = useState({});
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);
   const [offerings, setOfferings] = useState([]);
   const history = useHistory();

   const BASE_URL = 'http://localhost:3001';

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

   const database = [
      {
         username: 'Jonny',
         password: 'Ortiz',
      },
      {
         username: 'admin',
         password: 'admin',
      },
   ];

   const errors = {
      uname: 'invalid username',
      pass: 'invalid password',
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      const { uname, pass } = document.forms[0];

      const userData = database.find((user) => user.username === uname.value);

      if (userData) {
         if (userData.password !== pass.value) {
            setErrorMessages({ name: 'pass', message: errors.pass });
         } else {
            if (userData.username.trim().toLowerCase() === 'admin') {
               setIsAdmin(true);
            }
            setIsSubmitted(true);
         }
      } else {
         setErrorMessages({ name: 'uname', message: errors.uname });
      }
   };

   const renderErrorMessage = (name) =>
      name === errorMessages.name && (
         <div className="error">{errorMessages.message}</div>
      );

   const renderForm = (
      <div>
         <form onSubmit={handleSubmit}>
            <div>
               <label>Username </label>
               <input type="text" name="uname" required />
               {renderErrorMessage('uname')}
            </div>
            <div>
               <label>Password </label>
               <input type="password" name="pass" required />
               {renderErrorMessage('pass')}
            </div>
            <div>
               <input type="submit" />
            </div>
         </form>
      </div>
   );

   return (
      <>
         <div className="header">
            <div>
               <Link to="/">
                  <img
                     src={logo}
                     alt="company logo, 2 hands lifting long plant leaves"
                  />
               </Link>
            </div>

            <div>
               <h1>Serenity Springs</h1>
            </div>
         </div>
         <div>
            {isSubmitted ? (
               <Main
                  offerings={offerings}
                  setOfferings={setOfferings}
                  history={history}
                  BASE_URL={BASE_URL}
                  isAdmin={isAdmin}
               />
            ) : (
               renderForm
            )}
         </div>
      </>
   );
}

export default App;
