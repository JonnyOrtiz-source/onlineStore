import Featured from './Featured';
import Delay from './Delay';

function FeaturedContainer({ offerings, num }) {
   return (
      <Delay>
         <h2>This month's featured offering</h2>
         <Featured offerings={offerings} num={num} />
      </Delay>
   );
}

export default FeaturedContainer;
