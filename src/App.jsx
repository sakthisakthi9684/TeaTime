// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Types from "./pages/Types"; // Import Types page
import Feedback from "./pages/Feedback"; // Import Feedback page
import NoPage from "./pages/Nopage";
import TeaOrder from "./pages/TeaOrder";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="order" element={<TeaOrder />} /> 
          <Route path="types" element={<Types />} /> {/* Add Types route */}
          <Route path="feedback" element={<Feedback />} /> {/* Add Feedback route */}
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
