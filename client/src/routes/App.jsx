import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import Form from "../pages/Form";
import DetailGame from "../containers/DetailGame";

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path='/' element={<LandingPage />} />
            <Route exact path='/home' element={<Home/> } />
            <Route exact path='/form' element={<Form />} />}
            <Route exact path='/videoGame/:id' element={<DetailGame/>} />
        </Routes>
    </Router>
  );
};

export default App;
