import React from 'react';
import { useSpring, animated } from 'react-spring'

import homeParty from '../images/home-party-page.jpg';
import wandering from '../images/wandering-comma.jpg';
import nightIn from '../images/a-night-in-page.jpg';
import codeQuiz from '../images/coding-quiz.jpg';
import pwa from '../images/pwa-text-editor.jpg';
import weather from '../images/weather-dashboard.jpg';
import scheduler from '../images/scheduler.jpg';




export default function Portfolio(props) {
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

          <div className="project-card col m-3 p-4">
            <img
              alt={homeParty}
              className="card-img-top"
              src={homeParty}
            />
            <div className="card-body">
              <h5 className="card-title">Home Party</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div>



          {/* card 2 */}
          <div className="project-card col m-3 p-4" >
            <img
              alt={wandering}
              className="card-img-top"
              src={wandering}
            />
            <div className="card-body">
              <h5 className="card-title">The Wandering Comma</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="project-card col m-3 p-4" >
            <img
              alt={nightIn}
              className="card-img-top"
              src={nightIn}
            />
            <div className="card-body">
              <h5 className="card-title">A Night In</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 4 */}
          <div className="project-card col m-3 p-4" >
            <img
              alt={pwa}
              className="card-img-top"
              src={pwa}
            />
            <div className="card-body">
              <h5 className="card-title">PWA Text Editor</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 5 */}
          <div className="project-card col m-3 p-4" >
            <img
              alt={weather}
              className="card-img-top"
              src={weather}
            />
            <div className="card-body">
              <h5 className="card-title">Weather Dashboard</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 6 */}
          <div className="project-card col m-3 p-4" >
            <img
              alt={scheduler}
              className="card-img-top"
              src={scheduler}
            />
            <div className="card-body">
              <h5 className="card-title">Simple Scheduler</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div>


          {/* card 7 */}
          {/* <div className="project-card col m-3 p-4" >
            <img
              alt={codeQuiz}
              className="card-img-top"
              src={codeQuiz}
            />
            <div className="card-body">
              <h5 className="card-title">Coding Quiz App</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div> */}

          {/* end of cards */}



          <h2 className='mt-5'>Back End Demos</h2>
          <p>
            back end demos.
          </p>
          <hr></hr>
          {/* video card 1 */}
          <div className="video-card col m-3 p-4" >
            <div className="card-body">
              <h5 className="card-title">BubbleWorld</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://www.youtube.com/embed/L7r7JGepZZ4" className="link2">watch the demo</a>
              </div>
            </div>
          </div>

          {/* video card 2 */}
          <div className="video-card col m-3 p-4" >
            <div className="card-body">
              <h5 className="card-title">eCommerce</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://www.youtube.com/embed/L7r7JGepZZ4" className="link2">watch the demo</a>
              </div>
            </div>
          </div>

          {/* video card 3 */}
          <div className="video-card col m-3 p-4" >
            <div className="card-body">
              <h5 className="card-title">Employee Library</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://www.youtube.com/embed/L7r7JGepZZ4" className="link2">watch the demo</a>
              </div>
            </div>
          </div>

          {/* video card 4 */}
          <div className="video-card col m-3 p-4" >
            <div className="card-body">
              <h5 className="card-title">Team Generator</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://www.youtube.com/embed/L7r7JGepZZ4" className="link2">watch the demo</a>
              </div>
            </div>
          </div>

          {/* <div className=" projects-body video-card">
              
              <div className="mt-3 embed-responsive embed-responsive-16by9">
                <iframe width="1252" height="704" src="https://www.youtube.com/embed/5A9lBIHdNGY" title="Bubble World Demo"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen></iframe>
              </div>

              <div className="mt-3 embed-responsive embed-responsive-16by9">
                <iframe width="860" height="484" src="https://www.youtube.com/embed/L7r7JGepZZ4" title="eCommerce Back End Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

              <div className="mt-3 embed-responsive embed-responsive-16by9">
                <iframe width="860" height="484" src="https://www.youtube.com/embed/ZaHrOHW6bLg" title="Demo for Team Generator Project" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

              <div className="mt-3 embed-responsive embed-responsive-16by9">
                <iframe width="860" height="484" src="https://www.youtube.com/embed/r-aP_ufH47U" title="Employee Library Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>

            </div> */}

        </div>

      </section>
    </div >



  );
}
