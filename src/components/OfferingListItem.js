import { useState } from 'react';
import { Link } from 'react-router-dom';

const OfferingListItem = ({ offering }) => {
   const { id, image, name, desc, price, likes } = offering;

   const [likesCount, setLikesCount] = useState(likes);

   const handleLike = (likes) => setLikesCount(likes + 1);

   return (
      <li>
         <Link to={`/offerings/${id}`}>
            <h2>{name}</h2>
         </Link>

         <figure>
            <img src={image} alt={name} />
            <figcaption>
               <button onClick={handleLike}>❤️&nbsp;{likesCount}</button>
            </figcaption>
         </figure>
         <section>
            <p>{desc}</p>
            <p>{price === 0 ? 'FREE!' : 'price: $' + price}</p>
         </section>
      </li>
   );
};

export default OfferingListItem;
