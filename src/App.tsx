import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Homepage from './pages/Homepage';  // Import the Homepage component
import Buildspage from './pages/Buildspage';  // Import the Buildspage component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/build/:championId" element={<Buildspage />} />  {/* Use element instead of component */}
      </Routes>
    </Router>
  );
};

export default App;
