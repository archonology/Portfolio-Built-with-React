import React from 'react';
import resume from '../materials/rm-resume.pdf';

export default function Resume() {
  return (
    <section >
      <div>

        <div className='resume'>


          <h4>Developer Highlights:</h4>

          <p>  • 16 repositories (since June of 2022), and counting, worth of learning and executing new and interesting apps on GitHub.
          </p>
          <p>   • Clean code written in HTML, CSS, JS with front and backend technologies such as Express, Sequelize, MySQL, JQuery, Handlebars, Tailwind, and Bootstrap.
          </p>
          <p>   • Experience working on coding teams in an AGILE environment, and flying solo, too, to push out MVP and beyond.
          </p>
          <p>   • Starting CS50 to get certified in Computer Science following my current Full Stack Bootcamp.
          </p>
          <p>   • Always ready to learn, improve, and refactor -- as evidenced in my GitHub commit history for any project.
          </p>

          <h4>Professional Soft-Skills:</h4>

          <p> • 5 years of leadership, tackling mountains of quick deadlines, and cross-platform collaboration at Cook County as a social worker. As a case manager at Cook County Human Services, I worked with amazing social workers, tribes, therapists, teachers, parents, grandparents, attorneys, judges… the list goes on and on. I worked with all these groups and individuals every day on various cases to solve issues, to connect resources, to broker plans and outcomes that benefit families. The child welfare system needs some real healing, and I got the opportunity to collaborate with so many wonderful people to make lasting changes to the system and for families I worked with.
          </p>
          <p>   • 2 years of pushing out big projects and leading groups via experimentation and creative problem-solving at Cook County Whole Foods Co-op as a marketing manager.
          </p>
          <p>  • 3 years educating, planning, and collaboration as an ESL educator in South Korea.
          </p>

        </div>

      </div>
      <div className='d-flex justify-content-center'>
      <a href={resume} className='link3' download>Download Resume</a>
      </div>
    </section>
  );
}
