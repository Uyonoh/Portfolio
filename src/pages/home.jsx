function Home() {
    return(
        <div>
            {/* <!-- Home Section --> */}
  <section id="home" className="hero">
    <h1>Hello, <br /> I'm Uyonoh, a Web Developer & Python Engineer</h1>
    <p className="blue-green text-center">Building the future with code and innovation.</p>
    <button onClick={() => window.location.href='#projects'}>My Work</button>
    <button className="button outline" onClick={() => window.location.href='#footer'}>Get in Touch</button>
  </section>
  

  {/* Tech stack section */}
  <section id="tech-stack" class="py-5 bg-light dark:bg-dark">
    <div class="container text-center">
      <h2 class="mb-4">My Tech Stack</h2>
      <div class="row justify-content-center g-4">
        
        {/* <!-- Example for Python --> */}
        <div class="col-4 col-md-2">
          <i class="devicon-python-plain colored tech-icon"></i>
          {/* <p class="mt-2">Python</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-tensorflow-original colored tech-icon"></i>
          {/* <p class="mt-2">TensorFlow</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-pytorch-original colored tech-icon"></i>
          {/* <p class="mt-2">PyTorch</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-selenium-original colored tech-icon"></i>
          {/* <p class="mt-2">Selenium</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-django-plain colored tech-icon"></i>
          {/* <p class="mt-2">Django</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-react-original colored tech-icon"></i>
          {/* <p class="mt-2">React</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-nextjs-plain colored tech-icon"></i>
          {/* <p class="mt-2">Next.js</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-bootstrap-plain colored tech-icon"></i>
          {/* <p class="mt-2">Bootstrap</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-tailwindcss-original colored tech-icon"></i>
          {/* <p class="mt-2">Tailwind</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-fastapi-plain colored tech-icon"></i>
          {/* <p class="mt-2">FastAPI</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-javascript-plain colored tech-icon"></i>
          {/* <p class="mt-2">JavaScript</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-typescript-plain colored tech-icon"></i>
          {/* <p class="mt-2">TypeScript</p> */}
        </div>

        <div class="col-4 col-md-2">
          <i class="devicon-c-plain colored tech-icon"></i>
          {/* <p class="mt-2">C</p> */}
        </div>

      </div>
    </div>
  </section>



  {/* <!-- Projects Section --> */}
  <section id="projects" className="container pt-5 mt-5">
    <h2>Projects</h2>
    <div className="project-grid">
      {/* <!-- Project Item --> */}
      <div className="project-card"
      onClick={() => window.open("https://github.com/uyonoh/portfolio", "_blank")}>
        <img src="/assets/images/projects/portfolio.jpg" alt="Project 1" />
        <p>Portfolio</p>
      </div>
      <div className="project-card"
      onClick={() => window.open("https://github.com/uyonoh/quiz-app", "_blank")}>
        <img src="/assets/images/projects/quiz_app.png" alt="Trivia Web App" />
        <p>Trivia Web App</p>
      </div>
      <div className="project-card"
      onClick={() => window.open("https://github.com/uyonoh/Nexus", "_blank")}>
        <img src="/assets/images/projects/nexus.png" alt="Tech Nexus Eccomerce Platform" />
        <p>Tech Nexus Eccommerce</p>
      </div>
      <div className="project-card"
      onClick={() => window.open("https://github.com/uyonoh/Cover-Letter-LLM", "_blank")}>
        <img src="/assets/images/projects/letter.jpg" alt="Project 4" /> 
        {/* <a href="https://www.freepik.com/free-vector/gradient-network-connection-background_12704532.htm">Image by freepik</a> */}
        <p>AI Assisted Cover Letters</p>
      </div>
      <div className="project-card"
      onClick={() => window.open("https://github.com/uyonoh", "_blank")}>
        <img src="/assets/images/logos/github.png" alt="Git Hub" />
        <p>More from me...</p>
      </div>
      {/* <!-- Repeat for more projects --> */}
    </div>
  </section>

  {/* <!-- About Section --> */}
  <section id="about" className="container pt-5 mt-5">
    <h2>About Me</h2>
    <p>I consider myself a passionate web developer, python engineer and GIS analyst with a passion for building 
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
    
  </section>
  </div>
    )
}

export default Home;
