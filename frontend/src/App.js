import React, { useState, useEffect, useMemo } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import bg from "./img/bg.png";
import { MainLayout } from "./styles/Layouts";
import Orb from "./Components/Orb/Orb";
import Navigation from "./Components/Navigation/Navigation";
import Dashboard from "./Components/Dashboard/Dashboard";
import Income from "./Components/Income/Income";
import Expenses from "./Components/Expenses/Expenses";
// import { useGlobalContext } from "./context/globalContext";
import SignUp from "./pages/signup.js"; 
import Login from "./pages/login.js"; 
import SplashScreen from "./Components/splashscreen/Splashscreen.js"; 

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    if (!loading) {
      // After splash screen, navigate to the current path (prevents forced dashboard)
      navigate(window.location.pathname);
    }
  }, [loading, navigate]);

  return (
    <AppStyled bg={bg} className="App">
      {loading ? (
        <SplashScreen />
      ) : (
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<MainApp />} />
        </Routes>
      )}
    </AppStyled>
  );
}

function MainApp() {
  const location = useLocation();
  const orbMemo = useMemo(() => <Orb />, []);

  if (location.pathname === "/signup" || location.pathname === "/login") {
    return null;
  }

  return (
    <>
      {orbMemo}
      <MainLayout>
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
          </Routes>
        </main>
      </MainLayout>
    </>
  );
}

const AppStyled = styled.div`
  height: 100vh;
  background-image: url(${(props) => props.bg});
  position: relative;
  main {
    flex: 1;
    background: rgba(252, 246, 249, 0.78);
    border: 3px solid #ffffff;
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
`;

export default function Root() {
  return (
    <Router>
      <App />
    </Router>
  );
}
