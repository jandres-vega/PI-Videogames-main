import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import Form from "../pages/Form";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/home' element={<Home/> } />
            <Route exact path='/form' element={<Form />} />}
        </Routes>
    </Router>
  );
};

export default App;
