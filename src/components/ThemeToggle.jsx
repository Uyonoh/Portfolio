import { useState } from "react";
// import { Sun, Moon } from "lucide-react"

function Sun() {
    return <div>Sun</div>
}

function Moon() {
    return <div>Moon</div>
}

function ThemeToggle() {
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") === "dark" ? false : true
    );
    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      setTheme(!theme);
      localStorage.setItem("theme", theme ? "light" : "dark");
      console.log("dark mode toggled");
    }

  return<div>
        <button id="darkModeToggle" type="button" className="btn btn-outline-primary me-2"
        onClick={toggleDarkMode}>
            {theme ? (
                <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
                <Moon className="h-6 w-6 text-blue-500" />
            )}
        </button>
  </div>;
}

export default ThemeToggle;