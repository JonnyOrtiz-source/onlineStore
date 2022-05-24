import Benes from './Benes';
import FeaturedContainer from './FeaturedContainer';

function Home() {
   return (
      <>
         <div>
            <h1>Welcome to Serenity Springs</h1>
         </div>
         <div>
            <h3>
               Lorem Ipsum is simply dummy text of the printing and typesetting
               industry.
            </h3>
         </div>
         <Benes />
         <FeaturedContainer />
      </>
   );
}

export default Home;
