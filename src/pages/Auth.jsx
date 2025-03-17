import { useState } from "react";
import { login, signup } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ username: "", password: "" },
    {headers: {
      Authorization: `Token ${localStorage.getItem("token")}`, // Ensure token is stored in localStorage
      "Content-Type": "application/json",
    },}
  );
  const [error, setError] = useState("");
  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const data = isLogin ? await login(formData) : await signup(formData);
      console.log(data)
      localStorage.setItem("token", data.token); // Store token in localStorage
      navigate("/"); // Redirect to home after login/signup
    } catch (error) {
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} className="auth-form">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>

      <button onClick={() => setIsLogin(!isLogin)} className="toggle-btn">
        {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
      </button>
    </div>
  );
}

export default Auth;
