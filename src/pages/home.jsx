import TechGrid from "../components/TechGrid";
import ProjectGrid from "../components/ProjectGrid";

function Home() {
  return (
    <>
      {/* =========================================================
        COMPLETE METADATA BLOCK FOR UYONOH'S PORTFOLIO (REACT 19)
        =========================================================
    */}
      <title>
        Uyonoh's Portfolio | Web Developer, Python Engineer & GIS Analyst
      </title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="description"
        content="A passionate Full-Stack Web Developer, Python Engineer, and GIS Analyst building intelligent, data-driven applications. Portfolio includes AI, ML, and geospatial projects."
      />
      <meta name="author" content="Uyonoh" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#0d458fff" />
      {/* Adjust the theme-color hex code to match your primary portfolio color */}

      {/* === Open Graph (Facebook, LinkedIn, general social sharing) === */}
      <meta property="og:title" content="Uyonoh's Full-Stack & GIS Portfolio" />
      <meta
        property="og:description"
        content="Building the future with code and innovation: Python, React, Django, ML, and Geospatial solutions."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.uyonoh.com/" />
      <meta
        property="og:image"
        content="https://uyonoh.com/assets/images/projects/portfolio.png"
      />
      {/* Ensure the OG Image link is a direct, public URL to a high-quality image (1200x630px recommended) */}

      {/* === Twitter Card Tags === */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Uyonoh's Full-Stack & GIS Portfolio"
      />
      <meta
        name="twitter:description"
        content="Building the future with code and innovation: Python, React, Django, ML, and Geospatial solutions."
      />
      <meta
        name="twitter:image"
        content="https://uyonoh.com/assets/images/projects/portfolio-dark.png"
      />
      <meta name="twitter:creator" content="@uyonoh" />

      {/* =========================================================
        END OF METADATA BLOCK
        =========================================================
    */}

      {/* <!-- Home Section --> */}
      <section id="home" className="hero">
        <div className="profile">
          <img
            id="profile-pic"
            src="/assets/images/profile/profile.jpg"
            alt=""
          />
        </div>
        <h1>
          {" "}
          <span className="">Hello, I'm Uyonoh</span> <br /> A Web Developer ,
          Python Engineer <br /> & GIS Analyst
        </h1>
        <p className="blue-green text-center">
          Building the future with code and innovation.
        </p>
        <button onClick={() => (window.location.href = "#projects")}>
          My Work
        </button>
        <button
          className="button outline"
          onClick={() => (window.location.href = "#footer")}
        >
          Get in Touch
        </button>
      </section>

      {/* Tech stack section */}
      <section id="tech-stack" className="py-5 ">
        <div className="container text-center">
          <h2
            className="mb-4 blue-green"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Power Tools
          </h2>

          <TechGrid />
        </div>
      </section>

      {/* <!-- Projects Section --> */}
      <section
        id="projects"
        className="container pt-5 mt-5"
        data-aos="fade-right"
        data-aos-offset="10"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h2 className="blue-green">Projects</h2>
        <ProjectGrid />
      </section>

      {/* <!-- About Section -->
      <section
        id="about"
        className="container pt-5 mt-5"
        data-aos="zoom-in-up"
        data-aos-offset="10"
        data-aos-delay="200"
        data-aos-duration="1000"
      >
        <h2 className="blue-green">About Me</h2>
        <p>
          I am a passionate web developer, python engineer and GIS analyst with
          a passion for building intelligent, data-driven applications.
        </p>
        <h3>My journey</h3>
        <p>
          While taking my first degree in Surveying and Geo-informatics, I honed
          my skills in spatial data analysis and visualization. Immersed in my
          love for programming, I expanded my expertise to Python programming,
          machine learning and web development, allowing me to bridge the gap
          between geospatial data and AI powered solutions. I eventually got
          into the C programming language to further my understanding of
          programming and computer fundamentals and memory management.
        </p>
        <p>
          Throughout my journey, I have worked on projects ranging from building
          footprint extraction using Mask-RCNN to developing automated data
          pipelines and deploying full-stack web applications.
        </p>
        <p>
          I now have experience with technologies like Django, React,
          PostgreSQL, Tensorflow, and cloud deployment platforms. Whether it's
          optimizing geospatial workflows, creating dynamic web applications, or
          training AI models, I thrive on solving complex problems and building
          scalable, impactful solutions.
        </p>
      </section> */}
    </>
  );
}

export default Home;
