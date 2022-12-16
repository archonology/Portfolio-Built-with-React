import React from 'react';
import resume from '../materials/reedMeher-resume.pdf';

export default function Resume() {
  return (
    <section >
      <h2>Resume</h2>
      <hr></hr>
      <div className='container d-flex flex-wrap'>
        <div className='row'>

          <div className='resume2 col m-3 mb-1 p-4'>
            <h4>Key Work Accomplishments:</h4>
            <br></br>
            <p> • Top-ranked from client feedback, quality of documentation, critical-thinking skills, and never missing deadlines. (Cook County PHHS)
            </p>
            <p>   • Known and recognized by supervisors, attorneys, tribal agencies, and judges for settling cases ahead of trial via advanced skills in mediation, communication, investigation, planning, and collaboration. (Cook County PHHS)
            </p>
            <p>  • Recognized for increasing quality of advertising, customer relations, and quality of signage and branding. Store revenue up 22% by 2017. (CCWFC)
            </p>
            <p>  • Advanced the quality of curriculum testing, lesson planning, and class materials through research, development, and implementation. (Palisades Academy)
            </p>

          </div>

          <div className='resume col m-3 mb-1 p-4'>

            <h4>Developer Highlights:</h4>
            <br></br>
            <p>   • Clean code written in HTML, CSS, JS with front and backend technologies.
            </p>
            <p>   • Experience working on coding teams in an AGILE environment, and flying solo, too, to push out MVP and beyond.
            </p>
            <p>   • Always ready to learn, improve, and refactor -- as evidenced in my GitHub commit history for any project.
            </p>
          </div>

          <div className='resume row m-2 mt-0 p-4'>

            <h4>Education:</h4>

            <p>  <strong> Boot Camp Certificate:</strong> University of Minnesota, Minneapolis, MN </p>
            <p> A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript, JQuery, Bootstrap, NoSQL, Node.js, MySQL, MongoDB, Express, Handelbars.js, and ReactJS (MERN and RESTFul practices).
            </p>

            <p>  <strong> BFA:</strong> University of Minnesota, Morris, MN </p>
            <p>  English Literature with a minor in Studio Art.  GPA: 3.74
            </p>

          </div>
        </div>
      </div>
      <h5>Trained in JAVASCRIPT | CSS |  MERN | ORM | HTML | SEQUELIZE | MySQL | + More </h5>
      
      <div className='d-flex justify-content-center'>
        <a href={resume} className='link3' download>Download Resume</a>
      </div>
    </section>
  );
}
