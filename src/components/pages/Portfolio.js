import React from 'react'
import ProjectCard from './ProjectCard';

const projects = [
  {
    _id: 1,
    customClass: 'card-img-top flip',
    title: 'Home Party',
    description: 'A full stack website built collaboratively with RESTful practices, managed by Reed. Home Party is a place to invite your family and friends for tracking your favorite homes and all the things you would like to have in it. Utilizes MySQL, Sequelize, Node, Javascript, Bootstrap, Nodemailer, custom CSS, and HTML.',
    repoUrl: 'https://github.com/archonology/Home-Party',
    deployedUrl: 'https://home-party-app.herokuapp.com'
  },
  {
    _id: 2,
    customClass: 'card-img-top flip2',
    title: 'The Wandering Comma',
    description: 'A full stack tech blog created with RESTful practices. Utilizes MySQL, Sequelize, Express, Node, Javascript, Bootstrap, custom CSS, and HTML.',
    repoUrl: 'https://github.com/archonology/The-Wandering-Comma-Tech-Blog',
    deployedUrl: 'https://the-wandering-comma.herokuapp.com'
  },
  {
    _id: 3,
    customClass: 'card-img-top flip3',
    title: 'A Night In',
    description: 'A frontend app built collaboratively on Github. Utilizes public APIs to solve the problem of planning a night home of dining, drinking, and watching a show. This app will help a user find culinary and media inspiration through randomized searches to find ideas. Javascript, Tailwind, JQUERY, custom CSS, HTML, localStorage, and public fetch APIs.',
    repoUrl: 'https://github.com/archonology/A-Night-In',
    deployedUrl: 'https://archonology.github.io/A-Night-In/'
  },
  {
    _id: 4,
    customClass: 'card-img-top flip4',
    title: 'PWA Text Editor',
    description: 'A full stack PWA text editor that affords an easy place to keep coding notes or practice functions. You can save it to your local device (via Chrome) Uses Webpack, Workbox, Express, Idb, and more.',
    repoUrl: 'https://github.com/archonology/PWA-Text-Editor',
    deployedUrl: 'https://simple-pwa-text-editor-84.herokuapp.com'
  },
  {
    _id: 5,
    customClass: 'card-img-top flip5',
    title: 'Weather Dashboard',
    description: 'A frontend weather tracking website that uses fetch API and localStorage. Needed a site where weather searches were saved so that the user could easily check weather updates while they are traveling.',
    repoUrl: 'https://github.com/archonology/Weather-Dashboard',
    deployedUrl: 'https://archonology.github.io/Weather-Dashboard/'
  },
  {
    _id: 6,
    customClass: 'card-img-top flip6',
    title: 'Simple Scheduler',
    description: 'Using Javascript and CSS to create a simple, frontend, work day scheduling application.',
    repoUrl: 'https://github.com/archonology/Work-Day-Scheduler',
    deployedUrl: 'https://archonology.github.io/Work-Day-Scheduler/'
  }
];

export default function Portfolio(props) {

  return (
    <div>
      <h2>Portfolio</h2>
      <hr></hr>
      <p>
        Below you can check out some of my favorite, recent projects.  The first 6 are full-stack or front-end; below that, you'll find demos to my favorite back-end applications.
      </p>


      <section className='container d-flex flex-wrap justify-content-center'>
        <div className='row'>
          {/* map through projects object */}
          {projects.map((project) => (

            <div key={project._id} className="project-card col m-3 p-4">
              <ProjectCard customClass={project.customClass} title={project.title} description={project.description} repoUrl={project.repoUrl} deployedUrl={project.deployedUrl} />
            </div>

          ))}

        </div>
      </section>

      <hr></hr>
      <h2 className='mt-5'>Back-End Demos</h2>
      <p>
        These applications are purely back-end, so they are without front-end facing views. The demonstrations below show the functionality of the routes and back-end user interface.
      </p>
      <hr></hr>
      <section className='container d-flex flex-wrap'>
        <div className='row'>
          {/* video card 1 */}
          <div className="video-card col-12 mb-3 p-4" >
            <div className="card-body">
              <div className="ratio ratio-16x9 mb-4">
                <iframe
                  className='video'
                  src="https://www.youtube.com/embed/5A9lBIHdNGY"
                  title="Bubble World Demo"
                  frameBorder="0"
                  allowFullScreen></iframe>
              </div>
              <h5 className="card-title">Bubble World</h5>
              <p className="card-text">An experiment in understanding and developing a social media app. Bubble World is a backend application that utilizes MongoDB, Mongoose, and Express to explore the possiblities of social media.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology/Bubble-World" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://youtu.be/5A9lBIHdNGY" target='_blank' rel='noreferrer' className="link2">watch the demo</a>
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
                  title="eCommerce Back End Demo" frameBorder="0"
                  allowFullScreen>
                </iframe>
              </div>
              <h5 className="card-title">eCommerce</h5>
              <p className="card-text">Back end application to develop my skill in back end technologies and learn about managing ORM techniques.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology/E-Commerce-Back-End" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://youtu.be/L7r7JGepZZ4" target='_blank' rel='noreferrer' className="link2">watch the demo</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container d-flex flex-wrap'>
        <div className='row'>

          {/* video card 4 */}
          <div className="video-card col m-2 p-4" >
            <div className="card-body">
              <h5 className="card-title">Team Generator</h5>
              <p className="card-text">I wanted to be able to generate an html page for team projects. Having a page to keep track of my group helps keep things organized and makes it easy to find contact info for my team and important links, like their github accounts or school info.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology/Team-Profile-Generator" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://youtu.be/ZaHrOHW6bLg" target='_blank' rel='noreferrer' className="link2">watch the demo</a>
              </div>
            </div>
          </div>

          {/* video card 3 */}
          <div className="video-card col m-3 p-4" >
            <div className="card-body">
              <h5 className="card-title">Employee Library</h5>
              <p className="card-text">Backend employee database management program. Solves the need for managing an employee database easily through the backend.</p>
              <div className='d-flex justify-content-end'>
                <a href="https://github.com/archonology/Employee-Library" target='_blank' rel='noreferrer' className="link">visit the repo</a>
                <a href="https://youtu.be/r-aP_ufH47U" target='_blank' rel='noreferrer' className="link2">watch the demo</a>
              </div>
            </div>
          </div>

        </div>

      </section>
    </div >



  );
}
