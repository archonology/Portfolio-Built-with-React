import React from 'react';
import resume from '../materials/MeherDevs_2023_Resume.pdf';

export default function Resume() {
  return (
    <section >
      <h2>Resume</h2>
      <hr></hr>
      <div className='container d-flex flex-wrap'>
        <div className='row'>

          <div className='resume2 col m-3 mb-1 p-4'>
            <h4>Languages & Specialties:</h4>
            <p>Javascript, CSS3, HTML5, React, Node, GraphQL, Apollo Server, SQL databases, MERN stack, and RESTful practices
            </p>

          </div>

          <div className='resume col m-3 mb-1 p-4'>

            <h4>Involvement & Interests:</h4>
            <p>   javascript30.com, Front End Happy Hour(podcast), new tech, cooking, hiking, art, gaming, music, my  partner, our three daughters, and our fur children, Alma & Reiko.
            </p>

          </div>

          <div className='resume row m-2 mt-0 p-4'>

            <h4>Education:</h4>
            <p>  <strong> Boot Camp Certificate:</strong> University of Minnesota, Minneapolis, MN | June 2022 - December 2022
              <br></br>
              A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, NoSQL, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS (MERN and RESTFul practices). <strong>GPA: 4.0+</strong>
            </p>

            <p>  <strong> BFA:</strong> University of Minnesota, Morris, MN | August 2004 - June 2008
              <br></br>
              English Literature with a minor in Studio Art.  <strong>GPA: 3.74</strong>
            </p>

          </div>
        </div>
      </div>

      <div className='d-flex justify-content-center'>
        <a href={resume} className='link3' download>Download Resume</a>
      </div>
    </section>
  );
}
