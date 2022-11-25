import React, { useState } from 'react'
import { useSpring, a } from 'react-spring'


export default function Portfolio() {

  return (
    <div>
      <h2>Portfolio</h2>

      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero.
      </p>
      <hr></hr>

      <section className='container d-flex flex-wrap'>
        <div className='row'>

          {/* card 1 */}
          <div className="project-card col m-3 p-4" >
            <div className="card-img-top flip">
            </div>
            <div className="card-body">
              <h5 className="card-title">Home Party</h5>
              <p className="card-text">A full-stack website built collaboratively. Home Party is a place to invite your family and friends for tracking your favorite homes and all the things you would like to have in it.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology/Home-Party" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://pacific-lake-30103.herokuapp.com" target='_blank' rel='noreferrer' className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="project-card col m-3 p-4" >
            <div className="card-img-top flip2">
            </div>
            <div className="card-body">
              <h5 className="card-title">The Wandering Comma</h5>
              <p className="card-text"> This application allows for users to sign up, login in, and create and edit posts and comments.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology/The-Wandering-Comma-Tech-Blog" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://morning-caverns-74911.herokuapp.com/" target='_blank' rel='noreferrer' className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="project-card col m-3 p-4" >
            <div className="card-img-top flip3">
            </div>
            <div className="card-body">
              <h5 className="card-title">A Night In</h5>
              <p className="card-text">Utilizes public APIs to solve the problem of planning a night home of dining, drinking, and watching a show. This app will help a user find culinary and media inspiration through randomized searches to find ideas.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology/A-Night-In" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://archonology.github.io/A-Night-In/" target='_blank' rel='noreferrer' className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="project-card col m-3 p-4" >
            <div className="card-img-top flip4">
            </div>
            <div className="card-body">
              <h5 className="card-title">PWA Text Editor</h5>
              <p className="card-text">Full stack PWA text editor that creates an easy place to keep coding notes or practice functions. Uses Webpack, Workbox, Express, and Idb.</p>
              <div className='d-flex justify-content-end'>
              <a href="https://github.com/archonology/PWA-Text-Editor" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://stormy-brook-86933.herokuapp.com/" target='_blank' rel='noreferrer' className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 5 */}
          <div className="project-card col m-3 p-4" >
            <div className="card-img-top flip5">
            </div>
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">A weather tracking website that uses fetch API and localStorage. Needed a site where weather searches were saved so that the user could easily check weather updates while they are traveling.</p>
              <div className='d-flex justify-content-end'>
              <a href="https://github.com/archonology/Weather-Dashboard" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://archonology.github.io/Weather-Dashboard/" target='_blank' rel='noreferrer' className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div className="project-card col m-3 p-4" >
            <div className="card-img-top flip6">
            </div>
            <div className="card-body">
              <h5 className="card-title">Simple Scheduler</h5>
              <p className="card-text">Using Javascript and CSS to create a simple work day scheduling application.</p>
              <div className='d-flex justify-content-end'>
              <a href="https://github.com/archonology/Work-Day-Scheduler" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://archonology.github.io/Work-Day-Scheduler/" target='_blank' rel='noreferrer' className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* end of site cards */}



          <h2 className='mt-5'>Back End Demos</h2>
          <p>
            back end demos.
          </p>
          <hr></hr>
          {/* video card 1 */}
          <div className="video-card col-12 mb-3 p-4" >
            <div className="card-body">
              <div className="ratio ratio-16x9 mb-4">
                <iframe
                  className='video'
                  src="https://www.youtube.com/embed/5A9lBIHdNGY"
                  title="Bubble World Demo"
                  frameborder="0"
                  allowFullScreen></iframe>
              </div>
              <h5 className="card-title">BubbleWorld</h5>
              <p className="card-text">An experiment in understanding and developing a social media app. Bubble World is a backend application that utilizes MongoDB, Mongoose, and Express to explore the possiblities of social media.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology/Bubble-World" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://youtu.be/5A9lBIHdNGY" target='_blank' rel='noreferrer'className="link2">watch the demo</a>
              </div>
            </div>
          </div>

          {/* video card 2 */}
          <div className="video-card col-12 mb-3 p-4" >
            <div className="card-body">

              <div className="ratio ratio-16x9 mb-4">
                <iframe
                  className='video'
                  src="https://www.youtube.com/embed/L7r7JGepZZ4"
                  title="eCommerce Back End Demo" frameborder="0"
                  allowfullscreen>
                </iframe>
              </div>
              <h5 className="card-title">eCommerce</h5>
              <p className="card-text">Back end application to develop my skill in back end technologies and learn about managing ORM techniques.</p>
              <div className='d-flex justify-content-end'>
              <a href="https://github.com/archonology/E-Commerce-Back-End" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://youtu.be/L7r7JGepZZ4" target='_blank' rel='noreferrer'className="link2">watch the demo</a>
              </div>
            </div>
          </div>

          {/* video card 3 */}
          <div className="video-card col-12 mb-3 p-4" >
            <div className="card-body">
              <h5 className="card-title">Employee Library</h5>
              <p className="card-text">Backend employee database management program. Solves the need for managing an employee database easily through the backend.</p>
              <div className='d-flex justify-content-end'>
              <a href="https://github.com/archonology/Employee-Library" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://youtu.be/r-aP_ufH47U" target='_blank' rel='noreferrer'className="link2">watch the demo</a>
              </div>
            </div>
          </div>

          {/* video card 4 */}
          <div className="video-card col-12 mb-3 p-4" >
            <div className="card-body">
              <h5 className="card-title">Team Generator</h5>
              <p className="card-text">I wanted to be able to generate an html page for team projects. Having a page to keep track of my group helps keep things organized and makes it easy to find contact info for my team and important links, like their github accounts or school info.</p>
              <div className='d-flex justify-content-end'>
              <a href="https://github.com/archonology/Team-Profile-Generator" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://youtu.be/ZaHrOHW6bLg" target='_blank' rel='noreferrer'className="link2">watch the demo</a>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div >



  );
}
