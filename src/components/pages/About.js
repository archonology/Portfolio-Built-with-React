import React from 'react';
import portrait from '../images/PortraitGif.gif';

export default function About() {

  return (

    <div>
        <h2>About Reed Meher</h2>
        <hr></hr>
      <div className='col col-md-7'>
        <p>
          Reed Meher (Meherdevs) is a Full Stack Web Developer with a background in writing, marketing, design, and social work.  Refined editorial skills and creative problem solving to develop user-friendly applications. Recognized by employers and clients for kindness, humor, leadership, quality of work, and getting things done with integrity. 
        </p>
        <p>
          Reed lives in Grand Marais, MN, along the edge of the Gitchigumi with his three daughters, his partner, grandparents, and their fur-children, Alma and Reiko. They love to make art, go exploring, cook food together, play games, and have dance parties.
        </p>
        <p>
          When Reed and his partner get the chance(rare!), they love to travel, visit breweries, hike with Alma, square off in epic MtG duels, and craft virtual goods.
        </p>
      </div>

      <div className='col col-md-6 col-lg-6 order-2 '>
        <img
          alt={portrait}
          className="portrait"
          src={portrait}
        />
      </div>

    </div>
    
  );
}
