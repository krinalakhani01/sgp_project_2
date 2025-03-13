import React, { useState } from "react";
import styled from "styled-components";
import { signInWithGoogle } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleGoogleSignIn = async () => {
    const user = await signInWithGoogle();
    if (user) navigate("/");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <AuthStyled>
      <div className="form-container">
        <h2>Login</h2>
        <button className="google-btn" onClick={handleGoogleSignIn}>
          Continue with Google
        </button>
        <hr />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} />
        <button className="auth-btn">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </div>
    </AuthStyled>
  );
};

const AuthStyled = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, #ff758c, #ff7eb3);
  
  .form-container {
    width: 400px;
    padding: 30px;
    background: white;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.15);
  }

  h2 {
    color: #333;
    margin-bottom: 15px;
  }

  .google-btn {
    background: #db4437;
    color: white;
    border: none;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  .google-btn:hover {
    background: #c1351d;
  }

  hr {
    margin: 20px 0;
    border: 0.5px solid #ddd;
  }

  input {
    width: 100%;
    padding: 10px;
    margin: 8px 0;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
  }

  .auth-btn {
    background: #007bff;
    color: white;
    border: none;
    padding: 12px;
    width: 100%;
    border-radius: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s;
  }

  .auth-btn:hover {
    background: #0056b3;
  }

  p {
    margin-top: 15px;
    font-size: 14px;
  }

  a {
    color: #ff758c;
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default Login;
