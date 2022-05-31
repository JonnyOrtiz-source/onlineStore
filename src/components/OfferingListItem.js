import { Link } from 'react-router-dom';
import { useDocumentTitle } from '../hooks/useDocumentTitle';

const OfferingListItem = ({
   offering,
   handleLikes,
   isAdmin,
   onUpdateOffering,
   onDeleteOffering,
   BASE_URL,
}) => {
   const { id, image, name, desc, price, likes } = offering;

   const handleDelete = () => {
      fetch(`${BASE_URL}/offerings/${id}`, {
         method: 'DELETE',
      });
      onDeleteOffering(offering);
   };

   useDocumentTitle('Serenity Springs - All Services');

   return (
      <li>
         <Link to={`/offerings/${id}`}>
            <h2>{name}</h2>
         </Link>

         <figure>
            <img src={image} alt={name} />
            <figcaption>
               <button onClick={() => handleLikes(id)}>❤️&nbsp;{likes}</button>
               &nbsp;&nbsp;
               {isAdmin ? <Link to={`/offerings/${id}/edit`}>✎</Link> : null}
               &nbsp;&nbsp;
               {isAdmin ? <button onClick={handleDelete}>🗑</button> : null}
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
