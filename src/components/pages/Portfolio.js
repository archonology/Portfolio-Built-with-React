import React, { useState } from 'react'
import { useSpring, a } from 'react-spring'






export default function Portfolio() {

  // const handleSrcChange = (img) => img.src={homePartyGif};

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
              <h5 className="card-title">The Wandering Comma</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="project-card col m-3 p-4" >
          <div className="card-img-top flip2">
            </div>
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
          <div className="card-img-top flip3">
            </div>
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
          <div className="card-img-top flip4">
            </div>
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
          <div className="card-img-top flip5">
            </div>
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
          <div className="card-img-top flip6">
            </div>
            <div className="card-body">
              <h5 className="card-title">Simple Scheduler</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div>

          {/* end of cards */}



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
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://www.youtube.com/embed/L7r7JGepZZ4" className="link2">watch the demo</a>
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
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://www.youtube.com/embed/L7r7JGepZZ4" className="link2">watch the demo</a>
              </div>
            </div>
          </div>

          {/* video card 3 */}
          <div className="video-card col-12 mb-3 p-4" >
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
          <div className="video-card col-12 mb-3 p-4" >
            <div className="card-body">
              <h5 className="card-title">Team Generator</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://www.youtube.com/embed/L7r7JGepZZ4" className="link2">watch the demo</a>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div >



  );
}
