import ThemeToggle from "./ThemeToggle"

function Header() {
  const blogLink = "#" //process.env.REACT_APP_BLOG_LINK || "https://blog-uyonoh.onrender.com";

  
    return(
    <div className="container">
    <header className="d-flex flex-wrap align-items-center  justify-content-between mb-4 py-0 py-md-2 py-xl-3 border-bottom">
      <div className="col-md-3 mb-2 mb-md-0 d-none d-lg-block">
        <a href="#" className="d-inline-flex link-body-emphasis text-decoration-none">
          <svg className="bi" width="40" height="32" role="img" aria-label="Blank"></svg>
        </a>
      </div>

      <nav className="navbar navbar-expand-lg">                               
        <div className="container-fluid">
          <button id="menu" className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-start text-lg-center">
              <li><a href="#projects" className="blue-green nav-link px-2">Projects</a></li>
              <li><a href={blogLink} className="blue-green nav-link px-2">Blog</a></li>
              {/* <li><a href="#about" className="blue-green nav-link px-2">About</a></li> */}
              <li><a href="#footer" className="blue-green nav-link px-2">Contact</a></li>
            </ul>
          </div>
          
        </div>
      </nav>

      <div className="col-md-3 text-end hidden-lg-0">
        {/* <CurrentUser /> */}
        <ThemeToggle />
          {/* <button type="button" className="btn btn-outline-primary me-2">Login</button> */}
          {/* <button type="button" className="btn btn-primary">Sign-up</button> */}
      </div>
    </header>
    {/* <script src="/scripts/script.js" type="text/JavaScript" defer></script> */}
  </div>
    )
}

export default Header;