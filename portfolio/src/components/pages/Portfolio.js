import React from 'react';
import homeParty from '../homeparty_fresh.png';
import wandering from '../Wandering Comma.png';
import portgif from '../React App.gif';

export default function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>
        Donec a volutpat quam. Curabitur nec varius justo, sed rutrum ligula. Curabitur pellentesque turpis sit amet eros iaculis, a mollis arcu dictum. Ut vel ante eget massa ornare placerat. Etiam nisl orci, finibus sodales volutpat et, hendrerit ut dolor. Suspendisse porta dictum nunc,
        sed pretium risus rutrum eget. Nam consequat, ligula in faucibus vestibulum, nisi justo laoreet risus, luctus luctus mi lacus sit amet
        libero.
      </p>
      
      <section className='container d-flex flex-wrap'>
        <div className='row'>
          {/* card 1 */}
          <div className="project-card col m-3 p-4" >
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
          <div className="project-card col m-3 p-4" >
            <img
              alt={portgif}
              className="card-img-top"
              src={portgif}
            />
            <div className="card-body">
              <h5 className="card-title">React Portfolio</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology" className="link">visit the repo</a>
                <a href="https://github.com/archonology" className="link2">visit the live site</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div >

  );
}
