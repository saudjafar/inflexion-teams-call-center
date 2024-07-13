import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LP1 from './pages/LP1';
import LP2 from './pages/LP2';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/lp1" element={<LP1 />} />
          <Route path="/lp2" element={<LP2 />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
