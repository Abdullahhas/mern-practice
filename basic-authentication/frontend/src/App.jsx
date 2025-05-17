import { useEffect, useState } from "react";
import axios from "axios";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function App() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  // Check if user is already logged in on mount
  const checkAuth = async () => {
      try {
        const res = await axios.get("http://localhost:3000/current-user");
        setAuthUser(res.data);
      } catch (err) {
        setAuthUser(null);
      }
    };
  useEffect(() => {
    
    checkAuth();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.username || !form.email || !form.password) return;

    try {
      const res = await axios.post("http://localhost:3000/register", form);
      setForm({ username: "", email: "", password: "" });
      navigate("/login");
    } catch (error) {
      console.log("Error during signup:", error);
    }
  };

  const handleLogin = async (e) => {
  e.preventDefault();
  if (!form.email ) return;

  try {
    const res = await axios.post("http://localhost:3000/login", form);
    console.log("Login response:", res.data); // Add this for debugging
    
    if (res.data.user) {
      setAuthUser(res.data.user);
      navigate("/", { replace: true }); // Add replace:true to prevent back navigation to login
    }
  } catch (error) {
    console.log("Error during login:", error.response?.data || error.message);
    alert(error.response?.data?.message || "Login failed");
  }
};

  return (
    <Routes>
      <Route
        path="/"
        element={authUser ? <Home  /> : <Navigate to="/login" />}
      />
      <Route
        path="/register"
        element={
          !authUser ? (
            <Register form={form} setForm={setForm} handleSubmit={handleSubmit} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/login"
        element={
          !authUser ? (
            <Login form={form} setForm={setForm} handleSubmit={handleLogin} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default App;
