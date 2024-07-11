import './App.scss';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Feature1 from './components/Feature1';
import Testimonials from './components/Testimonials';
import Services from './components/Services';
import Feature2 from './components/Feature2';
import Feature3 from './components/Feature3';
import Feature4 from './components/Feature4';
import Insights from './components/Insights';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Feature1 />
      <Testimonials />
      <Services />
      <Feature2 />
      <Feature3 />
      <Insights />
      <Feature4 />
      <Footer />
    </div>
  );
}

export default App;
