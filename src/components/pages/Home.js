import React from 'react'
import portrait from '../images/PortraitGif.gif';


export default function Home() {



  return (
    <main >

      <div className='row d-flex'>
        <div className='col col-md-6 col-lg-6  order-2'>
          <img
            alt={portrait}
            className="portrait"
            src={portrait}
          />
        </div>

        <div className='col col-md-3 col-lg-6 order-1 '>
          <h2>Home</h2>
          <hr></hr>
          <p>
            MeherDevs is Reed Meher: a budding web developer who is seeking compelling projects and new ideas.  On this site you will find Reed's development portfolio, a contact form, and links to his Github and LinkedIn pages. Check out Reed's resume, which is available for download in the resume section of this site.
          </p>
          <p>
            Thanks for stopping by! ☕️🪴
          </p>
          <p>
            -MeherDevs
          </p>
        </div>


      </div>

    </main>
  );
}