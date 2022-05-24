import Header from './Header';
import Home from './Home';
import Benes from './Benes';
import FeaturedContainer from './FeaturedContainer';
import Slp from './Slp';
import OfferingForm from './OfferingForm';
import OfferingEditForm from './OfferingEditForm';
import OfferingDetail from './OfferingDetail';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

function Main() {
   const [offerings, setOfferings] = useState([]);

   useEffect(() => {
      fetch('http://localhost:3001/offerings', {
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

   return (
      <div>
         <Header />
         <Switch>
            <Route exact path="/">
               <Home />
            </Route>
            <Benes />
            <FeaturedContainer />
            <Route path="/offerings/new">
               <OfferingForm onAddOffering={onAddOffering} />
            </Route>
            <Route path="/offerings/:id/edit">
               <OfferingEditForm onUpdateOffering={onUpdateOffering} />
            </Route>
            <Route path="/offerings/:id">
               <OfferingDetail />
            </Route>

            <Route exact path="/offerings">
               <Slp offerings={offerings} />
            </Route>
         </Switch>
         <Footer />
      </div>
   );
}

export default Main;
