import React from 'react';
import WorkBench from './pages/workbench';
import FormInput from './components/study/form';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WorkBench />} />
          <Route path="/projects" element={<FormInput />} />
        </Routes>
		  </Router>
    </>
  );
}

export default App;