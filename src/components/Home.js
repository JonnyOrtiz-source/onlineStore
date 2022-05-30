import Benes from './Benes';
import FeaturedContainer from './FeaturedContainer';

function Home({ offerings, num }) {
   let featuredCont;
   setTimeout(() => {
      console.log('Delayed for 1 second.', offerings, num);
      if (offerings.length > 0) {
         featuredCont = <FeaturedContainer offerings={offerings} num={num} />;
      }
   }, '1000');

   return (
      <>
         <Benes />
         {/* Conditionally render FeaturedContainer when offerings.length > 0 */}
      </>
   );
}

export default Home;
