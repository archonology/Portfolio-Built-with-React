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
        I’m a fresh full-stack web developer who can hold his own on the front-end and back-end. I have a track record of 12 years of top-notch soft skills and the ability to learn, pivot, and deliver clean, organized, efficient code in a short amount of time.
        </p>
      </div>
    </div>
  );
}
