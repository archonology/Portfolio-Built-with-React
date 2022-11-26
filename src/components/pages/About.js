import React from 'react';
import portrait from '../images/PortraitGif.gif';

export default function About() {
  return (

    <div className='row d-flex justify-content-center'>
      <div className='col col-md-6 col-lg-6 order-2 '>
        <img
          alt={portrait}
          className="portrait"
          src={portrait}
        />
      </div>

      <div className='col col-md-3 col-lg-6 order-1 '>
        <h2>About</h2>
        <p>
          Reed Meher (Meherdevs) is a junior full-stack web developer who can hold his own on the front-end and back-end. He has a track record of 12 years of top-notch soft skills and the ability to learn, pivot, and deliver clean, organized, and efficient code.
        </p>
        <p>
          Reed lives in Grand Marais, MN, along the edge of the Gitchigumi with his three daughters, his partner, grandparents, and their fur-children, Alma and Reiko. They love to make art, collect wildflowers, have dance parties.
        </p>
        <p>
          When Reed and his partner get the chance(rare!), they love to travel, visit breweries, hike with Alma, duel in MtG, and craft goods in ESO.
        </p>
      </div>
    </div>
  );
}
