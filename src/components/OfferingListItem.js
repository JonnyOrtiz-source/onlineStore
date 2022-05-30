import { Link } from 'react-router-dom';

const OfferingListItem = ({
   offering,
   handleLikes,
   isAdmin,
   onUpdateOffering,
}) => {
   const { id, image, name, desc, price, likes } = offering;

   return (
      <li>
         <Link to={`/offerings/${id}`}>
            <h2>{name}</h2>
         </Link>

         <figure>
            <img src={image} alt={name} />
            <figcaption>
               <button onClick={() => handleLikes(id)}>❤️&nbsp;{likes}</button>
               {isAdmin ? <Link to={`/offerings/${id}/edit`}>Edit</Link> : null}
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
