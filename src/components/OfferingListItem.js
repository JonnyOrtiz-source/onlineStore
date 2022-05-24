import { useState } from 'react';
import OfferingDetail from './OfferingDetail';

const OfferingListItem = ({ offering }) => {
   const { id, image, name, desc, price, likes } = offering;

   const [likesCount, setLikesCount] = useState(likes);

   const handleLike = (likes) => setLikesCount(likes + 1);

   const handleClick = (e) => {
      console.log(e.target);
      <OfferingDetail />;
   };

   return (
      <li onClick={handleClick}>
         <h2>{name}</h2>
         <figure>
            <img src={image} alt={name} />
            <button onClick={handleLike}>❤️{likesCount}</button>
         </figure>
         <section>
            <p>{desc}</p>
            <p>{price}</p>
         </section>
      </li>
   );
};

export default OfferingListItem;
