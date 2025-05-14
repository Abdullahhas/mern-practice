import { useState } from "react";
import axios from "axios";
import Register from "./components/Register";
import Login from "./components/Login";
import { Routes, Route, useNavigate, redirect } from "react-router-dom";

function App() {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation before sending data
    if (!form.username || !form.email || !form.password) {
      console.log("Please fill all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/register", form);
      console.log(res.data);

    
      setForm({ username: "", email: "", password: "" });

      
      navigate("/login");
    } catch (error) {
      console.log("Error during signup:", error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      console.log("Please enter both username and password.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:3000/api/login", form);
      console.log(res.data);
    
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Register
              form={form}
              setForm={setForm}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login form={form} setForm={setForm} handleSubmit={handleLogin} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
