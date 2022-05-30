import OfferingListItem from './OfferingListItem';
import { Link } from 'react-router-dom';

function Olp({ offerings, handleLikes, isAdmin, onUpdateOffering }) {
   const offeringsEl = offerings.map((offering) => {
      return (
         <OfferingListItem
            key={offering.id}
            offering={offering}
            handleLikes={handleLikes}
            isAdmin={isAdmin}
            onUpdateOffering={onUpdateOffering}
         />
      );
   });

   const addLink = <Link to={`/offerings/new`}>Add New Service</Link>;

   return (
      <div>
         <h3>SERVICES</h3>
         {isAdmin ? addLink : null}
         <ul>{offeringsEl}</ul>
      </div>
   );
}

export default Olp;
