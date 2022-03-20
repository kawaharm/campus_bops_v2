import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SchoolsContextProvider } from "./context/CampusContext";


import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import SchoolDetail from "./routes/SchoolDetail";

function App() {
  return (
    <SchoolsContextProvider>
      {/* container class will give page side margins */}
      <Navbar />
      <div className="container">
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home />} />
            <Route
              path="/schools/:id"
              element={<SchoolDetail />} />
          </Routes>
        </Router>
      </div>
    </SchoolsContextProvider>
  );
}

export default App;
