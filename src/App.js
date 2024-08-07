import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LP1 from './pages/LP1';
import LP2 from './pages/LP2';
import CustomerSupport from './pages/CustomerSupport';
import TechnicalSupport from './pages/TechnicalSupport';
import DataManagement from './pages/DataManagement';
import ContentModeration from './pages/ContentModeration';
import BackOffice from './pages/BackOffice';
import HomePage from './pages/HomePage';
import LP3 from './pages/LP3';
import HowItWorks from './pages/HowItWorks';
import HireSupport from './pages/HireSupport';
import { ModalProvider } from './contexts/ModalContext';

function App() {
  return (
    <ModalProvider>

      <Router>
        <div className="App">
          <Routes>
            {/* <Route path="/" element={<HomePage />} /> */}
            <Route path="/" element={<HireSupport />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/lp3" element={<LP3 />} />

            {/* <Route path="/lp1" element={<LP1 />} /> */}
            {/* <Route path="/lp2" element={<LP2 />} /> */}
            {/* <Route path="/customer-support" element={<CustomerSupport />} /> */}
            {/* <Route path="/technical-support" element={<TechnicalSupport />} /> */}
            {/* <Route path="/data-management" element={<DataManagement />} /> */}
            {/* <Route path="/content-moderation" element={<ContentModeration />} /> */}
            {/* <Route path="/back-office" element={<BackOffice />} /> */}
            {/* <Route path="/hire-support" element={<HireSupport />} /> */}
          </Routes>
        </div>
      </Router>
    </ModalProvider>

  );
}

export default App;
