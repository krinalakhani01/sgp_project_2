import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png"; 

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/signup"); // Redirect to Signup
    }, 1000); // 1-second delay

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <SplashStyled>
      <img src={logo} alt="Expense Tracker Logo" />
      <h1>Expense Tracker</h1>
    </SplashStyled>
  );
};

const SplashStyled = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  font-family: Arial, sans-serif;
  
  img {
    width: 180px;
    height: auto;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 26px;
    font-weight: bold;
    color: #333;
  }
`;

export default SplashScreen;
