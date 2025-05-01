function Home() {
    return(
        <div>
            {/* <!-- Home Section --> */}
  <section id="home" className="hero">
    <h1>Hello, <br /> I'm Uyonoh, a Web Developer & Python Engineer</h1>
    <p className="blue-green">Building the future with code and innovation.</p>
    <button onClick={() => window.location.href='#projects'}>View Projects</button>
    <button className="button outline" onClick={() => window.location.href='#footer'}>Contact Me</button>
  </section>
  

  {/* <!-- About Section --> */}
  <section id="about" className="container">
    <h2>About Me</h2>
    <p>I consider myself a passionate web developer, python engineer and GIS engineer with a passion for building 
      intelligent, data-driven applications.</p>
    <h3>My journey</h3>
    <p>While taking my first degree in Surveying and Geo-informatics, I honed my skills in spatial data analysis and visualization.
      Emmersed in my love for pogramming, I expanded my expertise to Python programming, machine leaning and web development, allowing me to bridge the gap between geospatial data and AI powered solutions.
      I eventually got into the C programming language to further my understanding of programming and computer fundamentals and memory management.
    </p>
    <p>Throughout my journey, I have worked on projects ranging from building footprint extraction using Mask-RCNN
      to developing automated data pipelines and deploying full-stack web applications.
    </p>
    <p>I now have expirience with technologies like Django, React, PostgreSQL, Tensorflow, and cloud deployment platforms.
      Whether it's optimizing geospatial workflows, creating dynamic web applications, or training AI models,
      I thrive on solving complex problems and building scalable, impactful solutions.
    </p>
    <div id="certifications">
      <h3>Certifications</h3>
      {/* <ul>
        <li>Ai Productivity Hacks to Reimagine Your Workdsy and Career by Linkedin</li>
        <li>Build Your Generative AI Productivity Skills with Microsoft and Linkedin</li>
        <li>Career Essentials by Microsoft and Linkedin</li>
        <li>Programming Foundations: Fundamentals by Linkedin</li>
        <li>Programming Foundations: Beyond the Fundamentals by Linkedin</li>
        <li>Introduction to Prompt Engineering for Generative AI by Linkedin</li>
        <li>Introduction to Career Skills in Software Development bu Linkedin</li>
        <li>Developing Your Emotional Intelligence by Linkedin</li>
      </ul> */}

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="/assets/images/certifications/Build Your Generative AI Productivity Skills with Microsoft and LinkedIn.jpeg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/assets/images/certifications/Career Essentials in Software Development by Microsoft and LinkedIn.jpeg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="/assets/images/certifications/Introduction to Prompt Engineering for Generative AI.jpeg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    
  </section>

  {/* <!-- Projects Section --> */}
  <section id="projects" className="container">
    <h2>Projects</h2>
    <div className="project-grid">
      {/* <!-- Project Item --> */}
      <div className="project-card">
        <img src="/assets/images/projects/portfolio.jpg" alt="Project 1" />
        <a href="https://github.com/uyonoh/portfolio" target="_blank">Portfolio</a>
      </div>
      <div className="project-card">
        <img src="/assets/images/projects/quiz_app.png" alt="Trivia Web App" />
        <a href="https://github.com/uyonoh/quiz-app" target="_blank">Trivia Web App</a>
      </div>
      <div className="project-card">
        <img src="/assets/images/projects/portfolio.jpg" alt="Project 3" />
        <a href="https://github.com/uyonoh/project" target="_blank">Project 3</a>
      </div>
      <div className="project-card">
        <img src="/assets/images/projects/portfolio.jpg" alt="Project 4" />
        <a href="https://github.com/uyonoh/project" target="_blank">Project 4</a>
      </div>
      <div className="project-card">
        <img src="/assets/images/projects/portfolio.jpg" alt="Project 5" />
        <a href="https://github.com/uyonoh/project" target="_blank">Project 5</a>
      </div>
      {/* <!-- Repeat for more projects --> */}
    </div>
  </section>

  {/* <!-- Skills Section --> */}
  {/* <section id="skills" className="container">
    <h2>Skills</h2>
    <ul>
      <li>Web Development: <ul>
          <li className="indent">Front-end: Html, Css, Bootstrap, Javascrpit, React</li>
          <li className="indent">Back-end: Express, Django</li>
        </ul>
        </li>
      <li>Python</li>
      <li>Machine Learning: Tensorflow, Pytorch, Scikit-Learn</li>
    </ul>
  </section> */}

  {/* <!-- Blog Section --> */}
  {/* <section id="blog" className="container">
    <h2>Blog</h2>
    <p>Coming soon...</p>
  </section> */}

  {/* <!-- Contact Section --> */}
  {/* <section id="contact" className="container">
    <h2>Contact</h2>
    <ul>
      <li><a href="mailto:your-email@example.com">Email</a></li>
      <li><a href="https://github.com/your-github" target="_blank">GitHub</a></li>
      <li><a href="https://linkedin.com/in/your-linkedin" target="_blank">LinkedIn</a></li>
    </ul>
    <button onclick="window.location.href='resume.pdf'">Download Resume</button>
  </section> */}
        </div>
    )
}

export default Home;
