import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react"

function ThemeToggle() {
    const [theme, setTheme] = useState(
      true
    );

    useEffect(() => {
      localStorage.setItem("theme", "light");
      // setTheme(false);
      // document.body.classList.add("dark-mode");
    }, []);

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
      console.log(theme);
      console.log("Old Theme: " + localStorage.getItem("theme") + " = " + (theme ? "light" : "dark"));
      setTheme(!theme);
      localStorage.setItem("theme", !theme ? "light" : "dark");
      console.log("dark mode toggled");
    }

  return<div>
        <button id="darkModeToggle" type="button" className="btn btn-outline-primary me-2"
        onClick={toggleDarkMode}>
            {!theme ? (
                <Sun className="h-6 w-6 text-yellow-400" />
            ) : (
                <Moon className="h-6 w-6 text-blue-500" />
            )}
        </button>
  </div>;
}

export default ThemeToggle;