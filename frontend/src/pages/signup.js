import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", user);
    // Add API call to send signup data to backend
  };

  return (
    <AuthStyled>
      <div className="form-container">
        <h2>Sign Up</h2>
        <button className="google-btn">Sign up with Google</button>
        <hr />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </AuthStyled>
  );
};

// Styled Components
const AuthStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #ff758c, #ff7eb3);
  
  .form-container {
    background: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 350px;
  }

  h2 {
    margin-bottom: 1rem;
  }

  .google-btn {
    background: #db4437;
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    margin-bottom: 10px;
    cursor: pointer;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .auth-btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 10px;
    width: 100%;
    cursor: pointer;
  }

  p {
    margin-top: 1rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
  }
`;

export default Signup;
  