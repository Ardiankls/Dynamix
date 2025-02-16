import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>pixelbooth</h1>
      <p>Welcome to Agnes' photobooth! This is your personal photobooth at home.</p>
      <button onClick={() => navigate("/welcome")}>START</button>
      <footer>made by <span style={{ color: "pink" }}>agneswei</span></footer>
    </div>
  );
};

export default Home;
