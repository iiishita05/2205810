import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Topusers from "./pages/Topusers"; 
import Trend from "./pages/Trend"; 
import FeedPage from "./pages/Feedpage"; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/top-users" element={<Topusers />} />
        <Route path="/trending" element={<Trend />} />
        <Route path="/feed" element={<FeedPage />} />
      </Routes>
    </Router>
  );
}

export default App;
