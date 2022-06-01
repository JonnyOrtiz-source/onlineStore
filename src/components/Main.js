import Header from './Header';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Olp from './Olp';
import OfferingForm from './OfferingForm';
import OfferingEditForm from './OfferingEditForm';
import OfferingDetail from './OfferingDetail';
import NotFound from './NotFound';
import Footer from './Footer';
import React, { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

function Main({ isAdmin }) {
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

   const onAddOffering = (newOffering) => {
      setOfferings((offerings) => [...offerings, newOffering]);
   };

   const onUpdateOffering = (updatedOffering) => {
      const updatedOfferings = offerings.map((prevOffering) => {
         if (prevOffering.id === updatedOffering.id) {
            return updatedOffering;
         } else {
            return prevOffering;
         }
      });
      setOfferings(updatedOfferings);
   };

   const onDeleteOffering = (deletedOffering) => {
      const updatedOfferings = offerings.filter(
         (offering) => offering.id !== deletedOffering.id
      );
      setOfferings(updatedOfferings);
   };

   const handleLikes = (id) => {
      const foundOffering = offerings.find((offering) => offering.id === id);
      foundOffering.likes = foundOffering.likes + 1;
      onUpdateOffering(foundOffering);

      const options = {
         method: 'PATCH',
         headers: {
            'Content-type': 'application/json',
            Accept: 'application/json',
         },
         body: JSON.stringify(foundOffering),
      };

      fetch(`${BASE_URL}/offerings/${id}`, options)
         .then((r) => r.json())
         .then(() => {
            history.push(`/offerings/`);
         });
   };

   return (
      <div>
         <Header />
         <Switch>
            <Route exact path="/">
               <Home offerings={offerings} />
            </Route>
            <Route exact path="/about">
               <About />
            </Route>
            <Route exact path="/blog">
               <Blog />
            </Route>
            <Route path="/offerings/new">
               <OfferingForm
                  BASE_URL={BASE_URL}
                  onAddOffering={onAddOffering}
                  isAdmin={isAdmin}
               />
            </Route>
            <Route path="/offerings/:id/edit">
               <OfferingEditForm
                  BASE_URL={BASE_URL}
                  onUpdateOffering={onUpdateOffering}
                  isAdmin={isAdmin}
               />
            </Route>
            <Route path="/offerings/:id">
               <OfferingDetail BASE_URL={BASE_URL} isAdmin={isAdmin} />
            </Route>
            <Route exact path="/offerings">
               <Olp
                  offerings={offerings}
                  handleLikes={handleLikes}
                  isAdmin={isAdmin}
                  onUpdateOffering={onUpdateOffering}
                  onDeleteOffering={onDeleteOffering}
                  BASE_URL={BASE_URL}
               />
            </Route>

            <Route path="*">
               <NotFound />
            </Route>
         </Switch>
         <Footer />
      </div>
   );
}

export default Main;
