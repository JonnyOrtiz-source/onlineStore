import React from 'react';

function About() {
   return (
      <div>
         <h3>ABOUT US</h3>
         <h3>
            Serenity Springs is your destination for your favorite salon and spa
            treatments.
         </h3>
         <h3>Our salon products are handmade, eco-friendly, and organic.</h3>
         <button
            onClick={() =>
               window.open('https://calendly.com/yourserenitysprings', '_blank')
            }
         >
            Book Now!
         </button>
      </div>
   );
}

export default About;
