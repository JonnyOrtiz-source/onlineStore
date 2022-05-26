import { Link } from 'react-router-dom';

function Featured(offerings, num) {
   console.log(offerings, num);
   return (
      <div>
         <Link to={`/offerings/${num}`}>
            <h2>{offerings[num].name}</h2>
         </Link>

         <figure>
            <img src={offerings[num].image} alt={offerings[num].desc} />
            <figcaption>❤️&nbsp;{offerings[num].likes}</figcaption>
         </figure>
         <section>
            <p>{offerings[num].desc}</p>
            <p>
               {offerings[num].price === 0
                  ? 'FREE!'
                  : 'price: $' + offerings[num].price}
            </p>
         </section>
      </div>
   );
}

export default Featured;
