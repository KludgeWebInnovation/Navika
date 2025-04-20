
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './screens/Welcome.jsx';
import Assessment from './screens/Assessment.jsx';
import CheckIn from './screens/CheckIn.jsx';
import Result from './screens/Result.jsx';
import Dashboard from './screens/Dashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/checkin" element={<CheckIn />} />
        <Route path="/result" element={<Result />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
