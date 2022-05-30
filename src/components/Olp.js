import OfferingListItem from './OfferingListItem';

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

   return (
      <div>
         Services
         <ul>{offeringsEl}</ul>
      </div>
   );
}

export default Olp;
