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

   const { name, desc, price, image, likes } = offering;

   return (
      <>
         <h1>{name}</h1>
         <section>
            <div>
               <img src={image} alt={desc} />
               <div>{likes}</div>
            </div>
            <div>{desc}</div>
            <div>{price}</div>
         </section>
      </>
   );
}

export default OfferingDetail;
