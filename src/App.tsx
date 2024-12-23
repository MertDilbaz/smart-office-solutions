import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import TechnicalDetails from './pages/TechnicalDetails';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-amber-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technical-details" element={<TechnicalDetails />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;