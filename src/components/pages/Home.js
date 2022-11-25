import React, { useState } from 'react'
import { useSpring, animated, } from 'react-spring';
import portrait from '../images/PortraitGif.gif';


export default function Home() {



  return (
    <main >

<div className='row d-flex justify-content-center'>
      <div className='col order-2 '>
        <img
          alt={portrait}
          className="portrait"
          src={portrait}
        />
      </div>

        <div className='col order-1 '>
          <h2>Home</h2>


          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
            velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
            ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
            non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
            ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
            rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
            tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
            porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
            vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
            fames ac ante ipsum primis in faucibus.
          </p>
        </div>

  
      </div>

    </main>
  );
}