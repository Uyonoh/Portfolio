import { useEffect } from "react";
import CurrentUser from "../utils/user";

function Header() {

  const user = localStorage.getItem("user");
  useEffect(() => {
    const button = document.getElementById("darkModeToggle");

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      console.log("dark mode toggled");
    }

    if (button) {
      button.addEventListener("click", toggleDarkMode);
    }

    return () => {
      if (button) {
        button.removeEventListener("click", toggleDarkMode);
      }
    };
  }, []);

  
    return(
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-between justify-content-md-between mb-4 py-0 py-md-2 py-xl-3 border-bottom">
      {/* <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"></use></svg>
        </a>
      </div> */}

      <nav className="navbar navbar-expand-lg">                               
        <div className="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li><a href="." className="blue-green nav-link px-2">Home</a></li>
              <li><a href="#about" className="blue-green nav-link px-2">About</a></li>
              <li><a href="#projects" className="blue-green nav-link px-2">Projects</a></li>
              <li><a href="/blog" className="blue-green nav-link px-2">Blog</a></li>
              <li><a href="#footer" className="blue-green nav-link px-2">Contact</a></li>
            </ul>
          </div>
          
        </div>
      </nav>

      <div class="col-md-3 text-end">
        {/* <CurrentUser /> */}
        <button id="darkModeToggle" type="button" className="btn btn-outline-primary me-2" >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
          <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
        </svg>
        </button>
          {/* <button type="button" class="btn btn-outline-primary me-2">Login</button> */}
          {/* <button type="button" class="btn btn-primary">Sign-up</button> */}
      </div>
    </header>
    {/* <script src="/scripts/script.js" type="text/JavaScript" defer></script> */}
  </div>
    )
}

export default Header;