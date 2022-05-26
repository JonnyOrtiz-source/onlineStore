import OfferingListItem from './OfferingListItem';

function Olp({ offerings, handleLikes }) {
   const offeringsEl = offerings.map((offering) => {
      return (
         <OfferingListItem
            key={offering.id}
            offering={offering}
            handleLikes={handleLikes}
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
