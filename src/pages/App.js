import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      {/* Sticky navigation bar */}
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About Me</a> 
        <a href="#education">Education</a>
        <a href="#projects">Projects</a>
        <a href="#cv">CV</a>
        <a href="#teaching">Teaching</a>
        <a href="#research">Research</a>
      </nav>

      {/* Home Section */}
      {/* Home Section */}
<section id="home">
  <header>
    <h1>Fayaud MEZATIO TSAFACK, Ph.D.</h1>
    <p>Applied Mathematician & Data Scientist</p>
    <p>Email: <a href="mailto:mezatiofayaud@gmail.com">mezatiofayaud@gmail.com</a></p>
    <p>
      GitHub:{' '}
      <a href="https://github.com/Fayaud" target="_blank" rel="noreferrer">
        github.com/Fayaud
      </a>
    </p>
    <p>
      LinkedIn:{' '}
      <a href="https://www.linkedin.com/in/fayaudmezatio/" target="_blank" rel="noreferrer">
        linkedin.com/in/fayaudmezatio
      </a>
    </p>
  </header>

  {/* Welcome message */}
  <div className="welcome-message">
    <p>
      Welcome to my professional portfolio! I’m passionate about leveraging Mathematics, AI, and 
      data-driven solutions to solve real-world problems. Explore my projects, research, and experience
       to learn more about my work and expertise. Feel free to get in touch via email or LinkedIn.
       I’m always open to collaboration and new opportunities.
    </p>
  </div>
</section>


      {/* About Me Section */}
      <section id="about">
  <h2>About Me</h2>
  <div className="about-content">
    <img
      src={process.env.PUBLIC_URL + "/images/profile.jpg"}
      alt="Fayaud MEZATIO TSAFACK"
      className="profile-picture"
    />
    <p>
      I’m Fayaud MEZATIO TSAFACK, a passionate Applied Mathematician and Data Scientist with a Ph.D.
      in Computational Mathematics from the University of Ottawa. With expertise spanning artificial
      intelligence, mathematical modeling, and data analysis, I specialize in leveraging Python, 
      SQL, and cloud computing to solve complex problems. I have extensive experience in research,
      university-level teaching, and real-world data science projects, driven by a commitment to 
      innovation and continuous learning.
    </p>
  </div>
</section>

      {/* Education Section */}
      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>
            <strong>Ph.D. in Computational Mathematics</strong><br />
            University of Ottawa, Canada, 2024<br />
            Thesis: Analysis of time-periodic Navier-Stokes equations in a <br />
             moving domain and numerical computations with radial basis <br />
             neural networks. Application to artificial hearts blood flow.
          </li>
          <li>
            <strong>Master in Applied and Computational Mathematics</strong><br />
            African Institute for Mathematical Sciences (AIMS), Kigali, Rwanda, 2019<br />
            Thesis: Towards regularity for the fractional Keller-Segel model
          </li>
          <li>
            <strong>Master in Pure Mathematics</strong><br />
            University of Yaoundé 1, Cameroon<br />
            Thesis: Numerical approaches for a coupled nonlocal reaction-diffusion system
          </li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>AI-based artificial heart blood flow modeling</li>
          <li>Deep learning for image recognition</li>
          <li>Analysis of a Time-Periodic and Nonlinear Navier-Stokes Flow</li>
          <li>Toward Regularity Property for a Fractional Keller-Segel Model</li>
          <li>Financial derivatives of the Black-Scholes equations</li>
          <li>Numerical Approach to Reaction-Diffusion Models</li>
        </ul>
      </section>

      {/* CV Section */}
      <section id="cv">
        <h2>Curriculum Vitae</h2>
        <p>Download my CV below:</p>
        <ul>
          <li>
            <a href={process.env.PUBLIC_URL + "/documents/CV_Fayaud.pdf"}
               target="_blank"
               rel="noreferrer">
              Download CV (PDF)
            </a>
          </li>
        </ul>
      </section>

      {/* Teaching Section */}
      <section id="teaching">
        <h2>Teaching Experience</h2>
        <ul>
          <li>University of Ottawa — Teaching Assistant, Mathematics  (2019–2024)</li>
          <li>University of Ottawa — Tutor (Math Help Center), Mathematics  (2020–2024)</li>
          <li>AIMS-Rwanda — Personal Tutor, Mathematics  (2018–2019)</li>
          <li>Biyem-Assi — Teacher, Mathematics (2017–2018)</li>
        </ul>
      </section>

      {/* Research Section */}
      <section id="research">
        <h2>Research</h2>
        <ul>
          <li>Time-periodic Navier-Stokes equations in moving domains</li>
          <li>AI modeling for artificial heart blood flow</li>
          <li>Fractional Keller-Segel model regularity</li>
          <li>Deep learning for computer vision and image recognition</li>
        </ul>
      </section>
    </div>
  );
}

export default App;

