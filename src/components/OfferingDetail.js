import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

function OfferingDetail({ num, isAdmin, handleLikes }) {
   const [offering, setOffering] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);

   const { id } = useParams();

   useDocumentTitle('Serenity Springs - Service Detail');

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

   const editLink = <Link to={`/offerings/${id}/edit`}>Edit</Link>;

   return (
      <>
         <h3>{type.toUpperCase()} SERVICE DETAILS</h3>
         <h3>{name}</h3>
         <div>
            <figure>
               <img src={image} alt={desc} />
               <figcaption>
                  ❤️&nbsp;{likes}
                  &nbsp;&nbsp;{isAdmin ? editLink : null}
               </figcaption>
            </figure>
         </div>
         <section>
            <div>{desc}</div>
            <div>{price === 0 ? 'FREE!' : 'price: $' + price}</div>
         </section>
      </>
   );
}

export default OfferingDetail;
