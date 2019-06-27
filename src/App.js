import React from 'react';
import './App.css';

function App(props) {
  const resume = props.resume;

  const workExp = resume.workExp.map(work => {
    return (
      <li>
        <h3>{work.company}</h3>
        <p>{work.jobTitle}, {work.date}</p>
        <p>{work.desc}</p>
      </li>
    );
  });

  console.log(workExp);

  return (
    <div id="App">
      <header>
        <h1>{resume.name}'s Resume</h1>
      </header>

      <main>
        <section id="education">
          <h2>Education</h2>
          <ul>
            <li>
              <h3>Lorem Ipsum University</h3>
              <p>B.A. in Placeholding, June 2015</p>
              <p>4.0 GPA</p>
            </li>
          </ul>
        </section>

        <section id="work-xp">
          <h2>Work Experience</h2>
          <ul>
            {workExp}
          </ul>
        </section>

        <section id="contact-info">
          <h2>Contact Info</h2>
        </section>

      </main>
    </div>
  );
}

export default App;