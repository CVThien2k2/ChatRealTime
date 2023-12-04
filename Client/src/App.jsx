import { useContext, useState } from "react";
import "./style.scss";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { Route, Routes, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { AuthContext } from "./context/AuthContext";
import SetAvatar from "./components/SetAvatar";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <NavBar />
      <Container className="text-secondary">
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          {/* <Route path="/setAvatar" element={user ? <Home /> : <SetAvatar />} /> */}

          {/* <Route path="/*" element={<Navigate to="/" />} /> */}

          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      </Container>
    </>
  );
}

export default App;
