import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function OfferingDetail({ num }) {
   const [offering, setOffering] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);

   const { id } = useParams();

   useEffect(() => {
      fetch(`http://localhost:3001/offerings/${id ? id : num}`)
         .then((r) => r.json())
         .then((offering) => {
            setOffering(offering);
            setIsLoaded(true);
         });
   }, [id, num]);

   if (!isLoaded) return <h2>Loading...</h2>;

   const { name, desc, price, image, likes, type } = offering;

   return (
      <>
         <h3>{type.toUpperCase()} SERVICE DETAILS</h3>
         <h3>{name}</h3>
         <section>
            <div>
               <img src={image} alt={desc} />
               <div>❤️&nbsp;{likes}</div>
            </div>
            <div>{desc}</div>
            <div>{price === 0 ? 'FREE!' : 'price: $' + price}</div>
         </section>
      </>
   );
}

export default OfferingDetail;
