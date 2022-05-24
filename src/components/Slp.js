function Plp({ offerings }) {
   const offeringsEl = offerings.map((offering) => {
      return (
         <li key={offering.id} onClick={handleClick}>
            {offering.name} {offering.desc} {offering.price} {offering.image}
         </li>
      );
   });

   function handleClick(e) {
      console.log(e.target);
   }

   return (
      <div>
         <ul>{offeringsEl}</ul>
      </div>
   );
}

export default Plp;
