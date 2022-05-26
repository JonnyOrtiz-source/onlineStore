import Greeting from './Greeting';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../ssMedia/serenitySpringsLogoNoName.png';

function App() {
   const [errorMessages, setErrorMessages] = useState({});
   const [isSubmitted, setIsSubmitted] = useState(false);
   const [isAdmin, setIsAdmin] = useState(false);

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
            setIsSubmitted(true);
            if (userData.username === 'admin') {
               setIsAdmin(true);
            }
         }
      } else {
         setErrorMessages({ name: 'uname', message: errors.uname });
      }
   };

   const renderErrorMessage = (name) =>
      name === errorMessages.name && <div>{errorMessages.message}</div>;

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
         <Link to="/">
            <img
               src={logo}
               alt="company logo, 2 hands lifting long plant leaves"
            />
         </Link>

         <h1>Welcome to Serenity Springs</h1>

         <div>{isSubmitted ? <Greeting isAdmin={isAdmin} /> : renderForm}</div>
      </>
   );
}

export default App;
