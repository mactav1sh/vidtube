import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VideosProvider from './contexts/VideosContext';
import Home from './components/pages/Home';
import VideoPlayer from './components/pages/VideoPlayer';
import Notfound from './components/pages/Notfound';

import NavBar from './components/sections/NavBar';
import Footer from './components/sections/Footer';

function App() {
  return (
    <Router>
      <VideosProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video/:id" element={<VideoPlayer />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer />
      </VideosProvider>
    </Router>
  );
}

export default App;
