import React from 'react';
import resume from '../materials/rm-resume.pdf';

export default function Resume() {
  return (
    <section >
      <div className='container d-flex flex-wrap'>
        <div className='row'>
          <div className='resume col m-3 p-4'>

            <h4>Developer Highlights:</h4>

            <p>  • 17 repositories (since June of 2022), and counting, worth of learning and executing new and interesting apps on GitHub.
            </p>
            <p>   • Clean code written in HTML, CSS, JS with front and backend technologies.
            </p>
            <p>   • Experience working on coding teams in an AGILE environment, and flying solo, too, to push out MVP and beyond.
            </p>
            <p>   • Always ready to learn, improve, and refactor -- as evidenced in my GitHub commit history for any project.
            </p>
          </div>
          <div className='resume2 col m-3 p-4'>
            <h4>Professional Soft-Skills:</h4>

            <p> • 5 years of leadership, tackling mountains of quick deadlines, and cross-platform collaboration at Cook County as a social worker.
            </p>
            <p>   • 2 years of pushing out big projects and leading groups via experimentation and creative problem-solving at Cook County Whole Foods Co-op as a marketing manager.
            </p>
            <p>  • 3 years educating, planning, and collaboration as an ESL educator in South Korea.
            </p>

          </div>

        </div>
      </div>
      <h5> Bootcamp trained in JAVASCRIPT | CSS |  MERN | ORM | HTML | SEQUELIZE | MySQL | Etc. </h5>
      <div className='d-flex justify-content-center'>
        <a href={resume} className='link3' download>Download Resume</a>
      </div>
    </section>
  );
}
