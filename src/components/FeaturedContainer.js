import Featured from './Featured';

function FeaturedContainer({ offerings, num }) {
   let featured;
   setTimeout(() => {
      console.log('Delayed for 1 second.');
      if (offerings.length > 0) {
         featured = <Featured offerings={offerings} num={num} />;
      }
   }, '1000');

   return <div>{featured}</div>;
}

export default FeaturedContainer;
