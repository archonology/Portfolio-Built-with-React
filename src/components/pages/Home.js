import React from 'react'
import portrait from '../images/PortraitGif.gif';


export default function Home() {



  return (
    <main >
          <h2>Home</h2>
          <hr></hr>
        <div className='col col-md-10 col-lg-6 order-2 '>
          <p>
            MeherDevs is Reed Meher: a budding web developer who is seeking compelling projects, dynamic teamwork, and new ideas.  On this site you will find Reed's development portfolio, a contact form, his resume, and links to his Github and LinkedIn pages. 
          </p>
          <p>
            Thanks for stopping by! ☕️🪴
          </p>
          <p>
            -MeherDevs
          </p>
        </div>

        <div className='col col-md-6 col-lg-6 order-1 self'>
          <img
            alt={portrait}
            className="portrait"
            src={portrait}
          />
        </div>

    </main>
  );
}