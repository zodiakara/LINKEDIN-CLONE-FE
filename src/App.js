import MainNavbar from "./components/MainNavbar";
import MainFooter from "./components/MainFooter";
import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, Row } from "react-bootstrap";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import UserProfile from "./components/UserProfile";
import SignUpPage from "./components/SignUpPage";
import LoginPage from "./components/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainNavbar />
        <Container>
          <Row>
            <Routes>
              <Route path="/profile/:userId" element={<UserProfile />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/register" element={<SignUpPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Row>
          <MainFooter />
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
