import OfferingListItem from './OfferingListItem';

function Slp({ offerings }) {
   const offeringsEl = offerings.map((offering) => {
      return <OfferingListItem key={offering.id} offering={offering} />;
   });

   return (
      <div>
         Services
         <ul>{offeringsEl}</ul>
      </div>
   );
}

export default Slp;
