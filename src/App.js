import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path='/' element={<Home setProgress={setProgress} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
